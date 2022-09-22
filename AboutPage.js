import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function AboutPage({navigation,route}){
    const aboutImage = "https://www.wikihow.com/images_en/thumb/4/4d/Become-a-Programmer-Step-83.jpg/v4-1200px-Become-a-Programmer-Step-83.jpg"
    
    useEffect(()=>{
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: '#F4A460',
                shadowColor: "#1F266A",
            },
            headerTintColor: "#fff",
        })
    },[])
    return (
        <View style={styles.container}>
             <StatusBar style="light" />
            <Text style={styles.title}>문제에 직면했을 때 당황하지 않고 문제를 신속히 해결하는 순발력있고 재치있는 엔지니어를 꿈꾸는 신입개발자 최성훈입니다.</Text>
        
            
            <View style={styles.textContainer}>
                <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
                <Text style={styles.desc01}>1일 1커밋의 중요성을 알아 깃허브에 꾸준히 1일 1커밋을 실천하고 있습니다.</Text>
                <Text style={styles.desc02}>결과만큼이나 개발과정의 중요성을 알기에 문제해결 과정중에 겪었던 오류에 대해서 따로 저만의 파일을 만들어 별도로 관리하고 있습니다. </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>신입개발자 최성훈</Text>
                </TouchableOpacity>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"orange",
        alignItems:"center"
      
    },
    title: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:20,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:200,
        height:200,
        borderRadius:15
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"#FFDAB9",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"black",
        fontSize:15,
        fontWeight:"700"
    }
})