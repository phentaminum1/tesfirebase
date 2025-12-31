const permission = await Notification.requestPermission();
console.log("Permission:", permission);

if (permission !== "granted") return;

const token = await messaging.getToken({
  vapidKey: "BPWXZDRyMWDwgnU-D6vuJ10haViiD1mdQFl_4k0Jz5WH-ESMUUAF07iZz2E2dKP5Ny4T1UbXU6z4LmFz-z6eJqo"
});

console.log("🔥 FCM TOKEN:", token);
