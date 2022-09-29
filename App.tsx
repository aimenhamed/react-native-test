import { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  ScrollView,
  Image,
  Button,
  Alert,
} from "react-native";
import { facts } from "./src/constants";
import { profile, kanye } from "./src/constants/imageIndex";
import { styles } from "./src/styles/App.style";

export default function App() {
  const [showImage, setShowImage] = useState<boolean>(true);
  const [showMe, setShowMe] = useState<boolean>(true);

  useEffect(() => {
    Alert.alert("Welcome to my app!");
  }, []);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (showImage) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [showImage]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Hello 👋🏻 </Text>
        <Text style={styles.title}>My name is Aimen Hamed.</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => setShowImage(!showImage)}
            title={showImage ? "Hide" : "Show"}
            color="#fff"
          />
        </View>
        <Animated.View
          style={[
            {
              opacity: fadeAnim as any as number,
            },
          ]}
        >
          <Image style={styles.profile} source={showMe ? profile : kanye} />
        </Animated.View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>5 Facts About Me</Text>
        <View style={styles.facts}>
          {facts.map((fact, index) => (
            <Text
              key={index}
              style={[
                styles.fact,
                {
                  color: index === 2 ? "#ff00ea" : "#000",
                },
              ]}
              onPress={index === 2 ? () => setShowMe(!showMe) : undefined}
            >
              - {fact}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
