import { IconType } from '@types';
import { IconSizes } from 'config';

export const SearchIcon = ({ size = 'sm', color }: IconType) => {
  return (
    <svg
      width={IconSizes[size]}
      height={IconSizes[size]}
      color={color}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.02543 14.3122C9.6088 14.3131 11.1457 13.7917 12.3847 12.8328L16.6412 16.9713L17.787 15.8573L13.5305 11.7188C14.8563 10.0893 15.3472 7.96159 14.8646 5.93785C14.3818 3.91368 12.978 2.21322 11.0498 1.31733C9.12147 0.42126 6.87867 0.426937 4.9555 1.33309C3.03223 2.23907 1.6378 3.94666 1.1661 5.97322C0.694434 7.99973 1.19702 10.1249 2.53172 11.7476C3.8666 13.3704 5.88827 14.3143 8.02567 14.3126L8.02543 14.3122ZM8.02543 2.2257C9.45891 2.2257 10.8337 2.7794 11.8474 3.7649C12.8611 4.7504 13.4306 6.08705 13.4306 7.48071C13.4306 8.87436 12.8611 10.211 11.8474 11.1965C10.8337 12.182 9.45891 12.7357 8.02543 12.7357C6.59176 12.7357 5.21692 12.182 4.20327 11.1965C3.18961 10.211 2.62028 8.87436 2.62028 7.48071C2.62028 6.08705 3.18961 4.7504 4.20327 3.7649C5.21692 2.7794 6.59176 2.2257 8.02543 2.2257Z"
        fill="currentColor"
      />
    </svg>
  );
};
