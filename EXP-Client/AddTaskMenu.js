import React from 'react';
import { TextInput } from 'react-native-paper';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

//import basic react native components
import { BottomSheet } from 'react-native-btr';

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

export default function AddTaskMenu({isPanelActive, setIsPanelActive}) {

  return (
    <View>
      <BottomSheet
        visible={isPanelActive}
        onBackButtonPress={() => setIsPanelActive(false)}
        onBackdropPress={() => setIsPanelActive(false)}
      >
        <SafeAreaView style={styles.bottomNavigationView}>
          <AddTaskInfo />
        </SafeAreaView>
      </BottomSheet>
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
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    paddingTop: '5%'
  }
});
