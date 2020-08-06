const LineTool = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M6.098 25.898a.667.667 0 010-.943L24.954 6.1a.667.667 0 01.943.943L7.041 25.898a.667.667 0 01-.943 0z"
        fill="#999999"
      />
    </svg>
  );
};

export default LineTool;
