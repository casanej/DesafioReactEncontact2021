import React, { ReactElement, useEffect, useState } from 'react'
import { InputAdd, InputTodoStyled } from './index.style';

interface Props { 
    onAddTodo: (text: string) => void;
}

export const InputTodo = (props: Props): ReactElement => {
    const [value, setValue] = useState<string>('');

    const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const { code } = e;

        if (code === 'Enter' || code === 'NumpadEnter') {
            props.onAddTodo(value);
            setValue('');
        }
    }
    
    return (
        <InputTodoStyled>
            <InputAdd
                value={value}
                placeholder="O que precisa ser feito ?"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnter}
            />
        </InputTodoStyled>
    );
};
