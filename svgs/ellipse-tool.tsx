import { FC } from 'react';
import { ToolIcon } from '../types';

const EllipseTool: FC<ToolIcon> = ({ active, ...rest }) => {
  const color = active ? '#3EB489' : '#999999';
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <path
        d="M16 26.35c-5.716 0-10.35-4.634-10.35-10.35 0-5.716 4.634-10.35 10.35-10.35 5.716 0 10.35 4.634 10.35 10.35 0 5.716-4.634 10.35-10.35 10.35z"
        stroke={color}
        strokeWidth={1.3}
      />
    </svg>
  );
};

export default EllipseTool;
