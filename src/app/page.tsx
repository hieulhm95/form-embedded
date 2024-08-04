'use client';
import styles from './page.module.css';

export default function Home() {
  // const handleButtonClick = () => {
  //   console.log(window.location);
  //   window.parent.location.href = window.location.href + '?email=testing123';
  // };
  return (
    <main>
      <div className={styles.responsiveVideo}>
        <video src="/assets/kv-animation.mp4" controls autoPlay loop />
      </div>
    </main>
  );
}
