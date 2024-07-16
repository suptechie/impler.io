import { ApiTags, ApiSecurity, ApiOperation } from '@nestjs/swagger';
import { Body, Controller, Get, Param, ParseArrayPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CreateUserJob, GetJobMapping, CreateJobMapping, UpdateUserJob } from './usecase';
import { UpdateJobMappingDto } from './dtos/update-jobmapping.dto';
import { UpdateJobInfoDto } from './dtos/update-jobinfo.dto';
import { JwtAuthGuard } from '@shared/framework/auth.gaurd';
import { ACCESS_KEY_NAME } from '@impler/shared';

@ApiTags('Import-Jobs')
@Controller('/import-jobs')
@UseGuards(JwtAuthGuard)
@ApiSecurity(ACCESS_KEY_NAME)
export class ImportJobsController {
  constructor(
    private createUserJob: CreateUserJob,
    private getJobMapping: GetJobMapping,
    private updateJobMapping: CreateJobMapping,
    private updateCronExpresion: UpdateUserJob
  ) {}
  @Post(':templateId')
  @ApiOperation({ summary: 'Create User Job' })
  @UseGuards(JwtAuthGuard)
  @ApiSecurity(ACCESS_KEY_NAME)
  async createUserJobRoute(@Param('templateId') templateId: string, @Body() body: { url: string }) {
    return this.createUserJob.execute({
      _templateId: templateId,
      url: body.url,
    });
  }

  @Get(':jobId/mappings')
  @ApiOperation({ summary: 'Fetch the Import Job Information based on jobId' })
  @UseGuards(JwtAuthGuard)
  @ApiSecurity(ACCESS_KEY_NAME)
  async getImportJobInfoRoute(@Param('jobId') jobId: string) {
    return this.getJobMapping.execute(jobId);
  }

  @Put(':jobId/mappings')
  @ApiOperation({ summary: 'Update Mappings Route' })
  @UseGuards(JwtAuthGuard)
  async updateMappingRoute(
    @Param('jobId') jobId: string,
    @Body(new ParseArrayPipe({ items: UpdateJobMappingDto, optional: true })) body: UpdateJobMappingDto[]
  ) {
    return this.updateJobMapping.execute(body);
  }

  @Put(':jobId')
  @ApiOperation({ summary: 'Update Fields' })
  @UseGuards(JwtAuthGuard)
  async updateUserJobRoute(@Param('jobId') jobId: string, @Body() userJobData: UpdateJobInfoDto) {
    this.updateCronExpresion.execute(jobId, userJobData);
  }
}
