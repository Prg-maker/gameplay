import React ,{useContext} from 'react'
import {View , Text , TextInput , Image , StatusBar , Alert , ActivityIndicator} from 'react-native'
import { styles } from './styles'

import illustrationImg from '../../assets/illustration.png'

import { ButtonIcon } from '../../components/ButtonIcon'


import { Background } from "../../components/Background";

import {useAuth} from '../../hooks/auth'
import { theme } from '../../global/styles/theme'


export  function SingIn(){


  const  {singIn , loading} = useAuth() 
  async function  handleSingIn(){
   try{
    await singIn()
   }catch(error){
    console.log(error)
   }

  }


  return(
    <Background>
      <View style={styles.container}>
        
        <Image 
          source={illustrationImg} 
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>


          {
            loading ? 
            <ActivityIndicator color={theme.colors.primaryColor}/> 
                  :
            <ButtonIcon
            title="Entrar com o discord"
            activeOpacity={0.7}
            onPress={handleSingIn}

            />
          }
        </View>

      </View>
    </Background>
  )
}