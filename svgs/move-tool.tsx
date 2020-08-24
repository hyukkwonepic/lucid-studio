import { FC } from 'react';
import { ToolIcon } from '../types';

const MoveTool: FC<ToolIcon> = ({ active, ...rest }) => {
  const color = active ? '#3EB489' : '#777777';
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <g>
        <path
          d="M14.436 25.284L7.459 8.648a.7.7 0 01.917-.916l16.635 6.976a.7.7 0 01.011 1.286l-5.856 2.57a1.7 1.7 0 00-.874.874l-2.57 5.856a.7.7 0 01-1.286-.01z"
          fill={color}
          stroke={color}
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
};

export default MoveTool;
