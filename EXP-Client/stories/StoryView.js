import React from "react";
import { Image, Pressable, Share, StyleSheet, Text, View } from "react-native";
import { Appbar, FAB } from 'react-native-paper'
import images from '../assets/GeneratedImageBase64'

export default function StoryView() {

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
    <View styles={styles.content}>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20 }}>
        <Image
          accessibilityLabel="AI Generated Image"
          source={require('../assets/GeneratedImage.png')}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text>
          "In a surreal world, Claire used magical soap to do her laundry, a whispering book to solve her math problems, and had a successful workout that caught the attention of flying unicorns. She felt fulfilled and grateful for the magical experiences and knew that anything was possible. As she lay in bed, Claire felt a sense of wonder and joy, surrounded by a world filled with magic and enchantment."
        </Text>
      </View>
      <FAB onPress={onShare} style={{marginTop: 20}}
        label="Share Your Story!" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    display: 'flex',
    justifyContent: 'center'
  },
});