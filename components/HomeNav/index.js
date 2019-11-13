import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreenContainer from '../HomeScreenContainer';
import DoneList from '../DoneList';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont()
class HomeNav extends Component {

  render () {
      return (
        <AppTabNavigator/>
      )
  }
}

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreenContainer
  },
  Completed: {
    screen: DoneList
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state 
      let IconComponent = Ionicons
      let iconName
      if (routeName === 'Home') {
        iconName = `md-home`
        // IconComponent = HomeIconWithBadge
      } else if (routeName === 'Completed') {
        iconName = 'md-checkmark'
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
      
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})




export default createAppContainer(AppTabNavigator)