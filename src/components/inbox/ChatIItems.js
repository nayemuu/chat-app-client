import { useEffect, useState } from "react";
import { useGetConversationQuery } from "../../redux/features/inbox/inboxApi";
import ChatItem from "./ChatItem";

export default function ChatItems() {
    
    const { isLoading, isError, isSuccess, isFetching, data, error, refetch } =
    useGetConversationQuery();

    useEffect(()=>{
        if(isSuccess && data){
            console.log("data = ", data);
        }
    },[isSuccess, data])

    return (
        <>
            {data?.conversations && (<ul>
                {data.conversations.map((conversation,index)=> <li key={conversation.id}><ChatItem conversation={conversation}/></li>)}
            </ul>)}
        
        </>
    );
}
