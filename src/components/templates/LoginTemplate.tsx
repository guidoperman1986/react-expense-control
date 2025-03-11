
import styled from "styled-components";
import { BtnSave, v } from "../../index";
import fondo1 from '../../assets/fondo1.svg'; // Import the image

export const LoginTemplate = () => {
  return (
    <Container>
      <div className="contentCard">
        <span className="version">Version 1.0</span>
        <div className="contentImage">
          <img src={v.logo} alt="" />
        </div>
        <Title>Expenses Control</Title>
        <p className="frase">Take full control on your earning and expenses</p>

        <ContainerBtn>

          <BtnSave 
              title="Init with Google" 
              icon={v.iconogoogle} 
              bgColor={v.colorSecundario}
          ></BtnSave>
        </ContainerBtn>

      </div>
    </Container>



  )
}
/* src/assets/fondo1.svg */
const Container = styled.div`
  background-image: url(${fondo1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: rgba(255, 255, 255, 0.87);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 5 18px 3px rgba(0, 0, 0, 0.35);

    .version {
      color: 727272;
      text-align: start;
    }

    .contentImage {
      img {
        max-width: 60%;
      }
    }

    .frase {
      color:#909090;
      font-size: 1.2rem;
    }
  }
  
`;


const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  
`;
