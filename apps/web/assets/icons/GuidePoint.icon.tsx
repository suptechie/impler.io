import React from 'react';
import { IconType } from '@types';
import { IconSizes } from 'config';

export const GuidePointIcon = ({ size = 'sm', color }: IconType) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={IconSizes[size]}
      height={IconSizes[size]}
      fill={color}
    >
      <path d="m18 20.75h-12a2.75 2.75 0 0 1 -2.75-2.75v-12a2.75 2.75 0 0 1 2.75-2.75h6a.75.75 0 0 1 0 1.5h-6a1.25 1.25 0 0 0 -1.25 1.25v12a1.25 1.25 0 0 0 1.25 1.25h12a1.25 1.25 0 0 0 1.25-1.25v-6a.75.75 0 0 1 1.5 0v6a2.75 2.75 0 0 1 -2.75 2.75z" />
      <path d="m20 8.75a.76.76 0 0 1 -.75-.75v-3.25h-3.25a.75.75 0 0 1 0-1.5h4a.76.76 0 0 1 .75.75v4a.76.76 0 0 1 -.75.75z" />
      <path d="m13.5 11.25a.74.74 0 0 1 -.5-.25.75.75 0 0 1 0-1l6.5-6.5a.75.75 0 1 1 1.06 1.06l-6.56 6.44a.74.74 0 0 1 -.5.25z" />
    </svg>
  );
};
