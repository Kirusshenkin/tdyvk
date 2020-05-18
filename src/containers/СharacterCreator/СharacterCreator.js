import React, {Component} from "react";
import './СharacterCreator.css'
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select"
import Form from "../../components/UI/Form/Form"



class СharacterCreator extends Component {



  render() {
    return (
      <div className="СharacterCreator">
        <main>
          <div className="container">
            <div className="first-character">
            <Form>
                <div>
                  <h5>Возраст</h5>
                    <Input type="number"/>
                </div>
                <div>
                  <h5>Ник</h5>
                    <Input type="text"/>
                </div>
                <Select/>
              </Form>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default СharacterCreator;