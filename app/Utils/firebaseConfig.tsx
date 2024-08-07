// firebaseConfig.js
import firebase  from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA8OUSqVNJcRWbbuj6wfSBGltMvEzhngQ4',
    projectId: 'object-detection-app-d9fb6',
    appId: 'com.mlapp',
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
