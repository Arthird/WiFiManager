import WifiManager, { WifiEntry } from 'react-native-wifi-reborn';
import { getWifiScanPermission } from '@/utils/get-wifi-scan-permission';
import { Alert, Platform } from 'react-native';

export const scanWifiNetworksList = async (): Promise<WifiEntry[]> => {
  if (Platform.OS !== 'android') {
    Alert.alert('Wi-Fi scanning is only supported on Android');
    return [];
  }

  const hasPermission = await getWifiScanPermission();
  if (!hasPermission) {
    Alert.alert(
      'Разрешение отклонено',
      'Для сканирования Wi-Fi требуется разрешение на определение местоположения или доступ к устройствам поблизости.',
    );
    return [];
  }

  try {
    const isWifiEnabled = await WifiManager.isEnabled();
    if (!isWifiEnabled) {
      Alert.alert(
        'Wi-Fi выключен',
        'Пожалуйста, включите Wi-Fi для сканирования сетей.',
      );
      return [];
    }

    await WifiManager.reScanAndLoadWifiList();
    const wifiList = await WifiManager.loadWifiList();
    await new Promise<void>(resolve => setTimeout(resolve, 1500));

    return wifiList;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      if (error.code === 'locationServicesOff') {
        Alert.alert(
          'Геолокация выключена',
          'Пожалуйста, включите геолокацию для сканирования сетей.',
        );
      } else {
        Alert.alert('Ошибка', error.message);
      }
    return [];
  }
};
