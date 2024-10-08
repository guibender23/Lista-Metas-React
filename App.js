import { Button, FlatList, StyleSheet, View } from 'react-native';
import MetaItem from './components/MetaItem';
import { useState } from 'react';
import MetaInput from './components/MetaInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listaMetas, setListaMetas] = useState([]);

  function startAddMetaHandle(){
    setModalIsVisible(true);
  }

  function cancelAddMetaHandle(){
    setModalIsVisible(false);
  }

  function addMetaHandle(textoMeta){
    setListaMetas(listaAtualMetas => [...listaAtualMetas, {text: textoMeta, id: Math.random().toString()}]);
    setModalIsVisible(false);
  };

  function deleteMetaHandle(id){
    setListaMetas(listaAtualMetas => {
      return listaAtualMetas.filter((meta) => meta.id !== id);
    });
  }

  return (
    <>
    {/* Isso altera a cor dos icones de cima (onde aparece hora,bateria,etc...) Precisa estar dentro de <> </>*/}
    <StatusBar style='dark'/> 
    <View style={styles.appContainer}>
      <Button title='Adicione uma Meta' onPress={startAddMetaHandle}/>
      <MetaInput visible={modalIsVisible} onAddMeta={addMetaHandle} onCancelAddMeta={cancelAddMetaHandle}/>
      <View style={styles.metasContainer}>
        <FlatList data={listaMetas} renderItem={(itemData) => { 
          return <MetaItem text={itemData.item.text} id={itemData.item.id} onDeleteMetaItem={deleteMetaHandle}/>;
        }} 
        alwaysBounceVertical={false}
        keyExtractor={(item, index) => {
          return item.id;
        }}/>
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex:1,
  },

  metasContainer:{
    flex: 4
  }

  
});
