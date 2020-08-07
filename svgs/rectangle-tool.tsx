import { FC } from 'react';
import { ToolIcon } from '../types';

const RectangleTool: FC<ToolIcon> = ({ active, ...rest }) => {
  const color = active ? '#50bd94' : '#999999';
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <path
        d="M8 6.65h16c.746 0 1.35.604 1.35 1.35v16A1.35 1.35 0 0124 25.35H8A1.35 1.35 0 016.65 24V8c0-.746.604-1.35 1.35-1.35z"
        stroke={color}
        strokeWidth={1.3}
      />
    </svg>
  );
};

export default RectangleTool;
