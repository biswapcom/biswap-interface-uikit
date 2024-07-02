export enum Variants {
  LIGHT = "light",
  DARK = "dark",
}

export interface PaginationProps {
  isLight?: boolean;
  pageCount: number;
  handlePageClick?: (selectedItem: { selected: number }) => void;
  marginPagesDisplayed?: number;
  pageRangeDisplayed?: number;
  forcePage?: number;
  variant: Variants;
}
