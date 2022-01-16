interface BasicColors {
  primary: string;
  secondary: string;
  primaryDark: string;
  secondaryDark: string;
  gray: string;
  grayDark: string;
  black: string;
  white: string;
}

export interface CustomColors extends Record<string, number | string> {}

type Colors = BasicColors & CustomColors;

interface BasicSizes {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface CustomSizes extends Record<string, number | string> {}

type Sizes = BasicSizes & CustomSizes;

export interface Typography {
  fs: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  ff: {
    rt100: string;
  };
}

export interface Theme extends Record<string, any> {
  colors: Colors;
  spaces: Sizes;
  tg: Typography;
  toggleTheme: () => void;
  isLightTheme: boolean;
}
