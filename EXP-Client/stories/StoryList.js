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

  return (
    <SafeAreaView>
      <ScrollView bounces={false}>
        <DataTable>
          {stories.map((story, index) => {
            return (
              <Pressable onPress={() => {
                setViewingStory(story);
              }}>
                <DataTable.Row key={story.todoID} style={styles.entry}>
                  <Text style={{ fontSize: 20 }} >{new Date(story.date).toDateString()}</Text>
                </DataTable.Row>
              </Pressable>
            )
          })}
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
