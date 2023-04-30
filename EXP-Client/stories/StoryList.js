import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Pressable
} from 'react-native';
import { DataTable } from 'react-native-paper';

export default function StoryList({ stories, setViewingStory }) {
  console.log("stories is ", stories)
  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <DataTable>
          {stories.map(({ date, image, story, todoID }, index) => (
            <DataTable.Row key={todoID} style={styles.entry}>
              <Pressable onPress={() => {
                setViewingStory({ date, image, story, todoID });
              }}>
                <Text multiline style={{ fontSize: 20 }}>{story}</Text>
                <Text style={{ fontSize: 10 }}>{new Date(date).toDateString()}</Text>
              </Pressable>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: '10%',
    alignItems: 'center',
  },
  entry: {
    alignItems: 'center',
    height: 75,
    flexDirection: 'row',
    borderStyleBottom: 'solid',
    borderBottomWidth: 1,
    borderColor: 'black'
  },
});
