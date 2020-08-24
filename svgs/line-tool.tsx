import { ToolIcon } from '../types';
import { FC } from 'react';

const LineTool: FC<ToolIcon> = ({ active, ...rest }) => {
  const color = active ? '#3EB489' : '#777777';

  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <path d="M6.213 25.094l18.88-18.88a.15.15 0 01.212.212l-18.88 18.88a.15.15 0 11-.212-.212z" stroke={color} />
    </svg>
  );
};

export default LineTool;
