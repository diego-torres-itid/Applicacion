import Card from "@/src/modules/core/components/Card.js";
import { ThemedText } from '@/src/modules/core/components/themed-text';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

          <ThemedText>
            Estea es el area de home.
          </ThemedText>
          <Card></Card>
      </SafeAreaView>
    </SafeAreaProvider>
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
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
