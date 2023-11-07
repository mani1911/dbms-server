import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import config from '../config/index.js';

const firebaseConfig = config.firebaseConfig;
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;