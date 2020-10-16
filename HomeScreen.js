import React,{Component} from 'react';
import {View} from 'react-native';
import Search from '../components/search';
import TextIn from '../components/TextInput';
import Heading from '../components/header';

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state={
            text:"",
            word:"",
            definition:"",
            lexicalCategory:""
        }
    }
    getWord=async(word)=>{
        var searchKeyword=word.toLowercase();
        var url="https://rupinwhitehatjr.github.io/dictionary/%22"+searchKeyword+"%22.json"

        return fetch(url)
        .then((data)=>{
            if(data.status===200){
                return data.json()
            }
            else{
                return null
            }
        })
        .then((response)=>{
            var responseObject=response
            if(responseObject)
            {
                var wordData=responseObject.definitions[0];
                var definition=wordData.description;
                var lexicalCatagory=wordData.wordtype
            

                this.setState({
                    "word":this.state.text,
                    "definition":definition,
                    "lexicalCatagory":lexicalCatagory
                })

            }
            else{
                this.setState({
                    "word":this.state.text,
                    "definition":"not Found"
                })
                
            }
        })

    }
    render(){
        return(
            <View>
                <TextIn/>
                <Search/>
                <Heading/>
                <Text>
                    Word:{""}
                </Text>
                <Text>
                    {this.state.word}
                </Text>
                <Text>
                    Definition:{""}
                </Text>
                <Text>
                    {this.state.definition}
                </Text>
                <Text>
                    Type:{""}
                </Text>
                <Text>
                    {this.state.lexicalCategory}
                </Text>
                
            </View>
        );
    }
}

