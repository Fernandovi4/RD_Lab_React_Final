import { initializeApp } from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBfgYTLg0H-cw4FBFCPMuhVD2WBmyy2gpo',
  authDomain: 'netflix-like-c2559.firebaseapp.com',
  projectId: 'netflix-like-c2559',
  storageBucket: 'netflix-like-c2559.appspot.com',
  messagingSenderId: '823069501698',
  appId: '1:823069501698:web:65dded5d728675f6853a1b',
}

export const app = initializeApp(firebaseConfig)

