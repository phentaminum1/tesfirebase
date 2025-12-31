importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC5bH3EHcHFrjstgQ2ZLCf_Q2JdWMdOjF4",
  authDomain: "inven-bafira.firebaseapp.com",
  projectId: "inven-bafira",
  storageBucket: "inven-bafira.firebasestorage.app",
  messagingSenderId: "1081146624082",
  appId: "1:1081146624082:web:fd893dcb20c6624004778b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log("📩 Background message:", payload);

  self.registration.showNotification(
    payload.notification?.title || "Notifikasi",
    {
      body: payload.notification?.body || "",
    }
  );
});
