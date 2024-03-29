import { css } from '@emotion/css'

const styles = {
  card: css`
    background: #fff;
    transition: 0.5s;
    border: 0;
    border-radius: 0.1875rem;
    position: relative;
    width: 100%;
    box-shadow: 0 -3px 31px 0 rgba(0,0,0,0.05), 0 6px 20px 0 rgba(0,0,0,0.02);
    `,
  citySelected: css`
    font-size: 14px;
    padding: 20px;
    font-weight: 400;
    background: linear-gradient(45deg, #746bbe, #9d9ec5) !important;
    position: relative;
    overflow: hidden;
    color: #fff;
    border-radius: 3px 3px 0 0;
    box-sizing: content-box;
    height: 145px;
    .city {
      height: 36px;
      font-size: 24px;
      span {
        font-size: 13px;
        font-weight: bold;
        text-transform: lowercase;
      }
    }
    .night {
      height: 22px;
      line-height: 22px;
      font-size: 15px;
      text-transform: uppercase;
    }
    .temperature {
      font-size: 70px;
      height: 87px;
      line-height: 87px;
      position: relative;
      font-weight: bold;
    }
    .icon {
      height: 145px;
      position: relative;
      .panel-icon {
        position: absolute;
        left: 0;
        bottom: 10px;
        color: #fff;
        width: 70px;
        height: 70px;
      }
    }
  `,
  table: css`
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    td,
    th {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
    tbody tr td {
      padding: 14px 20px;
    }
  `,
  tableStriped: css`
    tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  weekWeather: css`
    height: 120px;
    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .days-list {
    }
    .day {
      display: inline-block;
      width: 30%;
      margin: 0 1%;
      padding: 20px 10px;
      text-align: center;
      p {
        padding: 0;
        margin: 0 0 16px 0;
        font-size: 15px;
        line-height: 24px;
        height: 24px;
      }
      .panel-icon {
        width: 40px;
        height: 40px;
        color: #343434;
      }
    }
  `
}

export default styles
