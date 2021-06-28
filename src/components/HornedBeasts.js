import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberOfLikes:0
        }
    }

    increaseLikes=() =>{
        this.setState({
            numberOfLikes:this.state.numberOfLikes +1

        })
    }
    render(){
        return(
        
            <Card style={{ width: '18rem' }}>
            <Card.Img onClick={this.increaseLikes} variant="top" src={this.props.image_url} />
            <Card.Body>
                <Card.Title>{this.props.title}☘️</Card.Title>
                <Card.Text>
                press on your favorite beast 🦄🦄
                </Card.Text>
                <Card.Text>
                Likes : 💖 {this.state.numberOfLikes} 💖
                </Card.Text>
                
            </Card.Body>
        </Card>
        )}
}
export default HornedBeasts;