import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';
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
            <TextInput style={styles.textInput} 
              placeholder='Sua metas' 
              onChangeText={metasInputHandle}
              value={textoMeta}/>
          
          <View style={styles.buttonContainer}>
            <Button title='Adicionar' onPress={addMetaHandler}/>
            <Button title='Cancelar' onPress={props.onCancelAddMeta}/>
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
        marginBottom: 24,
        borderBottomWidth: 1,
      },
      textInput: {
        borderWidth: 1,
        width: '70%',
        marginRight: 8,
        padding: 8
      },
      buttonContainer:{
        flexDirection:'row'
      }

});