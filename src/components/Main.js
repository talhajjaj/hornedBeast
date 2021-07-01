import React from 'react';
import Beast from "./Beast.json"

import HornedBeasts from './HornedBeasts';
import FormTypes from './FormTypes';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: Beast
        }
    }
    setItems = (newArr2) => {
        this.setState({
            arr: newArr2
        }
        )
    }
    showItemsFun = (event) => {

        let newArr = [];
        let num = event.target.value;

        newArr = Beast.filter((item) => {
            if (item.Beast === num) {
                return true;
            }
        })
        if (newArr.length === 0)
         { newArr = Beast }
        this.setItems(newArr)
    }
    render() {
        return (
            <div style={{ marginLeft: '7%' }}>
            <FormTypes showFunpro={this.showItemsFun} />                                {
                this.state.arr.map((item, i) => {
                    return (
                        
                            <HornedBeasts image_url={item.image_url} description={item.description} title={item.title} key={i} />
                        )
                    })}            </div>)
    }
}
export default Main