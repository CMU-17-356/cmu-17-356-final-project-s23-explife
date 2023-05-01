import * as React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { en, registerTranslation } from 'react-native-paper-dates';
// import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

// for date picker
registerTranslation('en', en);

export default function AddStoryMenu({isPanelActive, setIsPanelActive }) {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [dateCreated, setDeadline] = React.useState('23rd April 2023'); // Dummy date for testing purposes

  const handleAddTodo = () => {
    // setIsPanelActive(false);
    console.log("Creating new story");
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
              <Text>Are you sure you would like to generate a story for 
                today's to-do list?</Text>
            </View>
            <Button
              title="Create New Story"
              onPress={
                () => {
                  setIsPanelActive(false);
                  navigation.navigate("GenerateStory", {date: dateCreated});
                }
              }
            />
            <Button
              title="Cancel"
              onPress={() => setIsPanelActive(false)}
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

// export default withNavigation(AddStoryMenu);