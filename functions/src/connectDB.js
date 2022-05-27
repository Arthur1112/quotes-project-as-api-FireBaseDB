import { cert, getApps, initializeApp } from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore'
import myCredentials from '../credentials.js'

export const dbConnect = () => {
    if(getApps().length === 0) {
        initializeApp({
            credential: cert(myCredentials)
        })
    } return getFirestore();
}