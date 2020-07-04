import React, {Component} from "react";
import './СharacterCreator.css'

// import Result from '../../components/Result/Result'
import Form from "../../components/UI/Form/Form"
// import Loader from '../../components/UI/Loader/Loader'

class СharacterCreator extends Component {
  
  state = {
    loading: true
  }

  // componentDidMount () {
  //   setTimeout(() => this.setState({loading: false}), 2500);
  // }
  
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