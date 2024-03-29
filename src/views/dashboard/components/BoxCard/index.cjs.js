import { css } from '@emotion/css'

const styles = {
  boxCardComponent: css`
    .ant-card-head, .ant-card-head-title {
      padding: 0;
    }
    .ant-card-body {
      padding: 10px 20px;
    }
    .box-card-header {
      position: relative;
      height: 220px;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1.1, 1.1);
          filter: contrast(130%);
        }
      }
    }
    .mallki-text {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 20px;
      font-weight: bold;
    }
    .panThumb {
      z-index: 100;
      height: 70px !important;
      width: 70px !important;
      position: absolute !important;
      top: -45px;
      left: 0;
      border: 5px solid #ffffff;
      background-color: #fff;
      margin: auto;
      box-shadow: none !important;
      .pan-info {
        box-shadow: none !important;
      }
    }
    .progress-item {
      margin-bottom: 10px;
      font-size: 14px;
    }
    @media only screen and (max-width: 1510px) {
      .mallki-text {
        display: none;
      }
    }
  `
}

export default styles
