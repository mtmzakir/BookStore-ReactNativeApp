import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import SignInScreen from './components/SignIn'
import SignUpScreen from './components/SignUp'
import SearchScreen from './components/Search'
import CategoriesScreen from "./components/Categories";
import BooksScreen from './components/Books'

const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="SignIn" component={SignInScreen} options={{ headerShown:false, drawerItemStyle: { display: 'none' }, }}/>
            <Drawer.Screen name="SignUp" component={SignUpScreen} options={{ headerShown:false,drawerItemStyle: { display: 'none' }, }}/>
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Search" component={SearchScreen} />
            <Drawer.Screen name="Books" component={BooksScreen} options={{title:"Book Details"}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default MyStack