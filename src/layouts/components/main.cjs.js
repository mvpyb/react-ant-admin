import { css } from '@emotion/css'

const styles = {
  mainSection: css`
    position: relative;
    width: 100%;
    &.noTags {
      &.fixedHeader{
        margin-top: 64px;
      }
    }
    &.hasTags {
      &.fixedHeader{
        margin-top: 100px;
      }
    }
  `,
  mainWrapper: css`
    position: relative;
  `,
  mainContent: css`
    width: 100% ;
  `
}

export default styles
