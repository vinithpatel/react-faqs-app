import './index.css'

const FaqItem = props => {
  const {
    faqDetails,
    isAnswerVisible,
    onClickHideAnswer,
    onClickShowAnswer,
  } = props
  const {id, questionText, answerText} = faqDetails

  const onClickPlus = () => {
    onClickShowAnswer(id)
  }

  const onClickMinus = () => {
    onClickHideAnswer(id)
  }

  return (
    <li className="faq-item">
      <div className="faq-question-and-plus-card">
        <h1 className="faq-heading">{questionText}</h1>
        {!isAnswerVisible && (
          <button
            className="plus-minus-button"
            type="button"
            onClick={onClickPlus}
          >
            <img
              className="plus-minus-image"
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        )}
        {isAnswerVisible && (
          <button
            className="plus-minus-button"
            type="button"
            onClick={onClickMinus}
          >
            <img
              className="plus-minus-image"
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        )}
      </div>
      {isAnswerVisible && (
        <div className="answer-container">
          <hr className="horizental-rule" />
          <p className="faq-answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
