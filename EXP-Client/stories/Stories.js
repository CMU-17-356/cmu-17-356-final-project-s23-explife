import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StoryList from "./StoryList";
import RoundedButton from "../components/button.js";

function HeaderText() {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>Stories</Text>
    </View>
  );
}

export default function Stories({ stories }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <HeaderText/>
      </View>
      <StoryList stories={stories} setIsPanelActive={setIsPanelActive} />
      <View style={{ alignSelf: "flex-end" }}>
        <View>
          <RoundedButton text="Create Today's Story" />
        </View>
      </View>
    </View>
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
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#D9D9D9",
    borderRadius: 2
  },
  text: {
    color: "black",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

