import { useEffect, useState } from "react";
import { useSendMessageMutation } from "../../../redux/features/inbox/inboxApi";

export default function Options({message}) {
    const [text, setText] = useState("")


    const localAuth = localStorage.getItem('auth');
    const {email} = JSON.parse(localAuth);
    // console.log("email = ", email);
    let partnar = message.sender.email === email ? message.receiver : message.sender;
    // console.log("partnar = ", partnar.email);
    
    const [sendMessage, { isLoading: sendMessageIsLoading, isSuccess: sendMessageIsSuccess}] = useSendMessageMutation();

    const handleMessage = ()=>{
        if(text.length && partnar.email && !sendMessageIsLoading){            
            sendMessage({to:partnar.email, message:text.trim()})
        }
    }

    useEffect(()=>{
        if(sendMessageIsSuccess){
            setText("")
        }
    },[sendMessageIsSuccess])


    return (
        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
            <input
                type="text"
                placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700"
                name="message"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                required
            />
            <button onClick={handleMessage}>
                <svg
                    className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
            </button>
        </div>
    );
}
