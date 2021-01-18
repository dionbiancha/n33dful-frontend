import styled from 'styled-components';

export const PageArea = styled.div`
 display: flex;
 margin-top: 20px;

  .leftSide {
    width: 250px;
    margin-right: 10px;

    .filterName {
      font-size: 15px;
      margin: 10p 0px;
    }

    input, select {
      width: 100%;
      height: 40px;
      border: 2px solid #9BB83C;
      border-radius: 5px;
      padding: 10px;
      font-size: 15px;
      color: #000;
      outline: 0;
    }

    ul, li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .categoryItem {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      border-radius: 5px;

      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }

      span {
        font-size: 14px;
      }
    }

    .categoryItem:hover,
    .categoryItem.active {
      background-color: #9BB83C;
      color: #FFF;
    }

  }

  .rightSide {
    flex: 1;

    h2 {
      margin-top: 0;
      font-size: 18px;
    }

    .list {
      display: flex;
      flex-wrap: wrap;

      .aditem {
        width: 33%;
      }
    }
  }
`;