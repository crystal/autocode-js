import { IIcon } from '@/interfaces/IIcon';
import { FC } from 'react';

export const JavaIcon: FC<IIcon> = ({ color = 'white', size = 16 }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    enableBackground="new 0 0 256 256"
    xmlSpace="preserve"
    width={size}
    height={size}
  >
    <g>
      <path
        fill={color}
        d="M94.4,198c0,0-9.8,5.7,7,7.6c20.3,2.3,30.7,2,53-2.2c0,0,5.9,3.7,14.1,6.9C118.3,231.7,55,209,94.4,198"
      />
      <path
        fill={color}
        d="M88.3,170c0,0-11,8.1,5.8,9.9c21.7,2.2,38.8,2.4,68.4-3.3c0,0,4.1,4.2,10.5,6.4
		C112.4,200.7,44.9,184.3,88.3,170"
      />
      <path
        fill={color}
        d="M139.9,122.4c12.3,14.2-3.2,27-3.2,27s31.4-16.2,17-36.5c-13.4-18.9-23.8-28.3,32.1-60.7
		C185.7,52.3,98,74.2,139.9,122.4"
      />
      <path
        fill={color}
        d="M206.2,218.7c0,0,7.2,6-8,10.6c-28.9,8.8-120.4,11.4-145.8,0.3c-9.1-4,8-9.5,13.4-10.6c5.6-1.2,8.8-1,8.8-1
		c-10.2-7.2-65.7,14.1-28.2,20.1C148.6,254.7,232.7,230.7,206.2,218.7"
      />
      <path
        fill={color}
        d="M99.1,140.9c0,0-46.5,11.1-16.5,15.1c12.7,1.7,38,1.3,61.5-0.7c19.3-1.6,38.6-5.1,38.6-5.1s-6.8,2.9-11.7,6.3
		c-47.2,12.4-138.5,6.6-112.2-6.1C81,139.7,99.1,140.9,99.1,140.9"
      />
      <path
        fill={color}
        d="M182.6,187.6c48-25,25.8-48.9,10.3-45.7c-3.8,0.8-5.5,1.5-5.5,1.5s1.4-2.2,4.1-3.2
		c30.7-10.8,54.2,31.8-9.9,48.7C181.6,188.8,182.4,188.2,182.6,187.6"
      />
      <path
        fill={color}
        d="M153.6,0c0,0,26.6,26.6-25.2,67.5c-41.6,32.8-9.5,51.5,0,72.9c-24.3-21.9-42.1-41.2-30.1-59.1
		C115.8,55,164.3,42.3,153.6,0"
      />
      <path
        fill={color}
        d="M103.8,255.2c46.1,3,116.9-1.6,118.6-23.5c0,0-3.2,8.3-38.1,14.8c-39.3,7.4-87.9,6.5-116.7,1.8
		C67.6,248.4,73.5,253.3,103.8,255.2"
      />
    </g>
  </svg>
);