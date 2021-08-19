import styled from "styled-components";

export const TodoItemEditStyled = styled.div`
    width: 100%;
`;

export const TodoItemEditInput = styled.input`
    width: 100%;
    background: none;
    border: none;
    font-size: 1.75em;
    line-height: 2em;
    color: ${props => props.theme.currentPallet.text.primary};

    &:focus, &:active {
        border: none;
    }
`;