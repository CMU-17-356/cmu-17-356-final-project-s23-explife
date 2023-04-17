import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { BottomNavigation } from 'react-native-paper';

export default function Nav({ Todo }) {
  const TodoRoute = () => Todo;
  const StoriesRoute = () => <Text>Stories</Text>;
  const ProgressRoute = () => <Text>Progress</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'todo', title: 'Todo' },
    { key: 'stories', title: 'Stories' },
    { key: 'progress', title: 'Progress' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    todo: TodoRoute,
    stories: StoriesRoute,
    progress: ProgressRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
  },
});
