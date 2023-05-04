import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Rating } from 'react-native-ratings';
import EditTodoMenu from '../todo/EditTodoMenu.js'
import { Appbar, FAB } from 'react-native-paper';
import { Button, useTheme } from 'react-native-paper';

import StoryView from './StoryView'

export default function StoriesItem({ viewingStory, setViewingStory }) {
  const theme = useTheme();

  console.log("viewingStory is ", viewingStory);

  return (
    <View >
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => setViewingStory(null)} />
        <Appbar.Content title={new Date(viewingStory.date).toDateString()} />
      </Appbar.Header>
      <View style={styles.container}>
        <StoryView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  content: {
    height: '100%'
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});