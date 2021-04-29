import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  padding: 60px;
  max-width: 600px;
  min-width: 350px;
  background: rgba(39, 0, 35, 0.95);
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 15px;
    padding-top: 30px;
  }
`;

export default Container;