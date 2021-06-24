import styled from "styled-components";

const Heading = styled.div`
  @media only screen and (max-width: 375px) {
    width: 30vw;
    height: auto;
    margin-top: 20px;
  }
  width: 14vw;
  height: 3vh;
  font-size: 15px;
  font-weight: 900;
  margin-top:20px;
  color: hsl(0, 0%, 95%);
  h1 {
    margin: 0px;
    display: flex;
    align-content: center;
  }
`;

export default Heading;
