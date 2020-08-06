const EllipseTool = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 26.5c-5.799 0-10.5-4.701-10.5-10.5S10.201 5.5 16 5.5 26.5 10.201 26.5 16 21.799 26.5 16 26.5z"
        stroke="#999999"
      />
    </svg>
  );
};

export default EllipseTool;
