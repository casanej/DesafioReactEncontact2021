/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react';
import Flag from 'react-flagkit';
import { LanguageAvailable, LanguageFlagsAvailable } from '../../models';
import { FlagMenuDropdown, FlagMenuSelected, FlagMenuStyled } from './index.style';

interface Props {
    language: LanguageAvailable;
    onChange?: (value: LanguageAvailable) => void
}

export const FlagMenu = (props: Props): ReactElement => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>();

    useEffect(() => {
        setSelectedLanguage(LanguageFlagsAvailable.find(item => item.code === props.language)!.flag);
    }, []);

    const handleChangeLanguage = (value: typeof LanguageFlagsAvailable[0]) => {
        setSelectedLanguage(value.flag);
        if (props.onChange) {
            props.onChange(value.code as LanguageAvailable);
        }
    }

    return (
        <FlagMenuStyled>
            <FlagMenuSelected>
                <Flag country={selectedLanguage} size={42} />
                <FlagMenuDropdown>
                    {
                        LanguageFlagsAvailable.map((flag, index) => <div><Flag key={index} country={flag.flag} size={42} onClick={() => handleChangeLanguage(flag)} /></div>)
                    }
                </FlagMenuDropdown>
            </FlagMenuSelected>
        </FlagMenuStyled>
    );
};
