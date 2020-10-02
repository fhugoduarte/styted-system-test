import 'styled-components';

import theme from '../../src/styles/theme';

type System = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends System {
  
  }
}
