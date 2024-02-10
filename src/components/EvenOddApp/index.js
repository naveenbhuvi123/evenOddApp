import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  showNumber = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevValue => ({count: prevValue.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const evenOddText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="main-heading">Count {count}</h1>
          <div className="count-container">
            <p className="count-heading">
              Count is {evenOddText}
              <div className="button-tag-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.showNumber}
                >
                  Increment
                </button>
                <p className="description">
                  *Increase By Random Number Between 0 to 100
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
