import styled from "styled-components"
import { Icon } from "../../index";
import { IconType } from "react-icons";

interface BtnSaveProps {
    fn: () => void;
    title: string;
    bgColor: string;
    icon: IconType;
}

export const BtnSave: React.FC<BtnSaveProps> = ({ fn, title, bgColor, icon }) => {
    return (
        <Container type="submit" bgColor={bgColor}>
            <Icon as={icon} />
            <span className="btn" onClick={fn}> {title} </span>



        </Container>
    )
}

interface ContainerProps {
    bgColor: string;
}

const Container = styled.button<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border: none;   
    gap: 10px;
    background-color: initial;  

    .btn {
        background-color: ${(props) => props.bgColor};
        padding: 0.6em 1.3em;
        font-weight: 900;
        font-size: 18px;
        border: 3px solid black;
        border-radius: 0.4em;
        box-shadow: .1em .1em #000;
        transition: all 0.2s;
        white-space: 1px;
        color: #000;
        cursor: pointer;

        &:hover {
          transform: translate(-0.05em, -0.05em);
          box-shadow: 0.15em 0.15em #000;
        
        }
        &:active {
            transform: translate(0.05em, 0.05em);
            box-shadow: .05em .05em #000;
        }
    }
`;
