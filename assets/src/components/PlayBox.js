import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
} from "react-native";
import Icon from "./Icon";
import Screen from "./Screen";
import navigation from "../navigation/RootNavigation";
import MusicScreen from "../screens/MusicScreen";
import { Audio } from "expo-av";
import { audioBookPlaylist, songs } from "../config/data";
// import { useSelector, useDispatch } from "react-redux";
// import { getAlbum, currentMusic, currentAlbum } from "../redux/action";

// import Animated from "react-native-reanimated";
// console.log("window", Dimensions.get("window").width);
// console.log("screen", Dimensions.get("screen").height);
// console.log(Dimensions.get("screen").width / 55);
const screenWidth = Dimensions.get("screen").width;
export default function PlayBox() {
  // const { books, bookmarks } = useSelector((state) => state.booksReducer);
  const [statusM, setStatusM] = React.useState(null);
  const [volume, setvolume] = useState(1.0);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [playbackInstance, setPlayBackInstance] = useState(null);
  const [isBuffering, setIsBuffering] = React.useState();
  const songStatus = useRef(null);
  const slider = useRef(null);
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const WIDTH = Dimensions.get("screen").width / 1.96;
  const start = async () => {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: false,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      });

      loadAudio();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    start();
    // getStatus();
  }, []);
  // useEffect(() => {

  // }, [statusM]);

  const loadAudio = async () => {
    try {
      const playbackInstance = new Audio.Sound();
      const source = require("../../band.mp3");
      // {
      //   uri: songs[index].url,
      // };
      // const status = {
      // 	shouldPlay: isPlaying,
      // 	volume: volume
      // }
      const status = {
        shouldPlay: playing,
        volume: volume,
      };
      // setStatusM(playbackInstance.getStatusAsync());
      // playbackInstance.getStatusAsync((result) =>
      //   console.log(result.durationMillis)
      // );

      playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      setPlayBackInstance(playbackInstance);
      setStatusM(playbackInstance.getStatusAsync());
    } catch (e) {
      console.log(e);
    }
  };
  const onPlaybackStatusUpdate = (status) => {
    setIsBuffering(status.isBuffering);
  };
  const handlePlayPause = async () => {
    // const { isPlaying, playbackInstance } = this.state
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [playbackInstance, setPlayBackInstance] = useState(null);

    playing
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    setPlaying(!playing);

    // console.log(playbackInstance.getStatusAsync());
  };
  const getStatus = async () => {
    if (playbackInstance) {
      var status = await playbackInstance.getStatusAsync();
      // songStatus.current(playbackInstance);

      var percentage =
        (status["positionMillis"] / status["durationMillis"]) * 100;
      var remainingTime = status["durationMillis"] - status["positionMillis"];

      // For use to move the slider automatically
      setDuration(status["positionMillis"]);

      // console.log(status["durationMillis"]);
      setPercentage(percentage);
      var milliseconds = remainingTime % 1000;
      var seconds = Math.floor((remainingTime / 1000) % 60);
      var minutes = Math.floor((remainingTime / (60 * 1000)) % 60);
      var remainingTimes = minutes + ":" + seconds;
      setPosition(remainingTime);
    }

    useMemo(() => getStatus(), [playbackInstance, statusM]);
    // Convert to mm:ss format
    // console.log(milliseconds, remainingTimes);
  };

  // const playMusic = async () => {
  //   console.log("loading");
  //   const { sound } = await Audio.Sound.createAsync(require("../../song.mp3"));
  //   setSound(sound);
  //   console.log("Playing Sound");
  //   // sound._onPlaybackStatusUpdate((status) => {
  //   //   if (status.isLoaded) {
  //   //     setPosition(status.positionMillis);
  //   //   }
  //   // });
  //   sound.getStatusAsync((status) => console.log(status));
  //   if (playing) await sound.pauseAsync();
  //   if (!playing) await sound.playAsync();
  // };
  // // console.log(position);
  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // const handlePreviousTrack = async () => {
  //   if (playbackInstance) {
  //     await playbackInstance.unloadAsync();
  //     // this.setState({
  //     // 	currentIndex : (currentIndex === 0 ? audioBookPlaylist.length -1 : currentIndex-1)
  //     // });
  //     this.loadAudio();
  //   }
  // };

  // const handleNextTrack = async () => {
  //   // let { playbackInstance, currentIndex } = this.state
  //   if (playbackInstance) {
  //     await playbackInstance.unloadAsync();
  //     // this.setState({
  //     // 	currentIndex: (currentIndex+1 > audioBookPlaylist.length - 1 ? 0 : currentIndex+1)
  //     // });
  //     this.loadAudio();
  //   }
  // };
  // getStatus();
  // getStatus();
  // console.log(`${percentage}%`);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => console.log("closed")}
      >
        <MusicScreen
          onPressBack={() => {
            slider.current.scrollToOffset({
              offset: index * WIDTH,
            });
            // console.log(index * WIDTH);
            setmodalVisible(false);
          }}
          liked={liked}
          setLiked={setLiked}
          playing={playing}
          setPlaying={setPlaying}
          index={index}
          setIndex={setIndex}
          handlePlayPause={handlePlayPause}
          percentage={percentage}
          position={position}
          duration={duration}
        />
      </Modal>
      <View
        style={styles.total}
        // onPress={() => setmodalVisible(true)}
      >
        <TouchableOpacity
          onPress={() => setmodalVisible(true)}
          style={{ height: 3, backgroundColor: "#363A3D" }}
        >
          <View
            style={{
              width: `${percentage}%`,
              backgroundColor: "#fff",
              height: 3,
            }}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <Icon
            image={{
              uri: songs[index].artwork,
            }}
            height={70}
            onPress={() => setmodalVisible(true)}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "red",
              flex: 1,
            }}
          >
            <View
              style={{
                // flex: 1,
                width: WIDTH,
                marginLeft: 15,
                // backgroundColor: "green",
                height: "100%",
                alignItems: "center",
              }}
            >
              <Animated.FlatList
                data={songs}
                ref={slider}
                // initialScrollIndex={3}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(data) => data.id.toString()}
                pagingEnabled
                bounces={false}
                initialScrollIndex={index}
                onScrollToIndexFailed={(info) => {
                  const wait = new Promise((resolve) =>
                    setTimeout(resolve, 500)
                  );
                  wait.then(() => {
                    scrollX.current?.scrollToIndex({
                      index: index,
                      animated: true,
                    });
                  });
                }}
                onMomentumScrollEnd={(v) => {
                  const index = Math.round(
                    v.nativeEvent.contentOffset.x / WIDTH
                  );
                  setIndex(index);
                }}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: true }
                )}
                // onScrollEndDrag={(v) => {
                //   const indexx = Math.round(
                //     v.nativeEvent.contentOffset.x / WIDTH
                //   );
                //   setIndex(indexx);
                //   // console.log(indexx);
                // }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setmodalVisible(true)}
                    style={{
                      width: WIDTH,
                      // backgroundColor: "red",
                      // alignSelf: "center",
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        // backgroundColor: "blue",
                      }}
                    >
                      <Text style={[styles.text, { fontWeight: "bold" }]}>
                        {item.title}
                      </Text>
                      <Text style={styles.text}>{item.artist}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                height: "100%",
                // backgroundColor: "yellow",
                marginRight: 10,
              }}
            >
              <Icon
                icon={liked ? "heart" : "heart-outline"}
                height={screenWidth / 7}
                width={screenWidth / 9}
                onPress={() => setLiked(!liked)}
                color={liked ? "red" : "#fff"}
              />
              <Icon
                icon={playing ? "pause" : "play"}
                height={screenWidth / 7}
                width={screenWidth / 9}
                onPress={() => {
                  handlePlayPause();
                  setPlaying(!playing);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  total: {
    height: 73,
    // backgroundColor: "blue",
    position: "absolute",
    bottom: 50,
    width: "100%",
    zIndex: 10,
    // opacity: 0.5,
  },
  container: {
    height: 70,
    backgroundColor: "#282828",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    color: "#FFF",
    textTransform: "capitalize",
    fontSize: 14,
    // lineHeight: 16,
  },
});
