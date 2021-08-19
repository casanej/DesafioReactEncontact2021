import styled from "styled-components";

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
    border-bottom: none;
    padding: 10px;
`;

export const TodoListItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid lightgrey;
    border-bottom: none;
    padding: 10px;
`;

export const TodoListManager = styled.div`
    border: 1px solid lightgrey;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
`;