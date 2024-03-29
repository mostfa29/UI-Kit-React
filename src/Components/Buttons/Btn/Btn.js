import './Btn.scss'
import React,{Component, PureComponent, useState} from 'react'
import classnames from 'classnames';


// class Button extends Component{
//     constructor(props) {
//         super(props);
//         // Don't call this.setState() here!
//       // button events's states
//        this.state = { hoverOn: false,click:false };
//         this.hoverHandlerOn = this.hoverHandlerOn.bind(this);
//         this.hoverHandlerOf = this.hoverHandlerOf.bind(this);
//         this.clickHandler = this.clickHandler.bind(this);
//       }


// // the button styles
// //oneof this styles  will be rendered depending on button event state
//       styles={
//         default:{

//         },
//         hovered:{
//             backgroundColor :this.props.hover_bg_color||this.props.bg_color||"#6E41E2",
//             color:this.props.hover_f_color||this.props.f_color||"white",
//             border:this.props.hover_border||this.props.border||"0px solid transparent",
//             borderRadius:this.props.border_radius || 'none',
//             width:this.props.width||"100px",
//             height:this.props.height||"50px",
//             boxShadow:this.props.hover_shadow|| "none"
//         },
//         clicked:{
//             backgroundColor :this.props.click_bg_color||this.props.bg_color||"#6E41E2",
//             color:this.props.click_f_color||this.props.f_color||"white",
//             border:this.props.click_border||this.props.border||"0px solid transparent",
//             width:this.props.width||"100px",
//             height:this.props.height||"50px",
//             borderRadius:this.props.border_radius || 'none',
//             boxShadow:this.click_shadow|| "none"

//         },
//     }


// //the default style of button in the case of no user events on the button
//   style=this.styles['default']


// //return button style event state 'hoverOn event' 
//   hoverHandlerOn=()=>{
//       this.setState({hoverOn:true})
//       this.style=this.styles['hovered']
//    }


// //return button style event state 'hoverOn event' 

//    hoverHandlerOf=()=>{
//     this.setState({hoverOn:false})
//     this.style=this.styles['default']
//    }


// //return button style event state 'onClick event' 

//    clickHandler=()=>{
//     this.setState({click:true})
//     this.style=this.styles['clicked']
//     this.setState({click:false})
//    }

//button render
class Btn extends PureComponent{

        render() {
            

            return (
                <div className='Button'>
                
                <button className={classnames('btn', this.props.type)}
                // onMouseEnter={this.hoverHandlerOn}
                //  onMouseLeave={this.hoverHandlerOf}
                //   onClick={this.clickHandler} 

                //cu_style is the prop for the custom styling to the component
                style={this.props.cu_style} 
                ><div className={this.props.elems_type || "text"}>
               {this.props.elems_value}

                </div>
                 </button>

                </div>
              ) 
        }

        }
 
      

export default  Btn 

