import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import albumDetails from '../assets/data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {

  return (
    <View>
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
      />
    </View>
  );
}

export default AlbumScreen;
