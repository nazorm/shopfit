import app from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,

  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,

  databaseURL: `${process.env.REACT_APP_BASEURL}`,

  projectId: `${process.env.REACT_APP_PROJECT_ID}`,

  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,

  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,

  appId: `${process.env.REACT_APP_APP_ID}`,

  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
};
class Firebase {
  auth: app.auth.Auth;
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordUpdate = (password: string) =>
    this.auth.currentUser?.updatePassword(password);
}

export default Firebase;
