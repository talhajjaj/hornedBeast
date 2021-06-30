import React from 'react';
import Beast from "./Beast.json"
import HornedBeast from './HornedBeasts';


class Main extends React.Component {

    


    render() {

        return (

            <div style={{ marginLeft: '7%' }}>
                {Beast.map((item, index) => {
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