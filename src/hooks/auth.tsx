import React , 
{
  createContext,
  useContext,
  useState,
  useEffect 
} from "react";


import * as AuthSession from 'expo-auth-session'

const {SCOPE} = process.env;
const {CLIENT_ID} = process.env;
const {CDN_IMAGE} = process.env;
const {REDIRECT_URI} = process.env;
const {RESPONSE_TYPE} = process.env;

import AsyncStorage  from '@react-native-async-storage/async-storage'
import { api } from "../services/api";
import axios from "axios";

import {COLLECTION_APPOINTMENTS , COLLECTION_USERS} from '../config/database'

type AuthorizationResponse= AuthSession.AuthSessionResult &  {
  params: {
    access_token?: string,
    error?: string
  }
} 

type User = {
  id: string,
  username:string,
  fistName:string,
  avatar: string,
  email: string,
  token:string

}

type AuthContextData = {
  user:User;
  loading: boolean,
  singIn: () => Promise<void>,
  singOut: () => Promise<void>

}

type AuthProviderProps={
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextData)


function AuthProvider({children }:AuthProviderProps){


  const [ user , setUser] = useState<User>({} as User)
  const [loading  , setLoading] = useState(false) 

  async function singIn(){
    try{
      setLoading(true)
      const authUrl= `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const {type , params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse

      if(type === "success"&& !params.error ){
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me')

        const fistName = userInfo.data.username.split('')[0]
        userInfo.data.avatar =  `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        const userData = {
          ...userInfo.data,
          fistName,
          token: params.access_token
        } 

        await AsyncStorage.setItem(COLLECTION_USERS ,  JSON.stringify(userData)) 

        setUser(userData)

      }
      

    }catch{
      throw new Error('Não foi possivel autenticar')
    }finally{
      setLoading(false)
    }
  }
  async function loadingUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS)

    if(storage){
      const userLogged = JSON.parse(storage) as User
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;


      setUser(userLogged)
    }
  } 

  async function singOut(){
     setUser({} as User) 
     await AsyncStorage.removeItem(COLLECTION_APPOINTMENTS)
  }

  useEffect(() => {
    loadingUserStorageData()
  } , [])

  return(
    <AuthContext.Provider value={{
      user,
      singIn,
      loading,
      singOut
    }}>
      {children}
    </AuthContext.Provider>
  )

}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {
  AuthProvider,
  useAuth
}

