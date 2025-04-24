import { StyleSheet, Image, Platform, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#04971a' }}
      headerImage={
        <Image
          
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PIX</ThemedText>
      </ThemedView>
      <ThemedText>Escanear QRcode</ThemedText><Pressable
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
          <ThemedText style={{ color: 'green', fontWeight: 'bold' }}><AntDesign name="qrcode" size={35} color="black" /></ThemedText>
        </Pressable>
      <Collapsible title="Ver estrato">
        <ThemedText>
          Pix enviado para GordaodaXJ{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          Pix enviado para Jorge<ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="defaultSemiBold">Pix recebido de sung jin woo</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Cartoes do Banco">
        <ThemedText>
          Cartao de debido {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
