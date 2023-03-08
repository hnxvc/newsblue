/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Image} from 'react-native';
import {useTheme} from './src/context/hooks';

import Home from './src/components/screen/Home';
import Category from './src/components/screen/Category';
import Posts from './src/components/screen/Posts';
import PostDetail from './src/components/screen/PostDetail';
import Bookmark from './src/components/screen/Bookmark';

import {ThemeProvider} from 'styled-components';
import AppProvider from './src/context/index';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBG from './src/components/layout/TabBG';

import HomeIcon from './src/assets/images/home.png';
import HomeIconFocus from './src/assets/images/home-focus.png';
import CateIcon from './src/assets/images/cate.png';
import CateIconFocus from './src/assets/images/cate-focus.png';
import BookmarkIcon from './src/assets/images/bookmark.png';
import BookmarkIconFocus from './src/assets/images/bookmark-focus.png';

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

const BookmarkNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmark"
        component={Bookmark}
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

  const CustomTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={CustomTheme}>
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

                if (route.name === 'HomeNav') {
                  srcImage = focused ? HomeIconFocus : HomeIcon;
                } else if (route.name === 'CateNav') {
                  srcImage = focused ? CateIconFocus : CateIcon;
                } else {
                  srcImage = focused ? BookmarkIconFocus : BookmarkIcon;
                }

                return <Image source={srcImage} />;
              },
              tabBarActiveTintColor: '#0167FF',
              tabBarInactiveTintColor: '#7A7A7A',
            })}>
            <Tab.Screen
              name="HomeNav"
              component={HomeNav}
              options={{headerShown: false, title: 'Home'}}
            />
            <Tab.Screen
              name="CateNav"
              component={CateNav}
              options={{headerShown: false, title: 'Categories'}}
            />
            <Tab.Screen
              name="BookmarkNav"
              component={BookmarkNav}
              options={{headerShown: false, title: 'Bookmark'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
