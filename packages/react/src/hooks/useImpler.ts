import { useCallback, useEffect, useState } from 'react';
import { logError } from '../utils/logger';
import { EventTypesEnum, IShowPayload, IUpload } from '@impler/shared';
import { EventCalls, UploadTemplateData, UploadData, ISchemaItem } from '../components/button/Button.types';

interface ShowWidgetProps {
  colorScheme?: 'light' | 'dark';
  schema?: ISchemaItem[];
  data?: Record<string, string | any>[];
  output?: Record<string, string | any>;
}

interface UseImplerProps {
  projectId: string;
  title?: string;
  templateId?: string;
  accessToken?: string;
  primaryColor?: string;
  extra?: string | Record<string, any>;
  authHeaderValue?: string | (() => string) | (() => Promise<string>);
  onUploadStart?: (value: UploadTemplateData) => void;
  onUploadTerminate?: (value: UploadData) => void;
  onUploadComplete?: (value: IUpload) => void;
  onWidgetClose?: () => void;
}

export function useImpler({
  projectId,
  primaryColor,
  templateId,
  accessToken,
  authHeaderValue,
  title,
  extra,
  onUploadComplete,
  onWidgetClose,
  onUploadStart,
  onUploadTerminate,
}: UseImplerProps) {
  const [isImplerInitiated, setIsImplerInitiated] = useState(false);

  const onEventHappen = useCallback(
    (eventData: EventCalls) => {
      switch (eventData.type) {
        case EventTypesEnum.WIDGET_READY:
          setIsImplerInitiated(true);
          break;
        case EventTypesEnum.UPLOAD_STARTED:
          if (onUploadStart) onUploadStart(eventData.value);
          break;
        case EventTypesEnum.UPLOAD_TERMINATED:
          if (onUploadTerminate) onUploadTerminate(eventData.value);
          break;
        case EventTypesEnum.UPLOAD_COMPLETED:
          if (onUploadComplete) onUploadComplete(eventData.value);
          break;
        case EventTypesEnum.CLOSE_WIDGET:
          if (onWidgetClose) onWidgetClose();
          break;
      }
    },
    [onUploadComplete, onUploadStart, onUploadTerminate, onWidgetClose]
  );

  const initWidget = useCallback(() => {
    if (window.impler) {
      window.impler.init(projectId, { accessToken });
      window.impler.on('message', onEventHappen);
    }
  }, [accessToken, onEventHappen, projectId]);

  useEffect(() => {
    if (!window.impler) logError('IMPLER_UNDEFINED_ERROR');
    else if (!projectId) logError('PROJECTID_NOT_SPECIFIED');
    else initWidget();
  }, [accessToken, templateId, initWidget]);

  const showWidget = async ({ colorScheme, data, schema, output }: ShowWidgetProps) => {
    if (isImplerInitiated) {
      const payload: IShowPayload = {
        templateId,
        data,
        host: '',
      };
      if (Array.isArray(schema) && schema.length > 0) {
        payload.schema = JSON.stringify(schema);
      }
      if (typeof output === 'object' && !Array.isArray(output) && output !== null) {
        payload.output = JSON.stringify(output);
      }
      if (title) payload.title = title;
      if (colorScheme) payload.colorScheme = colorScheme;
      else {
        const preferColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        payload.colorScheme = preferColorScheme;
      }
      if (primaryColor) payload.primaryColor = primaryColor;
      if (extra) {
        if (typeof extra === 'object') payload.extra = JSON.stringify(extra);
        else payload.extra = extra;
      }
      if (authHeaderValue) {
        if (typeof authHeaderValue === 'function' && authHeaderValue.constructor.name === 'AsyncFunction') {
          payload.authHeaderValue = await authHeaderValue();
        } else if (typeof authHeaderValue === 'function') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          payload.authHeaderValue = authHeaderValue();
        } else {
          payload.authHeaderValue = authHeaderValue;
        }
      }
      if (window.impler && isImplerInitiated) {
        window.impler.show(payload);
      }
    }
  };

  return { isImplerInitiated, showWidget };
}
