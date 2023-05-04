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
import { FAB } from 'react-native-paper'
// for date picker
registerTranslation('en', en);

export default function AddStoryMenu({ isPanelActive, setIsPanelActive, setViewingStory }) {

  const todayDate = new Date();

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
            <FAB style={styles.button} onPress={() => {
              setIsPanelActive(false);
              setViewingStory({ date: todayDate });
            }} label="Create New Story" />
            <FAB style={styles.button} onPress={() => {
              setIsPanelActive(false);
            }} label="Cancel" />
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
