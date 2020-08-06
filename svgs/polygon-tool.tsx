import { FC } from 'react';
import { ToolIcon } from '../types';

const PolygonTool: FC<ToolIcon> = ({ active, ...rest }) => {
  const color = active ? '#3EB489' : '#999999';
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <path
        d="M16.794 6.98l8.427 6.123c.473.344.671.953.49 1.51l-3.219 9.906c-.18.557-.699.933-1.284.933H10.792a1.35 1.35 0 01-1.284-.933l-3.22-9.907a1.35 1.35 0 01.49-1.51l8.428-6.122a1.35 1.35 0 011.588 0z"
        stroke={color}
        strokeWidth={1.3}
      />
    </svg>
  );
};

export default PolygonTool;
