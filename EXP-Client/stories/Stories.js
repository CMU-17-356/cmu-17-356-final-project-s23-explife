import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import StoryList from "./StoryList";
import RoundedButton from "../components/button.js";

function Heading() {
  return (
    <View style={styles.headerText}>
      <Text style={styles.entry}>Stories</Text>
    </View>
  );
}

export default function Stories({ stories }) {
  const [isPanelActive, setIsPanelActive] = React.useState(false);

  return (
    <View style={styles.content}>
      <View style={styles.progress}>
        <Heading stories={stories} />
      </View>
      <StoryList stories={stories} setIsPanelActive={setIsPanelActive} />
      <View style={[styles.myObject, { alignSelf: "flex-end" }]}>
        <View style={styles.myObject}>
          <RoundedButton text="Create Today's Story" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  entry: {
    fontSize: 20,
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

