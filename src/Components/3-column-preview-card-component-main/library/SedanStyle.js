import styled from "styled-components";

const SedanStyle = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(31, 77%, 52%);
    height: 400px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 90%;
  }
  display: flex;
  padding: 0%;
  margin: 0%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 0px;
  background-color: hsl(31, 77%, 52%);
`;

export default SedanStyle;
