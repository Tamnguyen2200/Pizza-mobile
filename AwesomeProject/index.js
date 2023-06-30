/**
 * @format
 */
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Topping from './src/Topping';
import {name as appName} from './app.json';
import Begin from'./src/Begin';
import Login from'./src/Login';
import Signin from'./src/Signin';
import Home from './src/Home';
import Search from './src/Search.tsx';
import ListPizza from './src/ListPizza'

AppRegistry.registerComponent(appName, () => Begin);
