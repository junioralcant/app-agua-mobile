import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CadAddress from './pages/CadAddress';
import FinalizeOrder from './pages/FinalizeOrder';

export default createAppContainer(
  createSwitchNavigator({
    FinalizeOrder,
    Home,
    SignIn,
    CadAddress,
    SignUp,
  }),
);
