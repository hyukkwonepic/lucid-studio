const RectangleTool = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M8 6.5h16A1.5 1.5 0 0125.5 8v16a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 24V8A1.5 1.5 0 018 6.5z"
        stroke="#999999"
      />
    </svg>
  );
};

export default RectangleTool;
