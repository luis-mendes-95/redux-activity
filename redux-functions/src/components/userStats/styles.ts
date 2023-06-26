import styled from "styled-components";

const DivUserStatsBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0 20px 0;

  img {
    width: 50%;
    border-radius: 50%;
    box-shadow: 1pt 1pt 20pt black;
  }

  ul {
    padding: 15px;
    background-image: url("https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    list-style: none;
    width: 80%;
    margin: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    box-shadow: 1pt 1pt 20pt black;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
      box-shadow: 1pt 1pt 4pt black;
      padding: 5px;
      border-radius: 8px;
      background-color: orange;
      opacity: 85%;

      h2 {
        text-align: left;
        font-family: vina sans;
        color: brown;
      }

      p {
        font-family: vina sans;
        color: green;
        text-shadow: 0.5pt 0.5pt 0.5pt gray;
        font-size: 20pt;
      }
    }

    .liButtonItems {
      justify-content: center;

      button {
        border: none;
        padding: 5px;
        border-radius: 50%;
        width: 75%;
        background-color: brown;
        color: white;
        font-family: vina sans;
        font-size: 20pt;
        cursor: pointer;
      }
    }
  }
`;

export { DivUserStatsBase };
