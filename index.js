import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Head({nomeProduto, precoProduto, endProduto}) {
  return (
    <View style={styles.container}>
      <Text> {nomeProduto}</Text>
      <Text>{precoProduto}</Text>
      <Image  source= {require (endProduto)} style={styles.Img}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Img: {
    height: 20,
    width: 20,
  }
});
