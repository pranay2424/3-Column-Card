import styled from "styled-components";

const LuxuryStyle = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:hsl(179, 100%, 13%);
    height: 400px;
    width: 90%;
    border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  }
  display: flex;
  padding: 0%;
  margin: 0%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  background-color:hsl(179, 100%, 13%);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0px;
  border-top-right-radius: 5px;
`;

export default LuxuryStyle;
