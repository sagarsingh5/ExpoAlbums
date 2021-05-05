import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import { in } from "react-native/Libraries/Animated/src/Easing";
import Controller from "../components/Controller";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import SliderComponent from "../components/SliderComponent";
import { songs } from "../config/data";

const WIDTH = Dimensions.get("window").width;

export default function MusicScreen({
  onPressBack,
  liked,
  setLiked,
  playing,
  setPlaying,
  index,
  setIndex,
  handlePlayPause,
  percentage,
  // position,
  // duration,
}) {
  //
  // const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // useEffect(() => {
  //   // slider.current.scrollToIndex({
  //   //   index: index,
  //   // });
  //   // scrollX.addListener(({ value }) => {
  //   //   const index = Math.round(value / WIDTH);
  //   //   setIndex(index);
  //   setSeconds(Math.floor((duration / 1000) % 60));
  //   setMinutes(Math.floor((duration / (60 * 1000)) % 60));
  //   // setPosition()
  //   // });
  //   // position;
  // });
  // console.log(songs[index].id);
  // for going next

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: index < songs.length - 1 ? (index + 1) * WIDTH : 0,
    });
    // if(songs.length)
    if (index < songs.length - 1) setIndex(index + 1);
    else setIndex(0);
  };
  const goBackSong = () => {
    slider.current.scrollToOffset({
      offset: index > 0 ? (index - 1) * WIDTH : (songs.length - 1) * WIDTH,
    });
    if (index > 0) setIndex(index - 1);
    else setIndex(songs.length - 1);
  };
  // console
  return (
    <Screen style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#23262B" />
      <View style={styles.header}>
        <Icon icon="chevron-down" size={30} onPress={onPressBack} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: "rgba(255,255,255,.8)" }]}>
            Playing from album
          </Text>
          <Text style={styles.subtitle}>subtitle</Text>
        </View>
        <Icon icon="dots-vertical" />
      </View>
      <View>
        <Animated.FlatList
          ref={slider}
          data={songs}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          keyExtractor={(data) => data.id.toString()}
          showsHorizontalScrollIndicator={false}
          // removeClippedSubviews={true}
          initialScrollIndex={index}
          onScrollToIndexFailed={(info) => {
            const wait = new Promise((resolve) => setTimeout(resolve, 500));
            wait.then(() => {
              scrollX.current?.scrollToIndex({ index: index, animated: false });
            });
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          onMomentumScrollEnd={(v) => {
            const index = Math.round(v.nativeEvent.contentOffset.x / WIDTH);
            setIndex(index);
          }}
          // onScrollBeginDrag={() => console.log("begin")}
          // onScrollEndDrag={() => {}}
          renderItem={({ item }) => (
            <View style={{ width: WIDTH, alignItems: "center" }}>
              <Icon
                image={{
                  uri: item.artwork,
                }}
                height={300}
                width={WIDTH}
                style={styles.image}
              />
            </View>
          )}
        />
      </View>

      {/* Title for Song */}
      <View style={styles.play}>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.title,
              {
                fontSize: 25,
                fontWeight: "bold",
                textTransform: "none",
              },
            ]}
          >
            {songs[index].title}
          </Text>
          <Animated.Text
            style={[
              styles.subtitle,
              {
                fontWeight: "normal",
                textTransform: "capitalize",
                fontSize: 20,
                color: "#a9a9a9",
              },
            ]}
          >
            {songs[index].artist}
          </Animated.Text>
        </View>

        <Icon
          icon={liked ? "heart" : "heart-outline"}
          color={liked ? "red" : "#fff"}
          onPress={() => setLiked(!liked)}
        />
      </View>
      <SliderComponent
        // totalTime="3:58"
        // currentTime={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        value={percentage / 100}
      />

      <Controller
        onNext={goNext}
        onBack={goBackSong}
        playing={playing}
        setPlaying={setPlaying}
        onPress={handlePlayPause}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#23262B",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    // backgroundColor: "red",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  image: {
    alignSelf: "center",
    width: WIDTH - 35,
    marginTop: 5,
  },
  play: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
