/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useState } from 'react'
import { InputCheckboxContent, InputCheckboxLabel, InputCheckboxStyled } from './index.style';

interface Props {
    name?: string;
    onClick?: (name: string, value: boolean) => void;
}

export const InputCheckbox = (props: Props): ReactElement => {
    const [checked, setChecked] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        if(props.name) setName(props.name);
    }, []);

    useEffect(() => {
        if (props.onClick) {
            props.onClick(name, checked);
        }
    }, [checked]);
    
    return (
        <InputCheckboxStyled>
            <InputCheckboxContent type="checkbox" id='name' checked={checked} />
            <InputCheckboxLabel htmlFor="name" onClick={() => setChecked(!checked)}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </InputCheckboxLabel>
        </InputCheckboxStyled>
    );
};
