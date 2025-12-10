import { Surface, Text } from 'react-native-paper';
import { WifiEntry } from 'react-native-wifi-reborn';
import { StyleSheet } from 'react-native';

type WifiCardProps = {
  wifiEntry: WifiEntry;
  color: string;
  textColor?: string;
  style?: any;
};

const WifiCard = ({ wifiEntry, color, textColor, style }: WifiCardProps) => {
  return (
    <Surface style={[styles.surface, { backgroundColor: color }, style]}>
      <Text
        style={[styles.SSID, { color: textColor }]}
        adjustsFontSizeToFit
        numberOfLines={1}
        minimumFontScale={32}
      >
        {wifiEntry.SSID}
      </Text>
      <Text style={[styles.BSSID, { color: textColor }]}>
        {wifiEntry.BSSID}
      </Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: '2%',
    borderRadius: 10,
    height: 'auto',
  },
  SSID: {
    fontSize: 28,
    textAlign: 'left',
  },
  BSSID: {
    fontSize: 20,
    textAlign: 'left',
  },
});

export default WifiCard;
