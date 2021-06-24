import styled from "styled-components";

const DesktopView = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    background-color: hsl(0, 0%, 95%);
  }

  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0%;
  margin: 0%;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 95%);
`;

export default DesktopView;
