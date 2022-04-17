import React from 'react'
import Button from '../Button/Button'
import './InvertedButton.css'

function InvertedButton(props){

    
          return (
            <div>
            <Button className="btn btn-inverted "
             
              name={props.name  }
              width={props.width }
              height={props.height }
              border={props.border||"1px solid #6E41E2"}
              f_color={props.f_color|| '#6E41E2'}
              bg_color={props.bg_color||"transparent"} 
              border_radius={props.border_radius}
              hover_shadow={props.hover_shadow}
              hover_bg_color={props.hover_bg_color }
              hover_border={props.hover_border }
              hover_f_color={props.hover_f_color }
              click_shadow={props.click_shadow}
              click_bg_color={props.click_bg_color }
              click_border={props.click_border }
              click_f_color={props.click_f_color }


              />

            </div>
          )

        }
 
      

export default  InvertedButton 