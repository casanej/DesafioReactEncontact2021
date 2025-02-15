import styled from "styled-components";

export const InputCheckboxStyled = styled.div``;

export const InputCheckboxLabel = styled.label`
    cursor: pointer;
    position: relative;
    margin: auto;
    width: 18px;
    height: 18px;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);

    svg {
        position: relative;
        z-index: 1;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: #c8ccd4;
        stroke-width: 1.5;
        transform: translate3d(0, 0, 0);
        transition: all 0.2s ease;

        path {
            stroke-dasharray: 60;
            stroke-dashoffset: 0;
        }

        polyline {
            stroke-dasharray: 22;
            stroke-dashoffset: 66;
        }
    }

    &:hover {
        svg {
            stroke: #4285f4;
        }

        &:before {
            opacity: 1;
        }
    }

    &:before {
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(34,50,84,0.03);
        opacity: 0;
        transition: opacity 0.2s ease;
    }
`;

export const InputCheckboxContent = styled.input`
    display: none;

    &:checked {
        + ${InputCheckboxLabel} {
            svg {
                stroke: #4285f4;
            }
    
            path {
                stroke-dashoffset: 60;
                transition: all 0.3s linear;
            }
    
            polyline {
                stroke-dashoffset: 42;
                transition: all 0.2s linear;
                transition-delay: 0.15s;
            }
        }
    }

`;

/* #cbx:checked + .check svg {
    stroke: #4285f4;
  }
  #cbx:checked + .check svg path {
    stroke-dashoffset: 60;
    transition: all 0.3s linear;
  }
  #cbx:checked + .check svg polyline {
    stroke-dashoffset: 42;
    transition: all 0.2s linear;
    transition-delay: 0.15s;
  } */