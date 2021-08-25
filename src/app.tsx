import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { AppContent, AppStyled } from './app.style';
import { GlobalStyle, PalletModel, PalletsType, theme } from './assets';
import { MenuTopHeader } from './components/menu-top-header';
import { HomePage } from './pages';

export const App = (): ReactElement => {
    const [currentPallet, setCurrentPallet] = useState<PalletModel>(theme.pallet.dark);

    const changeTheme = (themeType: PalletsType) => {
        switch(themeType) {
        case 'dark': theme.currentPallet = theme.pallet.dark; break;
        case 'light': theme.currentPallet = theme.pallet.light; break;
        }

        window.localStorage.setItem('casanje-studios/website-theme', themeType);
        setCurrentPallet(theme.currentPallet);        
    };

    useEffect(() => {
        changeTheme('dark');
    }, []);

    return (
        <ThemeProvider theme={{...theme, ...{ currentPallet }}} >
            <GlobalStyle theme={theme} />
            <AppStyled>
                <BrowserRouter>
                    <MenuTopHeader
                        onChangeTheme={changeTheme}
                    />
                    <AppContent>
                        <Switch>
                            <Route exact path="/:filter?" component={HomePage} />
                        </Switch>
                    </AppContent>
                </BrowserRouter>
            </AppStyled>
        </ThemeProvider>
    );
};
