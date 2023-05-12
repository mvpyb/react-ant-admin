import { css } from '@emotion/css'

const styles = {
  logoContainer : css`
    text-align: center;
    `,
  img : css`
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 10px;
  `,
  name : css`
    vertical-align: middle;
    font-weight: 400;
    font-size: 26px;
    color: rgba(156, 52, 41, 1);
    font-style: normal;
    letter-spacing: 0px;
    line-height: 42px;
    text-decoration: none;
    &.name2 {
      color: rgba(22, 23, 22, 1);
    }
  `
}

export default styles
