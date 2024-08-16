import { StyleSheet, View, Text, Pressable } from "react-native";

function MetaItem(props){
    
    return ( 
        <View style={styles.metaItem} >
            <Pressable android_ripple={{color: '#210644'}} onPress={props.onDeleteMetaItem.bind(null, props.id)}>
                <Text style={styles.metaText}>{props.text}</Text>
            </Pressable>
        </View>
    
    );
}

export default MetaItem;

const styles = StyleSheet.create({
    metaItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#2296f3',
        color: 'white'
      },
    
      metaText:{
        padding: 8,
        color: 'white'
      }
});