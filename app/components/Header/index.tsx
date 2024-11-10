import styles from './index.module.css';
import { SpeedController } from '../SpeedController';
import { TextWithRuby } from '../TextWithRuby';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <TextWithRuby
          texts={[
            { text: '読', ruby: 'よ' },
            { text: 'み', ruby: '' },
            { text: '上', ruby: 'あ' },
            { text: 'げデモ', ruby: '' },
          ]}
        />
      </h1>
      <SpeedController />
    </header>
  );
}
