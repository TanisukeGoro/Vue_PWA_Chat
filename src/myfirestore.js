import Firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3IvrTd75U3wOexwjnGkogylUKQhgYoNY",
    authDomain: "myfirebacechatapp-29ef9.firebaseapp.com",
    databaseURL: "https://myfirebacechatapp-29ef9.firebaseio.com",
    projectId: "myfirebacechatapp-29ef9",
    storageBucket: "myfirebacechatapp-29ef9.appspot.com",
    messagingSenderId: "918146456806",
    appId: "1:918146456806:web:64f5bdac60f1bf58"
};
const firebaseApp = Firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db