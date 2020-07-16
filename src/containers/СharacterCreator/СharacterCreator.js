import React, {Component} from "react";
import './СharacterCreator.css'
import Form from "../../components/UI/Form/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class СharacterCreator extends Component {
  
  render() {
    return (
      <div className="СharacterCreator">
          <Container>
            <Row>
              <Col>
                <div className="first-character">
                  <Form />
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
}

export default СharacterCreator;