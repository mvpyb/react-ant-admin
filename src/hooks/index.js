import { css } from '@emotion/css'

export function useEmotionCss( cb ) {
  return css( cb() )
}
