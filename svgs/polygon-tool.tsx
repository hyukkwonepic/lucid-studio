const PolygonTool = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16.882 6.859l8.427 6.123a1.5 1.5 0 01.545 1.677l-3.219 9.907a1.5 1.5 0 01-1.427 1.036H10.792a1.5 1.5 0 01-1.427-1.036l-3.22-9.907a1.5 1.5 0 01.546-1.678l8.427-6.122a1.5 1.5 0 011.764 0z"
        stroke="#999999"
      />
    </svg>
  );
};

export default PolygonTool;
