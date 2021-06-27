import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import HornedBeasts from './components/HornedBeasts';
import Footer from './components/Footer';


class App extends React.Component{
  render(){
    return (
  

<div>
  <Header/>
  <Main/>
  <HornedBeasts/>
  <br></br>
  <Footer/>
</div>
)
  }
}

export default App;