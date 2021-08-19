import React, { ReactElement, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, PalletModel, PalletsType, theme } from './assets';

export const App = (): ReactElement => {
    const [currentPallet, setCurrentPallet] = useState<PalletModel>(theme.pallet.dark);

    const changeTheme = (themeType: PalletsType) => {
        switch(themeType) {
        case 'dark': theme.currentPallet = theme.pallet.dark; break;
        case 'light': theme.currentPallet = theme.pallet.light; break;
        }

        setCurrentPallet(theme.currentPallet);        
    };

    useEffect(() => {
        changeTheme('light');
    }, []);

    return (
        <ThemeProvider theme={{...theme, ...{ currentPallet }}} >
            <GlobalStyle theme={theme} />
            <div><h1>PROJETO QUICK STARTER</h1></div>
        </ThemeProvider>
    );
};
