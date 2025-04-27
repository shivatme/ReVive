import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView, ViewStyle} from 'react-native';
import ImageInput from './ImageInput';

interface ImageInputListProps {
  imageUris?: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string) => void;
}

function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={uri => onAddImage(uri)} imageUri={null} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
