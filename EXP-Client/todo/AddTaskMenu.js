import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { TextInput, DatePicker } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import { Rating } from 'react-native-ratings';
import { en, registerTranslation, DatePickerInput } from 'react-native-paper-dates';

// for date picker
registerTranslation('en', en);

export default function AddTaskMenu({ isPanelActive, setIsPanelActive }) {
  const [name, setName] = React.useState('');
  const [deadline, setDeadline] = React.useState();
  const [rating, setRating] = React.useState(0);

  const handleAddTask = () => {
    setIsPanelActive(false);
    const newTask = {
      taskName: name,
      deadline: deadline,
      priority: rating,
      completed: false
    };
    console.log(newTask)

    let instance = axios.create({
      baseURL: "https://explife-backend.fly.dev"
    });

    instance
      .post("/lists/:id", newDonut)
      .then(() => {
        // Clear inputs
        setName('')
        setDeadline(new Date())
        setRating(0)

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
        visible={isPanelActive}
        onBackButtonPress={() => setIsPanelActive(false)}
        onBackdropPress={() => setIsPanelActive(false)}
      >
        <SafeAreaView style={styles.bottomNavigationView}>
          <View style={styles.popup}>
            <View>
              <Text>Task</Text>
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
              />
            </View>
            <Button
              title="Add Task"
              onPress={handleAddTask}
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
