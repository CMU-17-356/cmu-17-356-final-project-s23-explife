import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { BottomNavigation } from 'react-native-paper';

export default function Nav({ Todo, Stories, Progress }) {
  const TodoRoute = () => Todo;
  const StoriesRoute = () => Stories;
  const ProgressRoute = () => Progress;

  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'todo', title: 'Todo', focusedIcon: 'format-list-checks' },
    { key: 'stories', title: 'Stories', focusedIcon: 'book-open-variant' },
    { key: 'progress', title: 'Progress', focusedIcon: 'progress-check' },
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
