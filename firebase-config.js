// firebase-config.js

// Firebase Project Configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQe86v5rla9fXKt_9RGrKbQZYupA6UO2I",
    authDomain: "cwts-67e7f.firebaseapp.com",
    projectId: "cwts-67e7f",
    storageBucket: "cwts-67e7f.firebasestorage.app",
    messagingSenderId: "19249309411",
    appId: "1:19249309411:web:bded83f1fc4a94e4fc87d6",
    measurementId: "G-S9SZZJSNQG"
};

// Initialize Firebase SDKs directly (using compat versions for static frontend)
if (typeof firebase !== 'undefined') {
    // Only initialize if not already initialized to prevent redeclaration errors
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    // Initialize Firestore
    const db = firebase.firestore();
    
    // Global access for shared logic
    window.db = db;
    
    // Enable offline persistence for better resilience (PWA best practice)
    db.enablePersistence({ synchronizeTabs: true }).catch(err => {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled in one tab at a time.
            console.warn("Persistence failed: Multiple tabs open.");
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the features required to enable persistence
            console.warn("Persistence failed: Browser not supported.");
        }
    });

    console.log("Firebase initialized successfully! 🛡️");
} else {
    console.error("Firebase SDK script tags are missing. Ensure firebase-app.js and firebase-firestore.js are loaded before firebase-config.js.");
}