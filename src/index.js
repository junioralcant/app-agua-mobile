import React, {Component} from 'react';

import OneSignal from 'react-native-onesignal';

import AsyncStorage from '@react-native-community/async-storage';

import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init('b518b1f3-d572-47b2-8dd3-457dc1eec757');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = device => {
    AsyncStorage.setItem('userOneSignalId', device.userId);
  };

  loadStatus = () => {};

  render() {
    return <Routes />;
  }
}

export default App;
