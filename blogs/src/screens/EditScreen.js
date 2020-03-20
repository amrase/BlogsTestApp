import React,{useContext} from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'

const EditScreen = ({navigation}) => {
    console.log('Edit',navigation.getParam('id'))
    return (
       <View>
           <Text>EditScreen</Text>
       </View>
    )
}



export default EditScreen   