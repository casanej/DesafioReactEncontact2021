import styled from "styled-components";

export const FlagMenuStyled = styled.div`
    position: relative;
`

export const FlagMenuDropdown = styled.div`
    position: absolute;
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 94px;
`

export const FlagMenuSelected = styled.div`
    &:hover {
        ${FlagMenuDropdown} {
            display: flex;
        }
    }
`