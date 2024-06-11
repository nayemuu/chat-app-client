// import Blank from "./Blank";
import { useEffect, useState } from "react";
import { useGetMessagesQuery } from "../../../redux/features/inbox/inboxApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import { useParams } from "react-router-dom";
import Error from "../../ui/Error";

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

    // useEffect(()=>{
    //     if(isSuccess && data){
    //         console.log("data = ", data);
    //     }
    // }, [isSuccess, data])


    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (!isLoading && isError) {
        content = (
            <div>
                <Error message={error?.data} />
            </div>
        );
    } else if (!isLoading && !isError && data?.messages?.length === 0) {
        content = <div>No messages found!</div>;
    } else if (!isLoading && !isError && data?.messages?.length > 0) {
        content = (
            <>
                <ChatHead message={data.messages[0]} />
                <Messages messages={data.messages} />
                <Options message={data.messages[0]} />
            </>
        );
    }




    
    return (
        <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
                {content}
            </div>
        </div>
    );
}
