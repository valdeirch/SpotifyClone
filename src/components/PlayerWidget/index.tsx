import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Song } from '../../../types';

import  styles from './styles';

const song = {
  id: '1',
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  title: 'High on You',
  artist: 'Helen',
}

const PlayerWidget = () => {

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="play" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PlayerWidget;
