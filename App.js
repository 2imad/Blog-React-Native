import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import { createStackNavigator} from 'react-navigation-stack';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons'
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator({
   Index: IndexScreen,
   Detail: ShowScreen,
   Create: CreateScreen,
   Edit: EditScreen
},{
  initialRouteName :'Index',
  defaultNavigationOptions :{
    title :'BLOGGER'
  }
});

const App =  createAppContainer(navigator);

export default () => {
    return<Provider><App/></Provider> 
}