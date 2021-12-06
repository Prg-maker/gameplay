import React, { ReactNode } from 'react';
import {Button} from '../Button'
import {Background} from '../Background'


import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  ModalProps
} from 'react-native';

import { styles } from './styles';
import { ButtonLogout } from '../ButtonLogout';
import { RectButtonProps } from 'react-native-gesture-handler';


type Props= ModalProps &{
  closeLogout: ()=> void,
  children: RectButtonProps
}

export function Logout({closeLogout , children , ...rest}: Props){

  function Console(){
    console.log('chegou aqui')
  }

  return (

    <Modal
    transparent
    animationType='slide'
    statusBarTranslucent
    {...rest}

    >


            <ButtonLogout
            text="Não"
            onPress={() => {console.log('dsad')}}
            />  
        

        <TouchableWithoutFeedback onPress={closeLogout}>
        <View style={styles.container}>
         <View style={styles.content}>
            <Text style={styles.text}>Deseja sair do <Text style={styles.Gameplay}>Game<Text style={styles.play}>Play?</Text></Text></Text>

            
            <View style={styles.buttons}>
    
         
            </View>
         </View>
          </View>
        </TouchableWithoutFeedback>

      
    </Modal>

  );
}