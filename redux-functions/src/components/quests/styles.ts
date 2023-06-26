import styled from "styled-components";

const DivQuestsBase = styled.div`
  h2 {
    text-align: center;
    margin: 20px 0;
    font-family: vina sans;
    font-size: 35pt;
    color: black;
    text-shadow: 1pt 1pt 3pt white;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
    gap: 25px;
    list-style: none;
    flex-wrap: wrap;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 10pt;

    li {
      display: flex;
      flex-direction: column;
      width: 45%;
      background-color: white;
      padding: 5px;
      border-radius: 8px;
      box-shadow: 5pt 5pt 5pt black;
      gap: 5px;

      span {
        font-weight: bold;
      }

      button {
        font-weight: bold;
        border: none;
        background-color: brown;
        color: white;
        padding: 5px;
        border-radius: 8px;
        cursor: pointer;
      }

    }
  }

  background-color: orange;
`;

export { DivQuestsBase };
