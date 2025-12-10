import { useEffect, useState } from 'react';
import {  ActivityIndicator, MD3Theme, Button } from 'react-native-paper';
import { Alert, View, StyleSheet } from 'react-native';
import { scanWifiNetworksList } from '@/utils/scan-wifi-networks-list';
import { WifiEntry } from 'react-native-wifi-reborn';
import WifiCard from '@/components/wifi-card';

function WifiNetworksPage({ theme }: { theme: MD3Theme }) {
  const [wifiNetworks, setWifiNetworks] = useState<WifiEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWifiNetworks();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {wifiNetworks
        .sort((a, b) => (a.SSID > b.SSID ? 1 : -1))
        .map((network, index) => (
          <WifiCard
            key={index}
            wifiEntry={network}
            color={theme.colors.primary}
            textColor={theme.colors.onPrimary}
          />
        ))}
      <Button
        onPress={async () => {
          fetchWifiNetworks();
        }}
      >
        {' '}
        Update list
      </Button>
    </View>
  );

  async function fetchWifiNetworks() {
    try {
      setLoading(true);
      const networks = await scanWifiNetworksList();
      setWifiNetworks(networks);
    } catch (err) {
      typeof err === 'string' && Alert.alert(err);
    } finally {
      setLoading(false);
    }
  }
}

export default WifiNetworksPage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
