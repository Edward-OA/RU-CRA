import Options from './Options';

function Questions({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
      {console.log(question)}
    </div>
  );
}

export default Questions;
