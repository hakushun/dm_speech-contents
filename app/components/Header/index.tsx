import styles from './index.module.css';
import { SpeedController } from '../SpeedController';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>読み上げデモ</h1>
      <SpeedController />
    </header>
  );
}
