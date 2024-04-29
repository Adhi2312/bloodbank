import { useNavigation } from '@react-navigation/native';
import {View,Text,StyleSheet,Button} from 'react-native';
import EventList from '../components/events/event-list';
import {useEffect} from 'react';
import {useState} from 'react';
const HomeScreen = () =>{
    const [data,setData] =useState([])
    useEffect(()=>{
        fetchData()

    },[])

    const fetchData=async()=>{
        const response =await fetch('http://127.0.0.1:8000/api/events/')
        const data =await response.json()
        setData(data)
    }
    const navigation=useNavigation();
    return(
        <View style={styles.screen}>
            <EventList/>
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
    }
})
export default HomeScreen;