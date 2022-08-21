import React from 'react'
import Chat from './Chat'
export default function Body(props) {
    const chats = props.chatsList.map((chat,index)=>{
        return(
            <Chat
            key={index}
            message={chat.message}
            time={chat.time}
            gravatar ={'recive'=== chat.type ? props.gravatars.user2 : props.gravatars.user1}
            isLeft={'recive'=== chat.type }
            
            />
        )
    })



  return (
    <div className="panel-body">
      <div className="chats">
        {chats}
      </div>
    </div>
  )
}
