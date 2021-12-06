import React  , { useState , useCallback } from 'react'
import {View , Text} from 'react-native'


import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment , AppointmentProps} from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from "../../components/Background";
import { Load } from "../../components/Load";

import {styles} from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation , useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../config/database'
import { Logout } from '../../components/Logout'

export function Home(){

  const [appointments , setAppointments] = useState<AppointmentProps[]>([])
  
  const [loading , setLoading] = useState(true)


  const navigation = useNavigation()
  const [category  , setCategory] = useState('') 

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)



  }

  function handleAppointmentDetails(guildSelected: AppointmentProps){
    
    navigation.navigate('AppointmentDetails', {guildSelected})
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointment(){
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []

    if(category){
      setAppointments(storage.filter(item => item.category == category))
    }else{
      setAppointments(storage)
    }


    setLoading(false)

  }

  useFocusEffect(useCallback(() => {
    loadAppointment()
  },[category]))

  return(
    <Background>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>


        <CategorySelect
          categorySelect= {category}
          setCategory={handleCategorySelect}
        />


     {

          loading ? <Load/>:
        <>

          <ListHeader
              title="Partidas agendada"
              subtitle={`Total ${appointments.length}`}
          />
          <FlatList
              style={styles.matches}
              showsHorizontalScrollIndicator={false}
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({item} ) => (
                <Appointment 
                  onPress={() => handleAppointmentDetails(item)}
                  data={item}
                />
              )}
              contentContainerStyle={{paddingBottom:69}}
              ItemSeparatorComponent={ListDivider}
            />
        </>
      }



    </Background>
      
  )
}