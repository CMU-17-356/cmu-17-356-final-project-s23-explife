import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';

// Navigation import
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

export default function StoryList({ stories, setIsPanelActive }) {
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        {stories.map(({ name, date, completed }, index) => (
          <View key={name} style={styles.entry}>
            <View style={styles.checkbox}>
              {/* TODO: Need to set tasks w/ backend
                      onValueChange={(check) => {
                        tasks = [
                          ...tasks.slice(0, index),
                          { name, deadline, check },
                          ...tasks.slice(index + 1)
                        ]
                      }}*/}
            </View>
            <View style={styles.text}>
              <Text multiline style={{ fontSize: 20 }}>
                {name}
              </Text>
              <Text style={{ fontSize: 10 }}>{date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  },
});
