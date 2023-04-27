import React, { useState } from 'react';
import { en, registerTranslation, DatePickerInput } from 'react-native-paper-dates';
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import { Rating } from 'react-native-ratings';
import axios from "axios";

// for date picker
registerTranslation('en', en);

// prob want to get the task w/ axios instead but need detailed task info to exist
export default function EditTaskMenu({ task, isEditing, setIsEditing }) {

  // Populate with existing task data
  const [taskName, setTaskName] = React.useState(task.name);
  const [deadline, setDeadline] = React.useState(new Date(task.deadline));
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [rating, setRating] = React.useState(task.rating);

  const handleEditTask = () => {
    setIsEditing(false);

    const updatedTask = {
      name: taskName,
      deadline: deadline,
      priority: rating,
      completed: isCompleted
    };

    console.log("Edited", taskName, updatedTask);

    let instance = axios.create({
      baseURL: "https://explife-backend.fly.dev"
    });

    instance
      .post("/lists/:id", updatedTask)
      .then(() => {

        // Refresh list
        getTasks()
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
              <Text>Task</Text>
              <TextInput
                dense={true}
                value={taskName}
                onChangeText={(text) => setTaskName(text)}
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
              <TouchableOpacity
                style={[styles.statusButton, isCompleted && styles.completed]}
                onPress={() => setIsCompleted(!isCompleted)}
              >
                <Text style={styles.buttonText}>{isCompleted ? 'Complete' : 'Incomplete'}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>Priority</Text>
              <Rating
                imageSize={50}
                ratingCount={5}
                startingValue={rating}
                onFinishRating={(newRating) => setRating(newRating)}
              />
            </View>
            <Button
              title="Save"
              onPress={handleEditTask}
            />
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
