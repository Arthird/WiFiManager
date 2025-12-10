import { Platform } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export const getWifiScanPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  try {
    const result = await request(permission);

    return result === RESULTS.GRANTED;
  } catch (error) {
    return false;
  }
};
