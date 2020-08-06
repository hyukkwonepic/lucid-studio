const ArtboardTool = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M24 25.5H9.333a1.5 1.5 0 01-1.5-1.5V7.833h11.739a1.5 1.5 0 011.06.44l4.429 4.428a1.5 1.5 0 01.439 1.06V24a1.5 1.5 0 01-1.5 1.5z"
        stroke="#999999"
      />
      <path d="M25.333 13.333h-3.81c-1.218 0-1.523-1.015-1.523-1.524V8" stroke="#999999" />
      <rect x={7.333} y={3.333} width={1} height={8} rx={0.5} fill="#999999" />
      <rect x={11.333} y={7.333} width={1} height={8} rx={0.5} transform="rotate(90 11.333 7.333)" fill="#999999" />
    </svg>
  );
};

export default ArtboardTool;
