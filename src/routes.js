import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CadAddress from './pages/CadAddress';
import FinalizeOrder from './pages/FinalizeOrder';
import ConfirmedOrder from './pages/ConfirmedOrder';
import ListAddress from './pages/ListAddress';
import Order from './pages/Order';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    Order,
    ListAddress,
    ConfirmedOrder,
    FinalizeOrder,
    Home,
    CadAddress,
    SignUp,
  }),
);
