import React from 'react';
import { Form } from 'react-bootstrap';


export class FormBeast extends React.Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div style={{ textAlign: "center" }}>

                <Form >


                    <Form.Group aria-label="Default select example">
                        <Form.Label>filter by number of horns.</Form.Label>
                        <Form.Control onChange={this.props.showFunpro} style={{ marginRight: "15px" }} name="cars" id="cars" as='select'>
                            <option value="all"> All Items </option>
                            <option value="1"> One </option>
                            <option value="2"> Two </option>
                            <option value="3"> Three </option>
                            <option value="100"> Wow.. </option>
                        </Form.Control>
                    </Form.Group>


                </Form>
            </div>
        )
    }
}

export default FormBeast