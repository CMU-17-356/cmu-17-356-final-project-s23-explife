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
import * as utils from '../utils/utils';
import axios from "axios";

// for date picker
registerTranslation('en', en);

export default function AddTodoMenu({ today, isPanelActive, setIsPanelActive }) {
  const [name, setName] = React.useState("");
  const [deadline, setDeadline] = React.useState(undefined);
  const [rating, setRating] = React.useState(0);

  const theme = useTheme();

  const handleAddTodo = () => {
    // Create new todo
    const newTodo = {
      deadline: deadline,
      completed: false,
      name: name,
      priority: rating
    };
    
    today.items.push(newTodo)
    
    utils.updateTodo(today._id, today.items)

    // Clear inputs
    setName("");
    setDeadline(undefined);
    setRating(0);
    setIsPanelActive(false);
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
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View>
              <Text>Deadline</Text>
              <DatePickerInput
                locale="en"
                value={deadline}
                onChange={(date) => setDeadline(date)}
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
