import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

function Heading({date}) {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>{date}</Text>
    </View>
  );
}

export default function StoryView() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.app}>
      <View style={styles.progress}>
        <Heading date={route.params.date} /> 
      </View>
      <View style={styles.header}>
        <Image
          accessibilityLabel="AI Generated Image"
          source={require('../assets/favicon.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      
      <Text style={styles.text}>
        AI Generated story text
      </Text>
      <Pressable onPress={() => {}} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Share Your Story</Text>
      </Pressable>
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