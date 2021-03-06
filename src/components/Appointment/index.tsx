import React from 'react';
import {RectButtonProps , RectButton} from 'react-native-gesture-handler'
import {View, Text} from 'react-native';

import PlayerSvg from '../../assets/player.svg'
import CalenderSvg from '../../assets/calendar.svg'

import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../ultils/categories';
import { theme } from '../../global/styles/theme';
import { Guild, GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';


export type AppointmentProps={
  id: string,
  guild:  GuildProps,
  category: string,
  data: string,
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
          <GuildIcon
            guildId={data.guild.id}
            iconId={data.guild.icon}
          />

        </LinearGradient>
        
          <View style={styles.content}> 
            <View style={styles.header}>
              <Text style={styles.title}>
                {data.guild.name}
              </Text>

              <Text style={styles.category}>
              </Text>
            </View>


            <View style={styles.footer}>
              <View style={styles.dateInfo}>
                <CalenderSvg/>

                <Text style={styles.date}>
                  {data.data}
                </Text>
              </View>  

              <View style={styles.playersInfo}>
                <PlayerSvg fill={ owner ? primaryColor: on}/>

                <Text style={[
                  styles.player, {color: owner ? primaryColor: on}
                ]}>
                  {owner ? "Anfitri??o" : "Visitante"}
                </Text>
              </View>

            </View>

         
          </View>
    </View>
    </RectButton>
  );
}