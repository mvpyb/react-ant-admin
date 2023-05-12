import { css } from '@emotion/css'

const styles = {
  dashboardEditorContainer : css`
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;
    `,
  githubCorner : css`
    position: absolute;
    top: 0;
    right: 0;
    background-image: url('~@/assets/imgs/githubCorner.png');
    background-size: 100% 100%;
    width: 120px;
    height: 120px;
    z-index: 9;
    cursor: pointer;
  `,
  chatsContainer : css``,
  chartWrapper : css`
    border-radius: 5px;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    box-shadow: 0 -3px 31px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0,0,0,0.02);
    &:hover {
      transition: all 0.3s;
      transform: translateY(-6px);
    }
  `,
  tableList : css`
    height: 447px;
    .el-col {
      padding-right: 8px;
      margin-bottom: 30px;
    }
  `,
  userInfo : css`
    height: 560px;
    margin: 20px 0;
  `
}

export default styles
