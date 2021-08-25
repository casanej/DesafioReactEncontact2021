import React, { ReactElement, useEffect } from 'react'
import { PalletsType } from '../../assets';
import { ThemeSwitch } from './components';
import { MenuTopHeaderStyled } from './index.style';

interface Props {
    onChangeTheme: (type: PalletsType) => void;
}

export const MenuTopHeader = (props: Props): ReactElement => {
    
    return (
        <MenuTopHeaderStyled>
            <div>
                <ThemeSwitch
                    onChangeTheme={props.onChangeTheme}
                />
            </div>
        </MenuTopHeaderStyled>
    );
};
