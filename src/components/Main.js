import React from 'react';
import Beast from "./Beast.json"
import HornedBeast from './HornedBeasts';
import FormBeast from './FormBeast';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            array: hornd
        }
    }

    setItems = (newArray) => {
        this.setState({
            array: newArray
        })
    }

    showItems = (event) => {

        let newArr = [];
        let num = event.target.value;

        newArr = hornd.filter((item) => {
            if (item.horns == num) {
                return true;
            }
        })
        if (newArr.length == 0) {
            newArr = hornd
        }

        this.setItems(newArr)

    }

    


    render() {

        return (

            <div style={{ marginLeft: '7%' }}>
                               <FormTypes showBeast={this.showItems} />

                {this.state.array.map((item, index) => {
                    return (
                        <section key={index + 100} style={{ display: 'inline-block', margin: '2%' }}>

                            <HornedBeast style={{ z_index: "1" }} image_url={item.image_url} description={item.description} title={item.title} key={index} />


                        </section>
                    )
                })}
            </div>
        )
    }
}

export default Main;