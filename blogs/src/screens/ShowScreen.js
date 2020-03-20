import React,{useContext} from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Entypo} from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {

    console.log('Show',navigation.getParam('id'))

    const {state} = useContext(Context)
    const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'))
    
    return (
       <View>
           <Text>{blogPost.title}</Text>
           <Text>{blogPost.content}</Text>
       </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight:()=> ( <TouchableOpacity onPress={()=>
            navigation.navigate('Edit',{id : navigation.getParam('id')})}>
            <Entypo name="pencil" size={30}/>
       </TouchableOpacity> 
     )
    }
};

export default ShowScreen