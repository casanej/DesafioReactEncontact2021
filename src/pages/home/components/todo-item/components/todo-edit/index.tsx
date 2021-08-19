import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react';
import { TodoItemEditInput, TodoItemEditStyled } from './index.style';

interface Props {
    value: string;
    onFinishEdit: (newText: string) => void;
}

export const TodoItemEdit = (props: Props): ReactElement => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(props.value);
    }, []);

    const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const { code } = e;

        if (code === 'Enter' || code === 'NumpadEnter') {
            props.onFinishEdit(value);
            setValue('');
        }
    }

    return (
        <TodoItemEditStyled>
            <TodoItemEditInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnter}
            />
        </TodoItemEditStyled>
    );
};
