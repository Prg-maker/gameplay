import React  , { useEffect, useState} from 'react'
import {View , Text} from 'react-native'


import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from "../../components/Background";

import {styles} from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export function Home(){

  const appointments = [
    {
      id:"1",
      guild:{
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true
      },
      category: '1',
      date: '21/06 ás 20:40h',
      description: "Eu não sei oq vou colocar aqui"
    },
    {
      id:"2",
      guild:{
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true
      },
      category: '1',
      date: '21/06 ás 20:40h',
      description: "Eu não sei oq vou colocar aqui"
    },
  ]

  const navigation = useNavigation()
  const [category  , setCategory] = useState('') 

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)



  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

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


        <ListHeader
            title="Partidas agendada"
            subtitle="Total 6 "
        />
      <FlatList
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item} ) => (
              <Appointment 
                onPress={handleAppointmentDetails}
                data={item}
              />
            )}
            contentContainerStyle={{paddingBottom:69}}
            ItemSeparatorComponent={ListDivider}
          />

    </Background>
      
  )
}