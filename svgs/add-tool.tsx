const AddTool = (props) => {
  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M0 0h32v32H0z" />
      <rect x={6} y={15.346} width={20} height={1.3} rx={0.65} fill="#999" />
      <rect x={16.65} y={6} width={20} height={1.3} rx={0.65} transform="rotate(90 16.65 6)" fill="#999" />
    </svg>
  );
};

export default AddTool;
