import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreenContainer from '../HomeScreenContainer';
import DoneList from '../DoneList';

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
})

export default createAppContainer(AppTabNavigator)