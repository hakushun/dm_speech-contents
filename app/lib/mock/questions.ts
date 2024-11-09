export const qestionSection = {
  title: '性格診断テスト',
  description:
    '以下の質問に答えて、あなたの性格の傾向を確認しましょう。各質問に対して、最も当てはまる回答を選んでください。このテストはあくまで参考のためであり、診断結果があなたの全てを表すものではありません。リラックスしてお楽しみください！',
};

const titles = [
  '人と接することにエネルギーを感じますか？',
  '計画的に物事を進めるのが得意ですか？',
  '新しい環境に順応するのは早い方ですか？',
  '直感を信じて行動することが多いですか？',
  '他人の感情に敏感で共感しやすいですか？',
  '締め切りにプレッシャーを感じることは少ないですか？',
  '新しい挑戦を恐れずに受け入れますか？',
  '一度決めた計画を柔軟に変えることが得意ですか？',
  '周りの人に対して誠実であることが大切だと感じますか？',
  '他人にアドバイスをするのが好きですか？',
];

const options = [
  {
    value: 1,
    label: '強く同意しない',
  },
  {
    value: 2,
    label: '同意しない',
  },
  {
    value: 3,
    label: 'どちらでもない',
  },
  {
    value: 4,
    label: '同意する',
  },
  {
    value: 5,
    label: '強く同意する',
  },
];

export const questions = titles.map((title, index) => ({
  id: index + 1,
  title,
  options,
}));

export type Question = (typeof questions)[number];
