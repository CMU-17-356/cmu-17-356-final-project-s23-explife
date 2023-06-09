import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, Appbar, FAB } from 'react-native-paper'

import StoryList from "./StoryList";
import StoriesItem from './StoriesItem';
import AddStoryMenu from './NewStory';

function StoriesPage({ stories, setViewingStory }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);
  return (
    <View style={styles.content}>
      <Appbar.Header elevated>
        <Appbar.Content title="Stories" />
      </Appbar.Header>
      <StoryList stories={stories} setViewingStory={setViewingStory} />
      <FAB style={styles.button} icon="plus" onPress={() => setIsPanelActive(true)} label="Create Today's Story" />
      <AddStoryMenu isPanelActive={isPanelActive} setIsPanelActive={setIsPanelActive} setViewingStory={setViewingStory} />
    </View>
  );
}


export default function Stories({ stories }) {
  const [viewingStory, setViewingStory] = React.useState(null);

  return (
    <Provider>
      {viewingStory == null && <StoriesPage stories={stories} setViewingStory={setViewingStory} />}
      {viewingStory != null && <StoriesItem viewingStory={viewingStory} setViewingStory={setViewingStory} />}
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
  entry: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderBottomWidth: 1,
  },
  content: {
    height: "100%"
  },
  button: {
    marginTop: 'auto',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10
  }
});
