'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video is playing');
          })
          .catch(error => {
            console.error('Error attempting to play', error);
          });
      }
    }
  }, []);

  return (
    <main>
      <div className={styles.responsiveVideo}>
        <video
          ref={videoRef}
          src="https://firebasestorage.googleapis.com/v0/b/first-game-6a2f1.appspot.com/o/kv-tethut-animation.mp4?alt=media&token=c52015b7-d1f7-4ef0-b943-9dfe57593a24"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </main>
  );
}
