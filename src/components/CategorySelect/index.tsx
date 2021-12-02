import React from "react";

import {styles} from './styles'
import { View  , ScrollView} from "react-native";
import  {categories} from '../../ultils/categories'
import { Category } from "../Category";

type Props= {
  categorySelect: string,
  hasCheckBox?: boolean,
  setCategory: (categoryId:string) => void,
}

export function CategorySelect({categorySelect , setCategory , hasCheckBox = false}: Props){
  return(
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:40}}
    >

      {
        categories.map(category => {
          return(
            <Category
              key={category.id  }
              icon={category.icon}
              title={category.title}
              checked={category.id === categorySelect}
              onPress={() => setCategory(category.id)}
              hasCheckBox={hasCheckBox}
            />
          )  
        })
      }
      

    </ScrollView>


  )
}