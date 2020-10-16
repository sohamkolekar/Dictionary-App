import React from 'react';
import {TextInput,StyleSheet} from 'react-native'

class TextIn extends React.Component{
    
    render(){
        return(
            <TextInput
            style={{
                width:50,
                height:50
            }}
            onChangeText={ text =>{
                this.setState({
                    text:text
                })
            
             }
            }
            value={this.state.text}
            />

            
        );
    }
}

const styles=StyleSheet.create({
    button:{
        width:100,
        height:50
    }
})

export default TextIn