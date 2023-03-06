/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Image} from 'react-native';
import {useTheme} from './context/hooks';

import Home from './components/screen/Home';
import Category from './components/screen/Category';
import Search from './components/screen/Search';

import {ThemeProvider} from 'styled-components';

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

function App(): JSX.Element {
  const theme = useTheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
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
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Category"
            component={Category}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
