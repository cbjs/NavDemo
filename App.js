/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { TabNavigator } from 'react-navigation';

const ScreenTitle = ({title}) => {
    return <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 80, fontWeight: 'bold'}}>{title}</Text>
    </View>;
}
class Boards extends Component {
  render() {
    const { navigation } = this.props;
    console.warn('render boards');
    return <ScreenTitle title="boards"/>;
  }
}

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    console.warn('render profile');
    return <ScreenTitle title="profile"/>;
  }
}

class Message extends Component {
  render() {
    const { navigation } = this.props;
    console.warn('render message');
    return <ScreenTitle title="message"/>;
  }
}

class Explore extends Component {
  render() {
    const { navigation } = this.props;
    console.warn('render explore');
    return <ScreenTitle title="explore"/>;
  }
}

const Home = TabNavigator({
  boards: {
    screen: Boards,
    navigationOptions: ({navigation}) => ({
      title: 'Boards',
    })
  },
  explore: {
    screen: Explore,
    navigationOptions: ({navigation}) => ({
      title: 'Explore',
    })
  },
  // discover: {
  //   screen: Discover,
  // },
  message: {
    screen: Message,
    navigationOptions: ({navigation}) => ({
      title: 'Message',
    })
  },
  profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
    })
  },
}, {
  initialRouteName: 'explore',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    showLabel: true,
    labelStyle: {
    },
    tabStyle: {
      padding: 13,
    },
    indicatorStyle: { height: 0 }
  }
});

export default Home;
