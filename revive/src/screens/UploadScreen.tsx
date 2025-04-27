import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
// import * as Progress from 'react-native-progress';
import colors from "../config/colors";
import LottieView from "lottie-react-native";

interface UploadScreenProps {
  onDone: () => void;
  progress?: number;
  visible?: boolean;
}

const UploadScreen: React.FC<UploadScreenProps> = ({
  onDone,
  progress = 0,
  visible = true,
}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            source={require('../assets/animations/done1.json')}
            onAnimationFinish={onDone}
            style={styles.animation}
          />
        )} */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
