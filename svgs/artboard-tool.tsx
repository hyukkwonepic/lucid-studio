import { FC } from 'react';
import { ToolIcon } from '../types';

const ArtboardTool: FC<ToolIcon> = ({ active, ...rest }) => {
  const color = active ? '#3EB489' : '#777777';
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...rest}>
      <path
        d="M24 25.35H9.333A1.35 1.35 0 017.983 24V7.983h11.589c.358 0 .701.143.954.396l4.429 4.428c.253.253.395.597.395.955V24A1.35 1.35 0 0124 25.35z"
        stroke={color}
        strokeWidth={1.3}
      />
      <path d="M25.333 13.333h-3.81c-1.218 0-1.523-1.015-1.523-1.524V8" stroke={color} strokeWidth={1.5} />
      <rect x={7.333} y={3.333} width={1.3} height={8} rx={0.65} fill={color} />
      <rect x={11.333} y={7.333} width={1.3} height={8} rx={0.65} transform="rotate(90 11.333 7.333)" fill={color} />
    </svg>
  );
};

export default ArtboardTool;
