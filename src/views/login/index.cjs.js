import { css } from '@emotion/css'

const styles = {
  loginContainer: css`
      width: 100%;
      min-height: 100%;
      padding: 160px 0 144px;
      position: relative;
      background-image: url('~@/assets/imgs/bgimg.svg');
    `,
  body: css`
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
    border-radius: 4px;
    border: 1px solid #e6ebf5;
    background-color: #fff;
    padding: 20px 30px;
  `,
  fixWidth: css`
    min-width: 260px;
    width: 390px;
    margin: 0 auto;
  `,
  top: css`
    .header{
      position: relative;
      padding-top: 20px;
    }
  `,
  /* 自定义tab*/
  logos: css`
    text-align: center;
    margin: 30px 0 15px;
  `,
  desc: css`
    text-align: center;
    font-size: 14px;
    color: rgba(0,0,0,.45);
    margin-top: 12px;
    margin-bottom: 40px;
  `,
  main: css`
    .title{
      font-size : 20px;
      text-align: center;
      font-weight:bold;
      color: #000;
    }
    .footLink{
      text-align: center;
      .linkItem{
        margin: 0;
        font-size: 12px;
        color:#1890ff;
      }
    }
  `,
  footer: css`
  
  `,
  loginForm: css`
    max-width: 300px;
  `,
  loginFormForgot: css`
    float: right;
  `,
  loginFormButton: css`
    width: 100%;
  `,
  imgCode: css`
    display: inline-block;
    width: 100%;
    height: 36px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    }
  `
}

export default styles
