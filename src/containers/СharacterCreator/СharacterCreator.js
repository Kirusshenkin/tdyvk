import React, {Component} from "react";
import './СharacterCreator.css'

// import Result from '../../components/Result/Result'
import Form from "../../components/UI/Form/Form"



class СharacterCreator extends Component {
  render() {
    return (
      <div className="СharacterCreator">
        <main>
          <div className="container">
            <div className="first-character">
              <Form />
              {/* <Result /> */}
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default СharacterCreator;