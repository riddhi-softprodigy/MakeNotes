import Toast from "react-native-simple-toast";

export const showToast = (
  text: string = "",
  duration: number = 0,
  gravity: number = 0,
) => {
  let gravityNum;
  switch (gravity) {
    case 0:
      gravityNum = Toast.BOTTOM;
      break;
    case 1:
      gravityNum = Toast.CENTER;
      break;
    default:
      gravityNum = Toast.TOP;
  }
  Toast.showWithGravity(text, duration, gravityNum);
};
