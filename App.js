import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Head from './src/index.js'
export default function App() {
  return (
    <View>
   <Head nomeProduto='gato calvo' precoProduto='2.99' endProduto='./src/img/calvo.jpg'> </Head>
   <Head nomeProduto='cachorro calvo' precoProduto='2.99' endProduto='./src/img/cachorro.jpg'> </Head>
   <Head nomeProduto='calopista calvo' precoProduto='2.99' endProduto='./src/img/calopsita.jpg'> </Head>
   <Head nomeProduto='cavalo calvo' precoProduto='2.99' endProduto='./src/img/cavalo.jpg'> </Head>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
