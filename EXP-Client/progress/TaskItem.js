import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import EditTaskMenu from '../todo/EditTaskMenu.js'

export default function TaskItem({ task, setViewingTask }) {
  const [isEditing, setIsEditing] = React.useState(false);

  const onDelete = (name) => {
    console.log(`Deleted ${name}`)
  };

  const onUpdate = (name) => {
    console.log(`Updated ${name}`)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="keyboard-backspace" onPress={() => setViewingTask(null)} />
        <View style={styles.actionButtons}>
          <IconButton icon="pencil" onPress={() => setIsEditing(true)} />
          <IconButton icon="delete" onPress={() => onDelete(task.name)} />
        </View>
      </View>
      <View>
        <View style={styles.content}>
          <Text style={styles.taskName}>{task.name}</Text>
          <Text style={styles.taskDeadline}>{new Date(task.deadline).toDateString()}</Text>
          <Text style={styles.taskStatus}>{task.completed ? 'Completed' : 'Incomplete'}</Text>
          <Rating
            style={styles.rating}
            type='custom'
            imageSize={30}
            ratingCount={5}
            startingValue={task.priority}
            readonly={true}
          />
        </View>
      </View>
      <EditTaskMenu task={task} isEditing={isEditing} setIsEditing={setIsEditing} />
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
  taskName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskDeadline: {
    fontSize: 16,
  },
  taskStatus: {
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
});
