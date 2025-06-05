

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import {  Button } from 'react-native';
import { useRouter } from 'expo-router';
export default function TabThreeScreen() {
 const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('https://fake-json-api.mock.beeceptor.com/users')
      .then(response => response.json())
      .then(() => {
        setFetched(true);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Fetching data...</Text>
      </View>
    );
  }

  if (fetched) {
    return (
      <View style={styles.centered}>
        <Text style={styles.message}>Data fetched successfully!</Text>
        <Button title="Go to List" onPress={() => router.push('/(tabs)/four')} />
      </View>
    );
  }

  return (
    <View style={styles.centered}>
      <Text style={styles.message}>Failed to fetch data.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  message: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
});