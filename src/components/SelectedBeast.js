import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';



class SelectedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,

            title: "Title",
            image_src: 'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
            desc: 'description'

        }
    }

    handelmodal() {
        this.selectClickFun()
        this.setItems()
        this.setState({
            show: !this.state.show
        })
    }

    removeModal = ()=>{
        this.setState({
            show: !this.state.show
        })
    }

    selectClickFun = () =>{
        this.props.decrease();
        this.props.selectFun();
        
    }

    setItems = () =>{
        this.setState({
            title : this.props.img_title,
            image_src : this.props.img_src,
            desc : this.props.img_desc
        })

    }


    render() {
        return (
            <div>
                <Button onClick={() => { this.handelmodal() }}> Select Item </Button>
                
                <Modal show={this.state.show} onHide={() => this.handelmodal()}>
                    <Modal.Header closeButton> 

                    <Modal.Title> {this.state.title} </Modal.Title>
                    
                    
                     </Modal.Header>
                    
                    <Modal.Body>
                        <Image variant="top" src={this.state.image_src} alt={"alsa"} width={300} />
                    </Modal.Body>
                    
                    <Modal.Footer>
                        {this.state.desc}
                        <Button onClick={() => { this.removeModal() }}>close Modal</Button></Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SelectedBeast;
