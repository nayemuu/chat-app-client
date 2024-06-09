import { Link } from "react-router-dom";
import moment from 'moment';

export default function ChatItem({conversation}) {
    const localAuth = localStorage.getItem('auth');
    const {email} = JSON.parse(localAuth);
    console.log("email = ", email);
    let partnar = conversation.creator.email === email ? conversation.participant : conversation.creator;

    let avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
    let lastMessage="bye"
    console.log("conversation = ", conversation);


    return (
        <Link
            className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
            to={`/inbox/${conversation.id}`}
        >
            <img
                className="object-cover w-10 h-10 rounded-full"
                src={avatar}
                alt={partnar.name}
            />
            <div className="w-full pb-2 hidden md:block">
                <div className="flex justify-between">
                    <span className="block ml-2 font-semibold text-gray-600">
                        {partnar.name}
                    </span>
                    <span className="block ml-2 text-sm text-gray-600">
                        {moment(conversation.updatedAt).fromNow()}
                    </span>
                </div>
                <span className="block ml-2 text-sm text-gray-600">
                    {lastMessage}
                </span>
            </div>
        </Link>
    );
}
