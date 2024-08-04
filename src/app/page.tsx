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
          src="https://first-game-6a2f1.web.app/assets/tiktok-tethut-animation-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </main>
  );
}
