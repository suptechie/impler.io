import { colors } from '@config';
import { Title, Text, Stack, Flex, Button, Skeleton } from '@mantine/core';
import { PlansModal } from '@components/plans-modal/PlansModal';
import { modals } from '@mantine/modals';
import { useApp } from '@hooks/useApp';
import { usePlanDetails } from '@hooks/usePlanDetails';

export function PlanDetails() {
  const { profile, isProfileLoading } = useApp();

  const data = usePlanDetails({
    email: profile?.email ?? '',
  });

  if (isProfileLoading) return <Skeleton width="100%" height="200" />;

  let numberOfRecords;
  if (typeof data?.meta.IMPORTED_ROWS === 'number') {
    numberOfRecords = data?.meta.IMPORTED_ROWS;
  } else if (Array.isArray(data?.meta.IMPORTED_ROWS) && (data?.meta.IMPORTED_ROWS as ChargeItem[]).length > 0) {
    numberOfRecords = (data?.meta.IMPORTED_ROWS[0] as ChargeItem).last_unit;
  } else {
    numberOfRecords = 0;
  }

  return (
    <Flex
      p="sm"
      gap="sm"
      direction="row"
      align="center"
      style={{ border: `1px solid ${colors.yellow}`, backgroundColor: colors.yellow + '20' }}
    >
      <Stack spacing="xs" style={{ flexGrow: 1 }}>
        <Title order={4}>Usage</Title>
        <Text>
          You have imported {data?.usage.IMPORTED_ROWS} of {numberOfRecords} records this month on the {data?.plan.name}{' '}
          Plan (Resets on {data?.expiryDate})
        </Text>
      </Stack>
      <Button
        onClick={() => {
          modals.open({
            children: <PlansModal modalTitle={'Choose Your Plan'} userProfile={profile!} />,
            size: 'xl',
          });
        }}
        color="yellow"
      >
        Upgrade Plan
      </Button>
    </Flex>
  );
}
