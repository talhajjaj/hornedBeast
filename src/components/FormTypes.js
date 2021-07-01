import React from 'react';
import { Form } from 'react-bootstrap';
export class FormTypes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Form style={{ marginRight: '30%', marginLeft: "23%" }} >
                    <Form.Group aria-label="Default select example">
                        <Form.Label>Filter By Number Of Horns 🦄</Form.Label>

                        <Form.Control onChange={this.props.showFunpro} style={{ marginRight: "15px" }} name="horns" id="horns" as='select'>
                            <option value="all"> All Items </option>

                            <option value="1"> ONE </option>
                            <option value="2"> TWO </option>
                            <option value="3"> THREE </option>
                            <option value="100"> WOOW </option>
                        </Form.Control>

                    </Form.Group>
                </Form>

            </div>)
    }
}
export default FormTypes