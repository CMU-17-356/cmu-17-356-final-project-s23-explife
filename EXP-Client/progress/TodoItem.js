import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, Modal, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import EditTodoMenu from '../todo/EditTodoMenu.js'

function DeleteItem({ todo, isDeleting, setIsDeleting, setViewingTodo }) {

  const onDelete = () => {
    setIsDeleting(false);
    console.log(`Deleted ${todo.name}`)
    setViewingTodo(null);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isDeleting}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsDeleting(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure you want to delete this item?</Text>
          <View style={styles.buttons}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsDeleting(false)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onDelete}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default function TodoItem({ todo, setViewingTodo }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="keyboard-backspace" onPress={() => setViewingTodo(null)} />
        <View style={styles.actionButtons}>
          <IconButton icon="pencil" onPress={() => setIsEditing(true)} />
          <IconButton icon="delete" onPress={() => setIsDeleting(true)} />
        </View>
      </View>
      <View>
        <View style={styles.content}>
          <Text style={styles.todoName}>{todo.name}</Text>
          <Text style={styles.todoDeadline}>{new Date(todo.deadline).toDateString()}</Text>
          <Text style={styles.todoStatus}>{todo.completed ? 'Completed' : 'Incomplete'}</Text>
          <Rating
            style={styles.rating}
            type='custom'
            imageSize={30}
            ratingCount={5}
            startingValue={todo.priority}
            readonly={true}
          />
        </View>
      </View>
      <EditTodoMenu todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
      <DeleteItem todo={todo} isDeleting={isDeleting} setIsDeleting={setIsDeleting} setViewingTodo={setViewingTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  content: {
    marginTop: '25%',
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
    marginTop: 8,
    marginBottom: 8,
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
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonClose: {
    backgroundColor: '#B1B1B1',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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