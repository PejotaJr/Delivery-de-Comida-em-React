import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, Menu, PageBody } from './AppStyled';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import PrivateRoute from './components/PrivateRoute';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';

export default () => {
    const name = useSelector(state => state.user.name);
    ReactTooltip.rebuild();

    const [ cartStatus, setCartStatus ] = useState(false);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
                </Menu>

                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>Tela de Pedidos</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>Tela de Perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                
                <Cart 
                    status={cartStatus}
                    setStatus={setCartStatus} 
                />
            <ReactTooltip id="tip-top" place="top" effect="solid" />
            <ReactTooltip id="tip-right" place="right" effect="solid" />
            </Container>
        </BrowserRouter>
    );
}