import React, { ReactElement, useEffect, useState } from 'react'
import { LanguageParams } from '../../../../models';
import { LanguageStore } from '../../../../stores';
import { InputAdd, InputTodoStyled } from './index.style';

interface Props { 
    onAddTodo: (text: string) => void;
}

const languageStore = new LanguageStore();
export const InputTodo = (props: Props): ReactElement => {
    const language: LanguageParams['home'] = languageStore.getLanguage().home
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
                placeholder={language.inputPlaceholder}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnter}
            />
        </InputTodoStyled>
    );
};
