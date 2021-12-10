import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

import { window, wsize, hsize } from '../../entities/constants';
import Button from '../../components/Button';

const AddPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>New Post</Text>
        <View style={styles.middleContainer}>
          <Image 
            source={require('../../assets/images/multi_logo.png')}
            style={styles.image}
          />
          <Text style={styles.name}>multi</Text>
            
        </View>
        <View style={styles.bottomContainer}>
          <Button
            title="Photo Post"
            onPress={() => navigation.navigate('AddPhoto')}
            style={{
              backgroundColor: '#D1D2F9',
              marginBottom: wsize(25),
              width: wsize(335),
              height: hsize(53),
            }}
            titleStyle={{ color: 'white', fontSize: wsize(20) }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#576490',
  },
  title: {
    fontSize: wsize(36),
    fontWeight: '500', //should be fixed to the 500
    marginBottom: hsize(38),
    color: '#FFF',
  },
  image: {
    flex: 1,
    height: 50,
    width: 200,
  },
  name: {
    flex: 1,
    fontSize: wsize(28),
    color: "#FFF",
    fontWeight: "300",
    marginLeft: 65
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 25,
    marginBottom: 20
  },
});
export default AddPostScreen;
