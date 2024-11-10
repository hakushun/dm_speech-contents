export async function submit(_: null, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const answers: { [s: string]: FormDataEntryValue } = {};
  for (const [name, value] of formData) {
    answers[name] = value;
  }
  console.log(answers);
  window.alert('回答を受け付けました');
  return null;
}
