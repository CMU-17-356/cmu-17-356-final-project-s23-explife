import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Rating } from 'react-native-ratings';
import StoriesItem from '../stories/StoriesItem'
import EditTodoMenu from '../todo/EditTodoMenu'
import { Appbar, FAB } from 'react-native-paper';
import { Button, useTheme } from 'react-native-paper';

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
            <Button mode="contained" onPress={() => setIsDeleting(false)} style={styles.button}>Cancel</Button>
            <Button mode="contained" onPress={onDelete} style={styles.button}>Yes</Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default function TodoItem({ today, todo, setViewingTodo }) {
  const theme = useTheme();

  const [isEditing, setIsEditing] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  return (
    <View>
      <Appbar.Header mode="large" elevated>
        <Appbar.BackAction onPress={() => setViewingTodo(null)} />
        <Appbar.Content title="" />
        <Appbar.Action icon="pencil" onPress={() => setIsEditing(true)} />
        <Appbar.Action icon="delete" onPress={() => setIsDeleting(true)} />
      </Appbar.Header>
      <View style={styles.container}>
        <View>
          <View style={styles.content}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <Text style={styles.todoDeadline}>{new Date(todo.deadline).toDateString()}</Text>
            <Rating
              style={styles.rating}
              type='custom'
              imageSize={50}
              ratingCount={5}
              startingValue={todo.priority}
              readonly={true}
              ratingColor={theme.colors.primary}
              ratingBackgroundColor={theme.colors.backdrop}
              tintColor={'white'}
            />
          </View>
          <FAB
            small
            label={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            onPress={() => console.log('Mark as complete / incomplete')}
          />
        </View>
        <EditTodoMenu todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
        <DeleteItem todo={todo} isDeleting={isDeleting} setIsDeleting={setIsDeleting} setViewingTodo={setViewingTodo} />
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