import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    visibleAnswerFaqIds: [],
  }

  onClickShowAnswer = id => {
    this.setState(prevState => ({
      visibleAnswerFaqIds: [...prevState.visibleAnswerFaqIds, id],
    }))
  }

  onClickHideAnswer = id => {
    const {visibleAnswerFaqIds} = this.state

    const updatedVisibleAnswerFaqIds = visibleAnswerFaqIds.filter(
      eachId => eachId !== id,
    )

    this.setState({
      visibleAnswerFaqIds: updatedVisibleAnswerFaqIds,
    })
  }

  render() {
    const {visibleAnswerFaqIds} = this.state
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="faqs-main-heading">FAQs</h1>
          <ul className="faq-items-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                faqDetails={eachFaq}
                isAnswerVisible={visibleAnswerFaqIds.includes(eachFaq.id)}
                onClickHideAnswer={this.onClickHideAnswer}
                onClickShowAnswer={this.onClickShowAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
