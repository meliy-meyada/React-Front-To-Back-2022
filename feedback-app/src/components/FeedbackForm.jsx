import {useState, React} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'


function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }
    

  return (
      <Card>
          <from>
              <h2>How would you rate your service with us?</h2>
              {/*@TODO - Rating select component*/}
              <div className="input-group">
                  <input
                      onChange={handleTextChange}
                      type="text"
                      placeholder='Write a review'
                      value={text}
                  />
                  <Button type="submit" isDisabled={btnDisabled}>
                      Send
                  </Button>
              </div>
              {message && <div className="message">{ message }</div> }
          
          </from>
    </Card>
  )
}

export default FeedbackForm