import React,{ Component } from "react";
import { Icon } from "react-native-elements";

export default class IconInfo extends Component{
    
    render( ){
        return(
            <Icon name={this.props.nameIcon} 
                type="font-awesome"  
                color='#517fa4'
                size={17}
                    />
        )
    }
}