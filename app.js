console.log("🔥 app.js loaded");

// 🔹 CONFIG KAMU
firebase.initializeApp({
  apiKey: "AIzaSyC5bH3EHcHFrjstgQ2ZLCf_Q2JdWMdOjF4",
  authDomain: "inven-bafira.firebaseapp.com",
  projectId: "inven-bafira",
  storageBucket: "inven-bafira.firebasestorage.app",
  messagingSenderId: "1081146624082",
  appId: "1:1081146624082:web:fd893dcb20c6624004778b"
});

const messaging = firebase.messaging();

// 🔹 REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then(reg => {
      console.log("✅ Service Worker terdaftar", reg);
    })
    .catch(err => {
      console.error("❌ SW gagal:", err);
    });
}

async function initFCM() {
  try {
    const permission = await Notification.requestPermission();
    console.log("🔔 Permission:", permission);

    if (permission !== "granted") {
      alert("Notifikasi ditolak");
      return;
    }

    const token = await messaging.getToken({
      vapidKey: "BPWXZDRyMWDwgnU-D6vuJ10haViiD1mdQFl_4k0Jz5WH-ESMUUAF07iZz2E2dKP5Ny4T1UbXU6z4LmFz-z6eJqo"
    });

    console.log("🔥🔥 FCM TOKEN:", token);

  } catch (err) {
    console.error("❌ FCM ERROR:", err);
  }
}
