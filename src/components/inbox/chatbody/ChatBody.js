// import Blank from "./Blank";
import { useEffect, useState } from "react";
import { useGetMessagesQuery } from "../../../redux/features/inbox/inboxApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import { useParams } from "react-router-dom";

export default function ChatBody() {  
    const { id } = useParams();
    const limit = 10
    const {
        isSuccess,
        data,
        isLoading,
        isError,
        error,
    } = useGetMessagesQuery({id:id, limit:limit, offset:0});

    useEffect(()=>{
        if(isSuccess && data){
            console.log("data = ", data);
        }
    }, [isSuccess, data])



    
    return (
        <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
                <ChatHead
                    avatar="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    name="Akash Ahmed"
                />
                <Messages />
                <Options />
                {/* <Blank /> */}
            </div>
        </div>
    );
}
