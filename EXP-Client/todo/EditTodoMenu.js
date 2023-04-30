import React, { useState } from 'react';
import { en, registerTranslation, DatePickerInput } from 'react-native-paper-dates';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, useTheme, TextInput } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import { Rating } from 'react-native-ratings';
import axios from "axios";

// for date picker
registerTranslation('en', en);

// prob want to get the todo w/ axios instead but need detailed todo info to exist
export default function EditTodoMenu({ todo, isEditing, setIsEditing }) {

  const theme = useTheme();

  // Populate with existing todo data
  const [name, setName] = React.useState(todo.name);
  const [deadline, setDeadline] = React.useState(new Date(todo.deadline));
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [rating, setRating] = React.useState(todo.priority);

  console.log(name, deadline, isCompleted, rating);

  const handleEditTodo = () => {
    setIsEditing(false);

    const updatedTodo = {
      name: name,
      deadline: deadline,
      priority: rating,
      completed: isCompleted
    };

    console.log("Edited", name, updatedTodo);

    let instance = axios.create({
      baseURL: "https://explife-backend.fly.dev"
    });

    instance
      .post("/lists/:id", updatedTodo)
      .then(() => {

        // Refresh list
        getTodos()
      })
      .catch((error) => {
        console.log(error)
      })
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
