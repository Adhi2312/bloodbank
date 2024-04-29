import { Text,View,FlatList, RefreshControl } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";


const EventList= ()=>{
    const renderItem = ({item}) =>{
        return <EventItem id={item.id} title={item.title} description={item.description}/>
    }
     
    
    return(
        <View>
            <FlatList
               data={DUMMY_DATA}
               keyExtractor={item=>item.id}
               renderItem={renderItem}
               refreshControl={
                <RefreshControl
                 refreshing={0===1}
                 onRefresh={ ()=>alert('Refreshing..')}

                />
               }
            //    numColumns={2}

            />
        </View>
    )
}
export default EventList;