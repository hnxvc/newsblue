/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Image} from 'react-native';

import Home from './components/screen/Home';
import Category from './components/screen/Category';
import Search from './components/screen/Search';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBG from './components/layout/TabBG';

import HomeIcon from './assets/images/home.png';
import HomeIconFocus from './assets/images/home-focus.png';
import CateIcon from './assets/images/cate.png';
import CateIconFocus from './assets/images/cate-focus.png';
import SearchIcon from './assets/images/search.png';
import SearchIconFocus from './assets/images/search-focus.png';

const Tab = createBottomTabNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#fff',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            position: 'absolute',
            paddingTop: 10,
            height: 85,
          },
          tabBarBackground: () => <TabBG />,
          tabBarIcon: ({focused}: {focused: any}) => {
            let srcImage;

            if (route.name === 'Home') {
              srcImage = focused ? HomeIconFocus : HomeIcon;
            } else if (route.name === 'Category') {
              srcImage = focused ? CateIconFocus : CateIcon;
            } else {
              srcImage = focused ? SearchIconFocus : SearchIcon;
            }

            return <Image source={srcImage} />;
          },
          tabBarActiveTintColor: '#0167FF',
          tabBarInactiveTintColor: '#7A7A7A',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
