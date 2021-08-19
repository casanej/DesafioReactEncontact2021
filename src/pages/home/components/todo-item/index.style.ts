import styled, { css } from "styled-components";

export const TodoItemRemove = styled.div`
    display: none;
    cursor: pointer;
    color: ${props => props.theme.colors.scheme.danger};
`;


export const TodoItemText = styled.div<{ completed: boolean; }>`
    font-size: 1.75em;
    line-height: 2em;
    width: 100%;
    ${props => props.completed && css`
        text-decoration: line-through;
        color: ${props => props.theme.colors.grayShades.gray700};
    `};
`;

export const TodoItemContentStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    gap: 10px;

    &:hover {
        ${TodoItemRemove} {
            display: inline-block;
        }
    }
`;
