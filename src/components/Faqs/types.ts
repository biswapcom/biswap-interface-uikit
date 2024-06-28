export interface QuestionProp {
  name: string;
  description: string | JSX.Element;
}

export enum Variants {
  LIGHT = "light",
  DARK = "dark",
  DARK_BACKGROUND = "darkBackground",
}
