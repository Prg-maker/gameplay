import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import {  AppointmentCreate} from "../screens/AppointmentCreate";



import { Background } from "../components/Background";
import { theme } from "../global/styles/theme";

const { Navigator, Screen} = createStackNavigator() 

export function AppRoutes(){
  return(
    <Navigator
      screenOptions={
        {
          cardStyle:{
            backgroundColor: theme.colors.secondary80
          }
        }
      }
      headerMode="none"

    >

      

      <Screen
        name="Home" 
        component={Home}
      />

      <Screen
        name="AppointmentDetails" 
        component={AppointmentDetails}
      />

      <Screen
        name="AppointmentCreate" 
        component={AppointmentCreate}
      />

   
      
    </Navigator>
  )
} 

