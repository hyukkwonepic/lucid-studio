import { Tools } from '../enums';
import { atom, useRecoilState } from '../services/recoil-unstable';

type ToolState = {
  type: Tools;
};

export type Tool = ToolState & {
  setType: (type: Tools) => void;
};

export const toolState = atom<ToolState>({
  key: 'tool',
  default: {
    type: Tools.move,
  },
});

export const useTool = (): Tool => {
  const [tool, setTool] = useRecoilState(toolState);

  const setType = (type: Tools) => {
    setTool((tool) => ({
      ...tool,
      type,
    }));
  };

  return {
    ...tool,
    setType,
  };
};
