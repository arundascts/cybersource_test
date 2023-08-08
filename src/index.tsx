import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react_native_cyber' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ReactNativeCyber = NativeModules.ReactNativeCyber
  ? NativeModules.ReactNativeCyber
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

    export function makeReservation(ccKey: string, cardNumber: string, cardVerificationCode: string, cardExpirationMonth: string, cardExpirationYear: string, ): Promise<number> {
      return ReactNativeCyber.makeReservation(ccKey, cardNumber, cardVerificationCode, cardExpirationMonth, cardExpirationYear);
}
