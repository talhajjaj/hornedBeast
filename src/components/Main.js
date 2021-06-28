import React from 'react';
import HornedBeasts from './HornedBeasts';
import Beast from './Beast.json';
class Main extends React.Component{
    render (){
        return (
          <div className="main">
            {Beast.map((item,index)=>{
              return(
               < HornedBeasts title={item.title} description={item.description} image_url={item.image_url}
               key={index} />
              )
            })}
          </div>
          //   <div>
          //     <HornedBeasts HornedBeastsName = 'Uniwhal'/>
          //     <br>
          //     </br>
          //       {/* <h2>"title": "UniWhal"</h2> */}
          //     <img src={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} alt="first img"/>
          //    <h3>description": "A unicorn and a narwhal nuzzling their horns"</h3>
          //    "keyword": "narwhal",
          //     "horns": 1
          //     <br></br>
          //     <HornedBeasts HornedBeastsName = "Rhino Family"/>
          //     <br>
          //     </br>
          //    {/* <h2>"title": "Rhino Family"</h2> */}
          //    <img src={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} alt="second img"/>
          //    <h3>"description": "Mother (or father) rhino with two babies",</h3>
          //    "keyword": "rhino",
          //    "horns": 2
 
          //    <HornedBeasts HornedBeastsName ="Unicorn Head"/>
          //    <br>
          //     </br>
          //   {/* <h2>"title": "Unicorn Head",</h2> */}
          //   <img src={"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"} alt="third img"/>
          //  <h3>"description": "Someone wearing a creepy unicorn head mask",</h3>
          //    "keyword": "unicorn", 
          //   "horns": 1
          //   </div>
          );
        }

   
}

  export default Main 