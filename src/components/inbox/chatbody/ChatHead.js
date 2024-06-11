export default function ChatHead({message}) {
    // console.log("message = ", message);
    const localAuth = localStorage.getItem('auth');
    const {email} = JSON.parse(localAuth);
    // console.log("email = ", email);
    let partnar = message.sender.email === email ? message.receiver : message.sender;
    // console.log("partnar = ", partnar);

      let avatar="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
      let name="Akash Ahmed"
    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
                className="object-cover w-10 h-10 rounded-full"
                src={avatar}
                alt={name}
            />
            <span className="block ml-2 font-bold text-gray-600">{partnar.name}</span>
        </div>
    );
}
