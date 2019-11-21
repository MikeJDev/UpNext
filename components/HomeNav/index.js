import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreenContainer from '../HomeScreenContainer';
import DoneList from '../DoneList';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont()
class HomeNav extends Component {
  
  render () {
    return (
      <BottomNavigator/>
      )
    }
  }

  const homeStack = createStackNavigator({ 
    Home: {
        screen: HomeScreenContainer  
    }
  });

const completedStack = createStackNavigator({ 
  Completed: {
      screen: DoneList  
  }
  });
  
  const BottomNavigator = createBottomTabNavigator({
    Home: {
        screen: homeStack
  },
    Completed: {
        screen: completedStack
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
      } else if (routeName === 'Completed') {
        iconName = 'md-checkmark'
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />;
      
    }
  }),
  tabBarOptions: {
    activeTintColor: '#B1F971',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#4d4d4d',
      paddingTop: 10,
    }
  },
})




export default createAppContainer(BottomNavigator)