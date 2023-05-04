import React, { useState } from 'react';
import { en, registerTranslation, DatePickerInput } from 'react-native-paper-dates';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { Button, useTheme, TextInput } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import { Rating } from 'react-native-ratings';

import { AddTodoMenu } from './AddTodoMenu';
import * as utils from '../utils/utils';
import axios from "axios";

// for date picker
registerTranslation('en', en);

// prob want to get the todo w/ axios instead but need detailed todo info to exist
export default function EditTodoMenu({ today, todo, isEditing, setIsEditing, setTodos }) {

  const theme = useTheme();

  // Populate with existing todo data
  const [name, setName] = React.useState(todo.name);
  const [deadline, setDeadline] = React.useState(new Date(todo.deadline));
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [rating, setRating] = React.useState(todo.priority);

  const handleEditTodo = () => {
    setIsEditing(false);

    // Create updated todo
    const updatedTodo = {
      name: name,
      deadline: deadline,
      priority: rating,
      completed: isCompleted
    };
    
    const newItems = today.items.filter((obj) => {
      return !(
        obj.name == todo.name &&
        obj.deadline == todo.deadline &&
        obj.priority == todo.priority &&
        obj.completed == todo.completed
      );
    });

    newItems.push(updatedTodo);

    todo.name = name;
    todo.deadline = deadline;
    todo.priority = rating;
    todo.completed = isCompleted;

    today.items = newItems;
    setTodos(newItems);
    
    utils.updateTodo(today._id, today.items);
  };
  return (
    <View>
      <BottomSheet
        visible={isEditing}
        onBackButtonPress={() => setIsEditing(false)}
        onBackdropPress={() => setIsEditing(false)}
      >
        <SafeAreaView style={styles.bottomNavigationView}>
          <View style={styles.popup}>
            <View>
              <Text>Todo</Text>
              <TextInput
                dense={true}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View>
              <Text>Deadline</Text>
              <DatePickerInput
                dense={true}
                locale="en"
                value={deadline}
                onChange={(d) => setDeadline(d)}
                inputMode="start"
              />
            </View>
            <View>
              <Text>Priority</Text>
              <Rating
                imageSize={50}
                ratingCount={5}
                startingValue={rating}
                onFinishRating={(newRating) => setRating(newRating)}
                type='custom'
                ratingColor={theme.colors.primary}
                ratingBackgroundColor={theme.colors.backdrop}
                tintColor={'white'}
              />
            </View>
            <Button mode="contained" onPress={handleEditTodo} >Edit Todo</Button>
          </View>
        </SafeAreaView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  popup: {
    paddingRight: '5%',
    paddingLeft: '5%',
    flexDirection: 'column',
    gap: 20
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%'
  }
});
