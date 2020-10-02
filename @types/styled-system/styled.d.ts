import 'styled-system';
import { SpaceProps } from 'styled-system';

import theme from '../../src/styles/theme';

type System = typeof theme;

declare module 'styled-system' {
  export interface Space extends SpaceProps<System> {
  }
}