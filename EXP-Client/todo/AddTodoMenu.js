import * as React from 'react';
import { en, registerTranslation, DatePickerInput } from 'react-native-paper-dates';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import { Rating } from 'react-native-ratings';
import axios from "axios";

// for date picker
registerTranslation('en', en);

export default function AddTodoMenu({ isPanelActive, setIsPanelActive }) {
  const [name, setname] = React.useState('');
  const [deadline, setDeadline] = React.useState(undefined);
  const [rating, setRating] = React.useState(0);

  const theme = useTheme();

  const handleAddTodo = () => {
    // Clear inputs
    setname('')
    setDeadline(undefined)
    setRating(0)
    setIsPanelActive(false);

    const newTodo = {
      name: name,
      deadline: deadline,
      priority: rating,
      completed: false
    };
    console.log(newTodo);

    let instance = axios.create({
      baseURL: "https://explife-backend.fly.dev/"
    });

    // instance
    //   .post("/lists/:id", newTodo)
    //   .then(() => {

    //     // Refresh list
    //     getTodos()
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  };
  return (
    <View>
      <BottomSheet
        visible={isPanelActive}
        onBackButtonPress={() => setIsPanelActive(false)}
        onBackdropPress={() => setIsPanelActive(false)}
      >
        <SafeAreaView style={styles.bottomNavigationView}>
          <View style={styles.popup}>
            <View>
              <Text>Todo</Text>
              <TextInput
                placeholder="Todo Name"
                value={name}
                onChangeText={(text) => setname(text)}
              />
            </View>
            <View>
              <Text>Deadline</Text>
              <DatePickerInput
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
            <Button mode="contained" onPress={handleAddTodo} >Add Todo </Button>
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
