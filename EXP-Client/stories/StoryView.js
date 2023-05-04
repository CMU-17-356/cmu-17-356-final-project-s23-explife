import React from "react";
import { Image, Pressable, Share, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Appbar, FAB } from 'react-native-paper'
import images from '../assets/GeneratedImageBase64'

function Heading({date}) {
  return (
    <View style={styles.headerText}>
      <Text style={{ fontSize: 20 }}>{date}</Text>
    </View>
  );
}

export default function StoryView({ dateCreated }) {
  const navigation = useNavigation();
  const generatedStory = "In a surreal world, Claire used magical soap to do her laundry, a whispering book to solve her math problems, and had a successful workout that caught the attention of flying unicorns. She felt fulfilled and grateful for the magical experiences and knew that anything was possible. As she lay in bed, Claire felt a sense of wonder and joy, surrounded by a world filled with magic and enchantment."
  const route = useRoute();
  const onShare = async () => {

    try {
      const result = await Share.share({
        message: generatedStory,
        url: images.image1,
        // title: "Story"
      });
    } catch (error) {
      alert(error.message);
    }
  };

    

  return (
    <View style={styles.content}>
      <Appbar.Header elevated>
        <Appbar.Content title={dateCreated} />
      </Appbar.Header>

      <View style={styles.header}>
        <Image
          // accessibilityLabel="AI Generated Image"
          source={require('../assets/GeneratedImage.png')}
          // resizeMode="contain"
          // style={styles.logo}
        />
      </View>
      <Text>
      "In a surreal world, Claire used magical soap to do her laundry, a whispering book to solve her math problems, and had a successful workout that caught the attention of flying unicorns. She felt fulfilled and grateful for the magical experiences and knew that anything was possible. As she lay in bed, Claire felt a sense of wonder and joy, surrounded by a world filled with magic and enchantment."
      </Text>
      <FAB style={styles.button} onPress={onShare} 
        label="Share Your Story!" />
      <FAB style={styles.button} onPress={() => { 
        navigation.navigate("NavBar");
      }} label="Return" />
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
  menu: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#00ff00',
  },
  popup: {
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    paddingTop: '5%'
  },
  content: {
    height: "100%"
  },
  checkbox: {
    width: '10%',
    alignItems: 'center',
  },
  entry: {
    alignItems: 'center',
    minHeight: 75,
    flexDirection: 'row'
  },
});