import React from 'react'
import {View,StyleSheet} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import data from 'emoji-mart/data/messenger.json'
import { NimblePicker } from 'emoji-mart'




class Chat extends React.Component{
    constructor(){
        super()
        this.state = {
            messages: [],
            showEmoticons:true
          }
    }
    componentWillMount() {
      
        this.setState({
          messages: [
            {
              _id: 1,
              text:'Hello developer [1F605]',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                //avatar: 'https://facebook.github.io/react/img/logo_og.png',
              },
            },
          ],
        })
      }
     
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
      _onEmoticonPress=(emo)=>{//alert('[1F605]')
       // console.warn(emo)
        this.setState({
          showEmoticons:false
        })
      }

    render(){
        return(
            <View style={styles.container}>
          
                <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
<NimblePicker set='messenger' data={data} />
      </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        height:'100%'
    }
})
export default Chat;