import "styled-components";
import { BiswapTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends BiswapTheme {}
}
