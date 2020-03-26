/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Routing from './app/navigation/routing'

AppRegistry.registerComponent(appName, () => Routing);
