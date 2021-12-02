import React from 'react';

import {
  View,
  FlatList
} from 'react-native';
import { GuildProps } from '../../components/Guild';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';


import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}:Props){
  const guilds = [
    {
      id:"1",
      name: "Lendários",
      icon: 'image.png',
      owner: true
    },
    {
      id:"2",
      name: "Novo servidor",
      icon: 'image.png',
      owner: false
    },
  ]

  return (
    <View style={styles.container}>
    <FlatList
        data={guilds}
        keyExtractor ={item => item.id}
        renderItem={({item})=> (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:68 , paddingTop:103}}
        ItemSeparatorComponent={() =>  <ListDivider isCentered/>}
        ListHeaderComponent={() =>  <ListDivider isCentered/>}
        style={styles.guilds}
      />
    </View>
  );
}