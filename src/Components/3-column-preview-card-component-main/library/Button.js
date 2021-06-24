import styled from "styled-components";

const Button = styled.div`
  @media only screen and (max-width: 375px) {
  margin-top: 60px;
  width: 30vw;
  text-align: center;
  padding: 20px 30px;
  color: hsl(31, 77%, 52%);
  margin-bottom: 10px;
  background-color:hsl(0, 0%, 95%)
  }
  padding: 20px 30px;
  border-radius: 50px;
  outline: none;
  border: none;
  color: hsl(31, 77%, 52%);
  font-weight: 900;
  font-size: 15px;
  width: 6vw;;
  background-color:hsl(0, 0%, 95%);
  margin-top: 100px;
`;

export default Button;
