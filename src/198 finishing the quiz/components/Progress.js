function Progress({ index, questionNum, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={questionNum} value={index +Number(answer!==null)}/>
      <p>
        Question <strong>{index + 1}</strong>/{questionNum}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
