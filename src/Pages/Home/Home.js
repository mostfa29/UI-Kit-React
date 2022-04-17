import React,{Component, useState} from 'react'
import Btn from "../../Components/Buttons/Btn/Btn"

class Home extends Component{

  render() {
    return (
      <div>
      <Btn  elems={{'type':'text text_under','elems':'test'}} type="btn" />
      <Btn   type="inverted" />
      <Btn  elems={{'type':'text text_under','elems':'test'}} type="noBorder" />
      <Btn  elems={{'type':'text text_under','elems':'test'}} type="icon" />
      <Btn type="inverted icon" cu_style={{color:'red'}} elems={{'type':'text text_under','elems':'test'}} />

      </div>
    )
  }
}

export default Home