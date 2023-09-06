import { ApiService } from '@impler/client';
import { IUpload, ITemplate } from '@impler/shared';

export interface IImplerStore {
  projectId: string;
  templateId?: string;
  accessToken?: string;
  extra?: string;
  authHeaderValue?: string;
}

export interface IApiStore {
  api: ApiService;
}

export interface IAppStore {
  title?: string;
  data?: Record<string, string | number>[];
  templateInfo: ITemplate;
  uploadInfo: IUpload;
  reset: () => void;
  primaryColor: string;
  schema?: string;
  setTemplateInfo: (templateInfo: ITemplate) => void;
  setUploadInfo: (uploadInfo: IUpload) => void;
}
