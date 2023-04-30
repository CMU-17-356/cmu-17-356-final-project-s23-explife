import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { Rating } from 'react-native-ratings';
import EditTodoMenu from '../todo/EditTodoMenu.js'
import { Appbar, FAB } from 'react-native-paper';
import { Button, useTheme } from 'react-native-paper';

export default function StoriesItem({ story, setViewingStory }) {
  const theme = useTheme();

  return (
    <View>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={() => setViewingStory(null)} />
        <Appbar.Content title="" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>{story.story}</Text>
        <Text>{story.image}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});