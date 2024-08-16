import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';

function MetaInput(props){
    const [textoMeta, setTextoMeta] = useState('');

    function metasInputHandle(texto){
        setTextoMeta(texto);
      };

    function addMetaHandler(){
        props.onAddMeta(textoMeta);
        setTextoMeta('');
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
          <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/image/target.png')}/>
            <TextInput style={styles.textInput} 
              placeholder='Sua metas' 
              onChangeText={metasInputHandle}
              value={textoMeta}/>
          
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Adicionar' onPress={addMetaHandler}/>
            </View>
            <View style={styles.button}>
              <Button title='Cancelar' onPress={props.onCancelAddMeta}/>
            </View>
          </View>
        </View>
      </Modal>
    )
};

export default MetaInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
      },
      textInput: {
        borderWidth: 1,
        width: '70%',
        marginRight: 8,
        padding: 8,
        borderRadius: 6
      },
      buttonContainer:{
        flexDirection:'row'
      },
      button:{
        margin: 10
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }

});