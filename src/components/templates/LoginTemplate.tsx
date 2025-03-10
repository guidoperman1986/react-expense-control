
import styled from "styled-components";
import { BtnSave, v } from "../../index";

export const LoginTemplate = () => {
  return (
    <Container>
      <span>Version 1.0</span>
      <div>
        <img src="" alt="" />
      </div>
      <Title>Expenses Control</Title>
      <p>Take full control on your earning and expenses</p>

      <ContainerBtn>

        <BtnSave title="Init with Google" icon={v.iconogoogle} ></BtnSave>
      </ContainerBtn>
    </Container>



  )
}
/* src/assets/fondo1.svg */
const Container = styled.div`
  background-image: url('https://picsum.photos/200/300') no-repeat;
  background-size: cover;
  height: 100vh;
  
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  
`;
