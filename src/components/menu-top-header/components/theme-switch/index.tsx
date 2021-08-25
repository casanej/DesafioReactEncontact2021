import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useEffect, useState } from 'react'
import { PalletsType } from '../../../../assets';
import { SwitchItem, ThemeSwitchStyled } from './index.style';

interface Props {
    onChangeTheme: (type: PalletsType) => void;
}

export const ThemeSwitch = (props: Props): ReactElement => {
    const [currentThemeType, setCurrentThemeType] = useState<PalletsType>('dark');
    
    useEffect(() => {
        const cachedThemeType: PalletsType | null = window.localStorage.getItem('casanje-studios/website-theme') as PalletsType;

        if (cachedThemeType) {
            setCurrentThemeType(cachedThemeType);
        }
    }, [])

    const handleChangeTheme = (type: PalletsType) => {
        setCurrentThemeType(type);
        props.onChangeTheme(type);
    }
    
    return (
        <ThemeSwitchStyled>
            {
                currentThemeType === 'dark'
                ? <SwitchItem onClick={() => handleChangeTheme('light')}><FontAwesomeIcon icon={faMoon} size={'2x'} /></SwitchItem>
                : <SwitchItem onClick={() => handleChangeTheme('dark')}><FontAwesomeIcon icon={faSun} size={'2x'} /></SwitchItem>
            }
        </ThemeSwitchStyled>
    );
};
