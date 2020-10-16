import React,{Component} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'

class Search extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    this.getWord(this.state.text)
                }}
                >
                    <Text
                    style={styles.buttonText}
                    >
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    button:{
        width:100,
        height:50,
        borderWidth:5,
        borderColor:"grey"
    },
    buttonText:{
        fontSize:50,
        fontWeight:'bold'
    }
})

export default Search