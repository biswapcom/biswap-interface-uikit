export enum Tags {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum Scales {
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "xxl",
}

export interface HeadingProps {
  as?: Tags;
  scale?: Scales;
}
