function NextButton({ dispatch, answer, index, questionNum }) {
  if (answer === null) return null;

  if (index < questionNum - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      </div>
    );
  if (index === questionNum - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
