import Message from "./Message";

export default function Messages({messages}) {
    console.log("messages = ", messages);
    console.log("messages = ", messages.slice().reverse());
    return (
        <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
            <ul className="space-y-2">
                {messages.slice().reverse().map((message)=> <Message key={message.id} message={message} />)}
            </ul>
        </div>
    );
}
