import * as React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';
import { en, registerTranslation } from 'react-native-paper-dates';

// for date picker
registerTranslation('en', en);

export default function AddStoryMenu({ isPanelActive, setIsPanelActive }) {
  const [name, setName] = React.useState('');
  const [dateCreated, setDeadline] = React.useState();

  const handleAddTask = () => {
    setIsPanelActive(false);
    const newStory = {
      storyName: name,
      dateCreated: dateCreated,
      completed: false
    };
    console.log(newStory)

    // Make API call here to update the list model

    // instance
    //   .post("/lists/:id", newDonut)
    //   .then(() => {
    //     // Clear inputs
    //     setName('')
    //     setDeadline(new Date())
    //     setRating(0)

    //     // Refresh list
    //     getTasks()
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
              <Text>Are you sure you would like to generate a story for 
                today's to-do list?</Text>
              <TextInput
                dense={true}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <Button
              title="Create New Story"
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