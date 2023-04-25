import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { BottomNavigation } from 'react-native-paper';

export default function Nav({ Todo, Progress }) {
  const TodoRoute = () => Todo;
  const StoriesRoute = () => <Text>Stories</Text>;
  const ProgressRoute = () => Progress;

  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'todo', title: 'Todo', icon: 'format-list-checks' },
    { key: 'stories', title: 'Stories', icon: 'book-open-variant' },
    { key: 'progress', title: 'Progress', icon: 'progress-check' },
  ];

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
