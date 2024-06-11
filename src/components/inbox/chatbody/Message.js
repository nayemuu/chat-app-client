export default function Message({  message }) {
    // console.log("message = ", message);

     const localAuth = localStorage.getItem('auth');
     const {email} = JSON.parse(localAuth);
     // console.log("email = ", email);
     let justify = message.sender.email === email ?  "end": "start";
    return (
        <li className={`flex justify-${justify}`}>
            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                <span className="block">{message.message}</span>
            </div>
        </li>
    );
}
