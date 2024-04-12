import { register } from '@videosdk.live/react-native-sdk';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
​
// Register the service
register();
AppRegistry.registerComponent(appName, () => App);
