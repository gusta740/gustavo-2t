import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import {Alert, Button,  View} from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f8f8ff', dark: '#f8f8ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/images.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">nice banco bro</ThemedText>
        <HelloWave />
      </ThemedView><Pressable
          onPress={() => router.push('/explore')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#fdfffe' : '#fdfffe', // Escurece quando pressionado
            padding: 6,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            width: 38,
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
          })}
        >
          <ThemedText style={{ color: 'green', fontWeight: 'bold' }}>PIX</ThemedText>
        </Pressable>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo:R$ 323,91</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          {''}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          


  

        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">cashback original</ThemedText>
        <ThemedText>
          200
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">cartão de credito internacional</ThemedText>
        <ThemedText>
          R$3000{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "60%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
