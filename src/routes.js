import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CadAddress from './pages/CadAddress';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    CadAddress,
    SignUp,
    Home,
  }),
);
