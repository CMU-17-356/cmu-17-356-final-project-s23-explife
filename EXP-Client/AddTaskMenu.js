import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { ActionSheetProvider } from '@expo/react-native-action-sheet';

function AddTaskInfo() {
  const [taskInput, setTaskInput] = React.useState('');
  const [date, setDate] = React.useState(new Date(1598051730000));
  return (
    <View style={styles.popup}>
      <Text>new task info here</Text>
      <TextInput
        label="Task"
        dense={true}
        value={taskInput}
        onChangeText={(text) => setTaskInput(text)}
      />
      <Text>deadline info here</Text>
      <Text>prio information here</Text>
      <Text>button here to save info and close panel</Text>
    </View>
  );
}

export default function AddTaskMenu({ isPanelActive, setIsPanelActive }) {

  return (
    <View style={styles.content}>
      <View style={styles.menu}>
        {/*<BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
        >
          <BottomSheetView>
            <Text>Awesome 🔥</Text>
          </BottomSheetView>
  </BottomSheet>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00ff00',
  },
  popup: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
});
