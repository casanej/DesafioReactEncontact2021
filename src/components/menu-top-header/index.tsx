import React, { ReactElement, useEffect } from 'react'
import { PalletsType } from '../../assets';
import { LanguageStore } from '../../stores';
import { FlagMenu } from '../flag-menu';
import { ThemeSwitch } from './components';
import { MenuTopHeaderStyled } from './index.style';

interface Props {
    onChangeTheme: (type: PalletsType) => void;
}
const languageStore = new LanguageStore();
export const MenuTopHeader = (props: Props): ReactElement => {
    
    return (
        <MenuTopHeaderStyled>
            <div>
                <FlagMenu
                    language={languageStore.languageType}
                    onChange={languageStore.setLanguage}
                />
            </div>
            <div>
                <ThemeSwitch
                    onChangeTheme={props.onChangeTheme}
                />
            </div>
        </MenuTopHeaderStyled>
    );
};
