export type ToolIcon = {
  active?: boolean;
} & React.SVGProps<SVGSVGElement>;

export type PageState = {
  id: number;
  name: string;
};

export type PageListState = {
  items: PageState[];
  selectedItemId: number;
};
