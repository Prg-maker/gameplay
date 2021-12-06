import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 60,
    borderWidth: 1,
    
    borderColor:'#495BCC',
    backgroundColor: '#E51C44',
    justifyContent:'center',
    alignItems:"center",
    borderRadius: 8,
    marginHorizontal: 5


  },
  text:{
    color:'#DDE3F0',
    fontFamily: theme.fonts.title500,
    fontSize: 16,
  }
});