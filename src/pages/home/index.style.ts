import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HomePageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 100px;

    > h1 {
        font-size: 5em;
    }
`;

export const TodoListContent = styled.div`
    background-color: ${props => props.theme.currentPallet.background.primary};
    width: 50%;
`;

export const TodoListController = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

    border: 1px solid lightgrey;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
`;

export const TodoListToggler = styled.div`
    cursor: pointer;
`

export const TodoListItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid lightgrey;
    border-bottom: none;
    border-top: none;
    padding: 0 10px;
`;

export const TodoListManager = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px solid lightgrey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
`;

export const TodoListFilterButton = styled(Link) <{ selected?: boolean }>`
    text-decoration: none;
    line-height: 2.25em;
    padding: 0 10px;

    ${props => props.selected && css`
        border: 1px solid ${props.theme.colors.grayShades.gray500};
        border-radius: 5px;

        &:hover {
            text-decoration: none;
        }
    `}
`;

export const TodoListFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextButton = styled.div`
    cursor: pointer;
`;