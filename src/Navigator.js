import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';

import Feed from './screens/Feed'

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
          <Tab.Screen name="AddPhoto" component={Feed} 
          options={{
            tabBarShowLabel: false,  
            tabBarIcon: ({ color }) => (
                <Icon name='camera' size={30} color={color}/>
            ),
          }}/>
          <Tab.Screen name="Profile" component={Feed} 
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

// const MenuNavigator = createBottomTabNavigator('Feed')

// export default MenuNavigator