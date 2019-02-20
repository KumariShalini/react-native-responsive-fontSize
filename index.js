import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default function RF(percent, isOfWidth) {
  const deviceHeight = isIphoneX()
    ? height - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === "android"
    ? height - StatusBar.currentHeight
    : height;

  const deviceWidth = width;

  if ((isOfWidth == undefined) || (isOfWidth == false)) {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
  } else {
    const widthPercent = (percent * deviceWidth) / 100;
    return Math.round(widthPercent);
  }
}
