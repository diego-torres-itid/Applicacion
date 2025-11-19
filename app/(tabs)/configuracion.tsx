import { ThemedText } from '@/src/modules/core/components/themed-text';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";
export default function TabTwoScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <ThemedText>
            Hola que tal a todos!!
          </ThemedText>
      </SafeAreaView>
    </SafeAreaProvider>
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
