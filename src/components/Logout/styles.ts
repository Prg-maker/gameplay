import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
 container:{
  flex: 1,
  height: '100%',
  justifyContent:'flex-end',
 },
 content:{
  height: '30%',
  backgroundColor: theme.colors.logout,
  paddingBottom: 50,
  alignItems: 'center',
  justifyContent:'center'
 },
 buttons:{
  flexDirection: 'row',
 },
 text:{
  color: '#DDE3F0',
  fontFamily: theme.fonts.title500,
  fontSize: 30,
  paddingBottom: 31,
  
 },
 play:{
  color: '#E51C44'
 },
 Gameplay:{
  color: '#DDE3F0',
  fontFamily: theme.fonts.title700
 },

 
  
});