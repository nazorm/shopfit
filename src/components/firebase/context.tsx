import React from 'react';
import Firebase from './config';
// creates FirebaseContext.Provider and FirebaseContext.Consumer 
//and sets type to either initialized config or null
const FirebaseContext = React.createContext<Firebase | null>(null);


export default FirebaseContext;