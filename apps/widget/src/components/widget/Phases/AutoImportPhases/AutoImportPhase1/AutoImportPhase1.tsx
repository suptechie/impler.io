import { TextInput, Text, Stack } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container } from 'components/Common/Container';
import { PhasesEnum } from '@types';
import { AutoImportFooter } from 'components/Common/Footer/AutoImportFooter';
import { validateRssUrl } from '@util';
import { useAutoImportPhase1 } from '../hooks/AutoImportPhase1/useAutoImportPhase1';

interface IAutoImportPhase1Props {
  onNextClick: () => void;
}

interface FormValues {
  rssUrl: string;
}

export function AutoImportPhase1({ onNextClick }: IAutoImportPhase1Props) {
  const { getRssXmlHeading, isLoading } = useAutoImportPhase1({
    goNext: onNextClick,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    getRssXmlHeading(data.rssUrl);
  };

  return (
    <Container>
      <Stack spacing="xs" style={{ height: '100%', justifyContent: 'space-between' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text mt="sm" ml="md">
            RSS URL
          </Text>
          <TextInput
            maw="100%"
            placeholder="Enter the RSS URL"
            size="md"
            p="sm"
            style={{
              borderRadius: '10px',
              borderColor: errors.rssUrl ? 'red' : undefined,
            }}
            {...register('rssUrl', validateRssUrl)}
            error={errors.rssUrl && errors.rssUrl.message}
          />
          {errors.rssUrl && (
            <Text color="red" size="sm" mt="xs" ml="md">
              {errors.rssUrl.message}
            </Text>
          )}
        </form>

        <AutoImportFooter
          onNextClick={handleSubmit(onSubmit)}
          primaryButtonLoading={isLoading}
          onPrevClick={() => {}}
          active={PhasesEnum.CONFIGURE}
        />
      </Stack>
    </Container>
  );
}
