// Use a more compatible audio format
const NOTIFICATION_SOUND = 'data:audio/wav;base64,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';

export const playNotificationSound = () => {
  try {
    const audio = new Audio(NOTIFICATION_SOUND);
    audio.volume = 0.5; // Set a comfortable volume level
    
    // Play the sound and handle any errors
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn('Audio playback failed:', error);
      });
    }
  } catch (error) {
    console.warn('Audio creation failed:', error);
  }
};

export const showNotification = (title: string, body: string) => {
  if (!('Notification' in window)) {
    console.warn('This browser does not support notifications');
    return;
  }

  const showNotificationWithSound = () => {
    try {
      const notification = new Notification(title, {
        body,
        icon: '/favicon.ico', // Fallback to favicon if notification icon is not available
        silent: true, // We'll handle the sound manually
      });

      // Play sound after notification is shown
      playNotificationSound();

      // Auto-close notification after 5 seconds
      setTimeout(() => notification.close(), 5000);
    } catch (error) {
      console.warn('Notification creation failed:', error);
    }
  };

  // Check if we already have permission
  if (Notification.permission === 'granted') {
    showNotificationWithSound();
  } else if (Notification.permission !== 'denied') {
    // Request permission
    Notification.requestPermission()
      .then(permission => {
        if (permission === 'granted') {
          showNotificationWithSound();
        }
      })
      .catch(error => {
        console.warn('Permission request failed:', error);
      });
  }
};