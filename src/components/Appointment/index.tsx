import React from 'react';
import {RectButtonProps , RectButton} from 'react-native-gesture-handler'
import {View, Text} from 'react-native';

import PlayerSvg from '../../assets/player.svg'
import CalenderSvg from '../../assets/calendar.svg'

import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../ultils/categories';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';


export type AppointmentProps={
  id: string,
  guild:  GuildProps,
  category: string,
  date: string,
  description: string
}

type Props= RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({data, ...rest} : Props){
  const [category] = categories.filter(item => item.id === data.category)  
  const {owner} = data.guild
  const {primaryColor , on , secondary70, secondary50} = theme.colors

  return (
    <RectButton {...rest} >
      <View style={styles.container} >
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[ secondary70, secondary50]}
        >
          <GuildIcon/>

        </LinearGradient>
        
          <View style={styles.content}> 
            <View style={styles.header}>
              <Text style={styles.title}>
                {data.guild.name}
              </Text>

              <Text style={styles.category}>
                {category.title}
              </Text>
            </View>


            <View style={styles.footer}>
              <View style={styles.dateInfo}>
                <CalenderSvg/>

                <Text style={styles.date}>
                    {data.date}
                </Text>
              </View>  

              <View style={styles.playersInfo}>
                <PlayerSvg fill={ owner ? primaryColor: on}/>

                <Text style={[
                  styles.player, {color: owner ? primaryColor: on}
                ]}>
                  {owner ? "Anfitrião" : "Visitante"}
                </Text>
              </View>

            </View>

         
          </View>
    </View>
    </RectButton>
  );
}