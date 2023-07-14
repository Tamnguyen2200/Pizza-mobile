import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Begin from './Begin';
import Signin from './Signin';
import Login from './Login';
import Payment from './Payment';
import Search from './Search';
import Topping from './Topping';
import Size from './Size';
import Profile  from './Profile';
import Editprofile from './Editprofile';
import Thickness from './Thickness';

const Stack = createNativeStackNavigator();
function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Begin" component={Begin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Topping" component={Topping} />
          <Stack.Screen name="Size" component={Size} />
          <Stack.Screen name="Thickness" component={Thickness} />
          <Stack.Screen name="Editprofile" component={Editprofile}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default Navigation;
