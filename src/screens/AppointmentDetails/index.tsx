import React from 'react';

import {
  ImageBackground,
  Text,
  View,
  FlatList
} from 'react-native';

import {Fontisto} from '@expo/vector-icons' 
import { BorderlessButton } from 'react-native-gesture-handler';


import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from '../../components/Member';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import BannerImg from '../../assets/banner.png'
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export function AppointmentDetails(){
  const {primaryColor} = theme.colors

  const members =[
    {
      id: '1',
      username: "Daniel",
      avatar_url:"https://github.com/Prg-Maker.png",
      status: 'online'
    },
    {
      id: '2',
      username: "Gabriel",
      avatar_url:"https://github.com/Prg-Maker.png",
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
              <Fontisto
                name="share"
                size={24}
                color={primaryColor}
              />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >

        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao chanllenger sem{'\n'}
            perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>


      <ListHeader
        title="jogadores"
        subtitle="Total 3"
      />

      <FlatList
        data={members}
        keyExtractor ={item => item.id}
        renderItem={({item})=> (
          <Member data={item}/> 
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        style={styles.members}
      />


      <View
        style={styles.footer}
      >
        <ButtonIcon
          title="Entrar na partida"
        />
      </View>
   

    </Background>
  );
}