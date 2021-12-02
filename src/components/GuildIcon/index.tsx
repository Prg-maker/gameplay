import React from 'react';

import {Image} from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
  const uri = 'https://icon-library.com/images/what-is-the-discord-icon/what-is-the-discord-icon-18.jpg'

  return (
    <Image
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
  );
}