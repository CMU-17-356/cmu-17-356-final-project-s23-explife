import * as React from 'react';
import { Provider } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { TextInput } from 'react-native-paper';
import { BottomSheet } from 'react-native-btr';

function HeaderText() {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>View your TODO lists from...</Text>
    </View>
  );
}

function ProgressList({ pastLists }) {
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        {pastLists.map(({ date }) => (
          <View key={date} style={styles.entry}>
            <View style={styles.checkbox}>
              <MaterialIcons name="date-range" size={30} color="black" />
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>{date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function Progress ({ pastLists }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <Provider>
      <View style={styles.content}>
        <View style={styles.header}>
          <HeaderText/>
        </View>
        <ProgressList pastLists={pastLists} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  headerText: {
    paddingLeft: '5%',
    justifyContent: 'center'
  },
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
  },
  content: {
    height: "100%"
  },
  checkbox: {
    width: '10%',
    alignItems: 'center',
  },
  entry: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 1,
  }
});
