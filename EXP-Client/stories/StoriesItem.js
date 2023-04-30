import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Rating } from 'react-native-ratings';
import EditTodoMenu from '../todo/EditTodoMenu.js'
import { Appbar, FAB } from 'react-native-paper';
import { Button, useTheme } from 'react-native-paper';

export default function StoriesItem({ story, setViewingStory }) {
  const theme = useTheme();

  return (
    <View>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => setViewingStory(null)} />
        <Appbar.Content title="" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>{story.story}</Text>
        <Text>{story.image}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  content: {
    marginTop: '5%',
  },
  todoName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  todoDeadline: {
    fontSize: 16,
  },
  todoStatus: {
    fontSize: 16,
  },
  rating: {
    marginTop: 15,
    marginBottom: 15,
    marginRight: 8
  },
  input: {
    height: 40,
    margin: 8,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  actionButtons: {
    flexDirection: 'row',
  },
  statusButton: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 100,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    columnGap: 50,
  }
});