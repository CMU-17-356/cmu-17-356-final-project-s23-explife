import React from "react";
import { Image, Pressable, Share, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Appbar, FAB } from 'react-native-paper'
import images from '../assets/GeneratedImageBase64'

export default function StoryView() {
  const navigation = useNavigation();
  const route = useRoute();
  const generatedStory = "In a surreal world, Claire used magical soap to do her laundry, a whispering book to solve her math problems, and had a successful workout that caught the attention of flying unicorns. She felt fulfilled and grateful for the magical experiences and knew that anything was possible. As she lay in bed, Claire felt a sense of wonder and joy, surrounded by a world filled with magic and enchantment."
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: generatedStory,
        url: "https://flic.kr/p/2oxMtL7",
        title: "See Claire's funny story for the day!"
      });
    } catch (error) {
      alert(error.message);
    }
  };

    

  return (
    <View style={styles.content}>
      <Appbar.Header elevated>
        <Appbar.Content title = {route.params.date} />
      </Appbar.Header>
      <View>
        <Image
          accessibilityLabel="AI Generated Image"
          source={require('../assets/GeneratedImage.png')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View>
      <View style={[styles.balloon, {backgroundColor: '#D9D9D9'}]}>
        <Text style={{paddingTop: 5, color: 'black'}}>
            "In a surreal world, Claire used magical soap to do her laundry, a whispering book to solve her math problems, and had a successful workout that caught the attention of flying unicorns. She felt fulfilled and grateful for the magical experiences and knew that anything was possible. As she lay in bed, Claire felt a sense of wonder and joy, surrounded by a world filled with magic and enchantment."
        </Text>
      </View>
      </View>
      <FAB style={styles.button} onPress={onShare} 
        label="Share Your Story!" />
      <FAB style={styles.button} onPress={() => { 
        navigation.navigate("NavBar");
      }} label="Return" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 350
  },
  header: {
    padding: 20
  },
  text: {
    lineHeight: 16,
    fontSize: 20,
    marginVertical: 16,
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  },
  textBubble: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
 }
});