/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import HelloWorld from './components/HelloWorld';
import {name as appName} from './app.json';
import robot from './components/robot';
import MultipleGreeting from './components/MultipleGreeting';
import TextBlink  from './components/TextBlink';
import Styless  from './components/Styless';
import Flexss  from './components/Flexss';
import FlexDimension  from './components/FlexDimension';
import FlexExample  from './components/FlexExample';
import InputTextt  from './components/InputTextt';
import Buttonn  from './components/Buttonn';
import Demo  from './components/Demo';


//AppRegistry.registerComponent(appName, () => robot);
//AppRegistry.registerComponent(appName, () => MultipleGreeting);
//AppRegistry.registerComponent(appName, () => TextBlink);
//AppRegistry.registerComponent(appName, () => Flexss);
//AppRegistry.registerComponent(appName, () => FlexDimension);
//AppRegistry.registerComponent(appName, () => FlexExample);
//AppRegistry.registerComponent(appName, () => InputTextt);
AppRegistry.registerComponent(appName, () => Demo);