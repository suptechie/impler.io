import { createStyles } from '@mantine/core';

export default createStyles((): Record<string, any> => {
  return {
    input: {
      borderRadius: 0,
    },
    itemsWrapper: {
      padding: 0,
    },
    dropdown: { borderRadius: 0 },
    item: { borderRadius: 0 },
    wrapper: {
      marginTop: 6,
    },
  };
});
