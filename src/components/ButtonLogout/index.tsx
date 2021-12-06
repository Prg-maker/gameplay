import React from "react";
import {Text, View } from 'react-native'
import { styles } from "./styles"
import {RectButton , RectButtonProps} from 'react-native-gesture-handler'


type Props = RectButtonProps & {
  text: string,
}

export function ButtonLogout({text ,...rest } : Props){
  return(

    <View>
    <RectButton 
      style={styles.container}
      {...rest}
    >

      <Text style={styles.text  }>{text}</Text>
    </RectButton>
    </View>
  )
}