import 'styled-components'

import { ThemeInterface } from '../styles/themes/ThemeInterface'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
