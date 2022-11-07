import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const containerWidth = width * 0.7;
const sideSpace = (width - containerWidth) / 2;
const spaceData = 10;

export default function Home() {
  const [images, setImages] = useState([
    "https://images.hdqwalls.com/download/photographer-girl-portrait-artistic-4k-86-1080x1920.jpg",
    "https://images.hdqwalls.com/download/sparth-river-red-4k-iy-1080x1920.jpg",
    "https://d11tujlfic6kel.cloudfront.net/3d2/da26a/1ba3/41ae/90df/82b48606eaee/original/642622.jpg",
  ]);
  const [secondImages, setSecondImages] = useState([
    "https://artfiles.alphacoders.com/114/thumb-1920-114167.jpg",
    "https://i.artfile.ru/1920x1080_1095021_[www.ArtFile.ru].jpg",
    "https://i.artfile.me/wallpaper/25-04-2016/1920x1080/anime-pixiv-fantasia-fon-vzglyad-devushk-1031520.jpg",
  ]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Акции</Text>
      <View style={styles.main}>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          data={images}
          contentContainerStyle={{
            paddingHorizontal: sideSpace,
            paddingTop: 40,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          declarationRate={0}
          snapToInterval={spaceData}
          scrollEventThrottle={16}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              index * containerWidth,
              index * containerWidth,
              index * containerWidth,
            ];

            const outputRange = [0, -50, 0];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange,
            });

            return (
              <View style={{ width: containerWidth }}>
                <Animated.View
                  style={{
                    marginHorizontal: spaceData,
                    padding: spaceData,
                    borderRadius: 34,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY }],
                  }}
                >
                  <Image source={{ uri: item }} style={styles.posterImage} />
                  <View style={styles.addBlock}>
                    <Text>Название</Text>
                    <Text>499.99&#8381;</Text>
                    <TouchableOpacity style={styles.addBtn}>
                      <Text style={styles.addBtnText}>Добавить</Text>
                    </TouchableOpacity>
                  </View>
                </Animated.View>
              </View>
            );
          }}
        />

        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
            { useNativeDriver: true }
          )}
          data={secondImages}
          contentContainerStyle={{
            paddingHorizontal: sideSpace,
            paddingTop: 5,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          declarationRate={0}
          snapToInterval={spaceData}
          scrollEventThrottle={16}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {
            const inputRange = [
              index * containerWidth,
              index * containerWidth,
              index * containerWidth,
            ];

            const outputRange = [0, -50, 0];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange,
            });

            return (
              <View style={{ width: containerWidth }}>
                <Animated.View
                  style={{
                    // marginHorizontal: spaceData,
                    padding: spaceData,
                    // borderRadius: 34,
                    // backgroundColor: "#fff",
                    // alignItems: "center",
                    transform: [{ translateY }],
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item }}
                      style={styles.secondPosterImage}
                    />
                  </TouchableOpacity>
                </Animated.View>
              </View>
            );
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    paddingTop: 100,
    fontSize: 32,
    fontWeight: "600",
  },
  posterImage: {
    width: "100%",
    height: containerWidth,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  secondPosterImage: {
    width: "100%",
    height: 110,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  addBlock: {
    width: "100%",
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: "#28D501",
    padding: 10,
    borderRadius: 10,
    width: "95%",
    alignItems: "center",
    marginVertical: 5,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
