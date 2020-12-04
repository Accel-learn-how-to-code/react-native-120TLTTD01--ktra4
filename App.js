import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

//Component
import NewsScreen323 from './components/NewsScreen/NewsScreen';
import ProductsScreen323 from './components/ProductsScreen';
import CartScreen323 from './components/CartScreen';
import ProfileScreen323 from './components/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs323() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'NewsScreen323') {
            iconName = 'newspaper-outline';
          }

          if (route.name === 'ProductsScreen323') {
            iconName = 'bicycle-outline';
          }

          if (route.name === 'CartScreen323') {
            iconName = 'cart-outline';
          }

          if (route.name === 'ProfileScreen323') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#eb7e23',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="NewsScreen323"
        component={NewsScreen323}
        options={{
          title: 'Tin tức',
        }}
      />
      <Tab.Screen
        name="ProductsScreen323"
        component={ProductsScreen323}
        options={{
          title: 'Đặt hàng',
        }}
      />
      <Tab.Screen
        name="CartScreen323"
        component={CartScreen323}
        options={{
          title: 'Giỏ hàng',
        }}
      />
      <Tab.Screen
        name="ProfileScreen323"
        component={ProfileScreen323}
        options={{
          title: 'Tài khoản',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs323 />
    </NavigationContainer>
  );
}
