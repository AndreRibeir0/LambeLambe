import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator } from '@react-navigation/compat'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

const loginOrProfileRouter = createSwitchNavigator({
    Perfil: Profile,
    Auth: MyStack
}, {
  initialRouteName: 'Profile'
})

const Tab = createBottomTabNavigator();

export default function MenuNavigator() {
    return (
      <NavigationContainer >
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Feed} 
          options={{
            tabBarShowLabel: false,  
            tabBarIcon: ({ color }) => (
                <Icon name='home' size={30} color={color}/>
            ),
          }} />
          <Tab.Screen name="AddPhoto" component={AddPhoto} 
          options={{
            tabBarShowLabel: false,  
            tabBarIcon: ({ color }) => (
                <Icon name='camera' size={30} color={color}/>
            ),
          }}/>
          <Tab.Screen name="Profile" component={loginOrProfileRouter} 
          options={{
            tabBarShowLabel: false,  
            tabBarIcon: ({ color }) => (
                <Icon name='user' size={30} color={color}/>
            ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}