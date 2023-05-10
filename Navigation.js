import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';

import Contacto from './Views/Contacto';
import Pelicula from './Views/Peliculas';
import Home from './Views/Home';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Pelicula" component={Pelicula}
      options={{
        tabBarLabel: 'Pelicula',
        tabBarIcon:({color,size})=> (
          <MaterialIcons name="local-movies" color={color} size={size}/>
        )
      }}/>
      <Tab.Screen name="Contacto" component={Contacto}
      options={{
        tabBarLabel: 'Contacto',
        tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="brightness-5" color={color} size={size}/>
        )
      }}/>
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName='HomeScreen'
    >
      <HomeStackNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name='Stack'
        component={StackScreen}
      />
    </HomeStackNavigator.Navigator>
  )
}

const Navigation = () => {
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default Navigation;