import React, {Component} from "react";
import './СharacterCreator.css'
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select"



class СharacterCreator extends Component {
  render() {
    return (
      <div className="СharacterCreator">
        <main>
          <div className="container">
            <div className="first-character">
              <div>
                <h5>Ник</h5>
                  <Input />
              </div>
              <div>
                <h5>Ник</h5>
                  <Input />
              </div>
              <Select/>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default СharacterCreator;