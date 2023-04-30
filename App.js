import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardFilme from '/src/components/CardFilme';

export default function App() {

  const [filmes, setFilmes] = useState([]);

  const baseUrl = 'https://api.otaviolube.com'

  useEffect(function(){
    fetch(baseUrl + '/api/filmes?populate=*')
    .then(response => response.json())
    .then(objeto => {
      console.log(objeto);
      setFilmes(objeto.data);
    })
  }, []);

  return (
    <View style={styles.container}>
      {filmes.map(filme => 
      <CardFilme key={filme.id} filme={filme.attributes} baseUrl={baseUrl}/>)}
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});