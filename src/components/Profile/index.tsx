import React, { useReducer, useState } from 'react';
import {RectButton}  from 'react-native-gesture-handler'
import {View , Text , Alert} from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';

import { styles } from './styles';
import { Logout } from '../Logout';
import { ModalView } from '../ModalView';
import { ButtonLogout } from '../ButtonLogout';

export function Profile(){

  const [openLogout , setOpenLogout] = useState(false)

  const {user , singOut} = useAuth()

  function handleSingOut(){
    Alert.alert('Logout' , 'Deseja sair do gameplay' , 
    [
      {
        text: 'Não',
        style: "cancel"
      },
      {
        text: 'Sim',
        onPress: ()=> singOut()
      }

    ])
  }

  function OpenLogout(){
    setOpenLogout(true)
  }

  function CloseLogout(){
    setOpenLogout(false)
    
  }
  function Console(){
    console.log('chegou aqui')
  }



  return (
    <View style={styles.container}>


        <RectButton
          onPress={handleSingOut}
        >
          <Avatar
          urlImage={user.avatar}
          />
       
        
           

              
        </RectButton>
      

      <View>
        <View style={styles.user}>
          <Text  style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>
            {user.fistName}
          </Text>

        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>

      </View>

      


    </View>
  );
}