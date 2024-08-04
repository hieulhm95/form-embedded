'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play', error);
      });
    }
  }, []);

  return (
    <main>
      <div className={styles.responsiveVideo}>
        <video
          ref={videoRef}
          src="https://first-game-6a2f1.web.app/assets/tiktok-tethut-animation.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </main>
  );
}
