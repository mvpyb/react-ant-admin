import { css } from '@emotion/css'

const styles = {
  cardSection: css`
    margin-top: 20px;
  `,
  tabsSection: css`
    overflow: hidden;
    span {
      display: block;
      font-size: 16px;
      margin-top: 10px;
    }
  `,
  grid: css`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  `,

  iconItem: css`
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
    transition: all 0.26s;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  `,
  span: css`
    display: block;
    font-size: 16px;
    margin-top: 10px;
  `,
  disabled: css`
    pointer-events: none;
  `
}

export default styles
