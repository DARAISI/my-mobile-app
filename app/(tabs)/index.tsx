import { StyleSheet, Image } from 'react-native';
import React from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native';

export default function TabOneScreen() {
 return (
    <View style={styles.container}> 
      <Text style={styles.title}>Welcome to My App!</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Hi, I'm Dara</Text>
        <Image source={require('../../assets/images/image-one.jpg' )} style={styles.image} />

      </ScrollView>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  image: { width: 150, height: 150, borderRadius: 75, marginTop: 20 },
});
