import { Injectable } from '@nestjs/common';
import { FileMimeTypesEnum } from '@impler/shared';
import { ColumnRepository, TemplateRepository, CustomizationRepository } from '@impler/dal';
import { AddColumnCommand } from '../../commands/add-column.command';
import { StorageService } from '@impler/shared/dist/services/storage';
import { FileNameService } from '@shared/file/name.service';
import { createRecordFormat } from '@shared/helpers/common.helper';
import { CONSTANTS } from '@shared/constants';

@Injectable()
export class AddColumn {
  constructor(
    private columnRepository: ColumnRepository,
    private storageService: StorageService,
    private fileNameService: FileNameService,
    private templateRepository: TemplateRepository,
    private customizationRepository: CustomizationRepository
  ) {}

  async execute(command: AddColumnCommand, _templateId: string) {
    const columns = await this.columnRepository.find({ _templateId });
    const column = await this.columnRepository.create({
      ...command,
      sequence: columns.length,
    });
    const columnKeys = columns.map((columnItem) => columnItem.key);
    columnKeys.push(column.key);
    const variables = columns.map((columnItem) => CONSTANTS.RECORD_VARIABLE_PREFIX + columnItem.key);
    variables.push(CONSTANTS.RECORD_VARIABLE_PREFIX + column.key);

    await this.updateCustomization(_templateId, variables);
    await this.saveSampleFile(columnKeys.join(','), _templateId);

    return column;
  }

  listRecordVariables(data: AddColumnCommand[]): string[] {
    return data.map((column) => column.apiResponseKey ?? column.key);
  }

  async updateCustomization(_templateId: string, variables: string[]) {
    const customization = await this.customizationRepository.findOne({
      _templateId,
    });
    customization.recordVariables = variables;
    if (!customization.isRecordFormatUpdated) {
      customization.recordFormat = createRecordFormat(variables);
    }
    await this.customizationRepository.update({ _templateId }, customization);
  }

  async saveSampleFile(csvContent: string, templateId: string) {
    const fileName = this.fileNameService.getSampleFileName(templateId);
    const sampleFileUrl = this.fileNameService.getSampleFileUrl(templateId);
    await this.storageService.uploadFile(fileName, csvContent, FileMimeTypesEnum.CSV);
    await this.templateRepository.update({ _id: templateId }, { sampleFileUrl });
  }
}
