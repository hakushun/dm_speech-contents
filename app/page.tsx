import styles from './page.module.css';
import { Header } from './components/Header';
import { QuestionForm } from './components/QuestionForm';
import { QuestionHeader } from './components/QuestionHeader';
import { QuestionList } from './components/QuestionList';
import { qestionSection, questions } from './lib/mock/questions';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <QuestionHeader title={qestionSection.title} description={qestionSection.description} />
        <QuestionForm>
          <QuestionList questions={questions} />
        </QuestionForm>
      </main>
    </div>
  );
}
