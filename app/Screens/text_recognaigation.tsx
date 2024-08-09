import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import ml from '@react-native-firebase/ml';
import TextRecognition from '@react-native-ml-kit/text-recognition';

const TextRecognaigation = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [recognizedText, setRecognizedText] = useState<String>();
  
  const handleTextRecognition = async imagePath => {
    const result = await TextRecognition.recognize(imagePath.uri);
    setRecognizedText(result.blocks.map(block => block.text).join(' '))
    console.log(result.blocks.map(block => block.text).join(' '))
  };

  return (
    <View style={styles.container}>
      {!capturedImage ? (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          ref={(ref) => { this.camera = ref; }}
        />
      ) : (
        <Image source={{ uri: capturedImage }} style={styles.preview} />
      )}
      <Button title="Capture" onPress={async () => {
        if (this.camera) {
          console.log("working")
          const options = { quality: 0.8, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data)
          handleTextRecognition(data);
        }else{
         
        }
      }} />
      {recognizedText && (
        <View style={styles.predictions}>
          {/* {predictions.map((p, index) => ( */}
            <Text style={styles.predictionText}>
              {recognizedText}
            </Text>
          {/* ))} */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  preview: { flex: 1, width: '100%' },
  predictions: { position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 },
  predictionText: { color: 'white' },
});

export default TextRecognaigation;
