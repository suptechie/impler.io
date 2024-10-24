import React from 'react';
import { Card, Text, Badge, Stack, Divider } from '@mantine/core';
import { PlanFeature } from './PlanFeature';
import { Plan } from './Plans';
import useStyles from './Plans.styles';
import { Button } from '@ui/button';
import { colors, MODAL_KEYS, PLANCODEENUM } from '@config';
import { usePlanDetails } from '@hooks/usePlanDetails';

interface PlanCardProps {
  plan: Plan;
  isYearly: boolean;
  activePlanCode: string;
  email: string;
}

export function PlanCard({ plan, isYearly, activePlanCode, email }: PlanCardProps) {
  const { classes } = useStyles();
  const { onOpenPaymentModal } = usePlanDetails({ email });

  return (
    <Card
      shadow="sm"
      withBorder
      bg={plan.name === 'Growth' ? colors.faintGrey : 'black'}
      style={{ width: '340px', position: 'relative' }}
    >
      <Stack mt="md">
        {(plan.code === PLANCODEENUM.GROWTH || plan.code === PLANCODEENUM.GROWTH_YEARLY) && (
          <Badge color="blue" variant="gradient" className={classes.recommendedBadge}>
            Recommended
          </Badge>
        )}
        <Text className={classes.planName}>{plan.name}</Text>
        <Text className={classes.planPrice}>
          {plan.price === 0 ? 'Free' : `$${plan.price} / ${isYearly ? 'year' : 'month'}`}
        </Text>
        <Button
          className={classes.button}
          fullWidth
          onClick={() => onOpenPaymentModal({ code: plan.code, modalId: MODAL_KEYS.SELECT_CARD })}
          disabled={plan.code === PLANCODEENUM.STARTER || activePlanCode === plan.code}
        >
          {activePlanCode === plan.code ? 'Active Plan' : 'Choose Plan'}
        </Button>
        <Divider />
      </Stack>
      <Stack spacing={10}>
        <Divider />
        {Object.entries(plan.content).map(([category, items], categoryIndex) => (
          <React.Fragment key={category}>
            {category !== 'Features' && <Text>{category}</Text>}
            {items.map(({ check, title }, index) => (
              <PlanFeature key={`${category}-${index}`} included={check} value={title} />
            ))}
            {category !== 'Features' && categoryIndex < Object.keys(plan.content).length - 1 && <Divider my="sm" />}
          </React.Fragment>
        ))}
      </Stack>
    </Card>
  );
}
