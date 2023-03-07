/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Image} from 'react-native';
import {useTheme} from './src/context/hooks';

import Home from './src/components/screen/Home';
import Category from './src/components/screen/Category';
import Posts from './src/components/screen/Posts';
import PostDetail from './src/components/screen/PostDetail';
import Search from './src/components/screen/Search';

import {ThemeProvider} from 'styled-components';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBG from './src/components/layout/TabBG';

import HomeIcon from './src/assets/images/home.png';
import HomeIconFocus from './src/assets/images/home-focus.png';
import CateIcon from './src/assets/images/cate.png';
import CateIconFocus from './src/assets/images/cate-focus.png';
import SearchIcon from './src/assets/images/search.png';
import SearchIconFocus from './src/assets/images/search-focus.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CateNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function App(): JSX.Element {
  const theme = useTheme();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Tab.Screen
            name="HomeNav"
            component={HomeNav}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="CateNav"
            component={CateNav}
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
