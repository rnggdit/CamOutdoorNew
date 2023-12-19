import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Discover, HomeApp, ProfileApp, Wishlist, Search, EditProduct, AddProduct, ProductDetail, SplashScreen, Login, Register} from '../screens';
import {Home3, LocationDiscover, ProfileCircle, Heart, AddCircle} from 'iconsax-react-native'; 
import { fontType, colors } from '../theme';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.black(),
        tabBarActiveTintColor: colors.black(),
        tabBarInactiveTintColor: colors.black(),
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
          borderColor: '#000000',
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
      }}>
      <Tab.Screen
        name="HomeApp"
        component={HomeApp}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home3
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({focused, color}) => (
            <LocationDiscover
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          tabBarLabel: 'Add Product',
          tabBarIcon: ({focused, color}) => (
            <AddCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({focused, color}) => (
            <Heart
              color={color = "black"}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileApp}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false, 
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection : 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="SearchPage"
        component={Search}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
              name="AddProduct"
              component={AddProduct}
              options={{
                headerShown: false,
                animationEnabled: true,
                animationTypeForReplace: 'pop',
                gestureEnabled: true,
                gestureDirection : 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
        <Stack.Screen
              name="EditProduct"
              component={EditProduct}
              options={{
                headerShown: false,
                animationEnabled: true,
                animationTypeForReplace: 'pop',
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
    </Stack.Navigator>
  );
};
export default Router;