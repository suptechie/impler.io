export interface IUpload {
  _id: string;
  _templateId: string;
  _uploadedFileId: string;
  _allDataFileId: string;
  _validDataFileId: string;
  _invalidDataFileId: string;
  headings: string[];
  uploadedDate: Date;
  totalRecords: number;
  validRecords: number;
  invalidRecords: number;
  authHeaderValue: string;
  status: string;
  extra: string;
  __v: number;
  processInvalidRecords: boolean;
}
