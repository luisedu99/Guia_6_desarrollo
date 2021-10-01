/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
          alert("Modal has been closed."); }} >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel Centroamérica
              </Text>
              <Button title="Cerrar" onPress={() => { setModalVisibleplaya(!modalVisibleplaya); }} />
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./src/img/im2.jpg')} />
        </View>

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}>
                <Image style={styles.ciudad} source={require('./src/img/act1.jpg')} />
              </TouchableHighlight>
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/act2.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/act3.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/act4.jpg')} />
            </View>
            <View>
              <Image style={styles.ciudad} source={require('./src/img/act5.png')} />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/plat1.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/plat2.jpg')} />
            </View>
            <View>
              <Image style={styles.mejores} source={require('./src/img/plat3.jpg')} />
            </View>
          </View>

          <Text style={styles.titulo}>Rutas Turisticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta1.png')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')} />
            </View>
            <View style={styles.listaItem}>
              <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  Modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
});
export default App;
