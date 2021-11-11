import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAvxvEtENC1DGh00_tIv6K0Wg8qZ1rMlb4",
  authDomain: "webshop-f0863.firebaseapp.com",
  projectId: "webshop-f0863",
  storageBucket: "webshop-f0863.appspot.com",
  messagingSenderId: "727095280293",
  appId: "1:727095280293:web:718b2c3fffc99ec311c34c",
};
const firebase = initializeApp(firebaseConfig);
export default firebase;