import { useState } from 'react';

function Test() {
  const [message, setMessage] = useState("");


  // Create a new WebSocket instance
  const socket = new WebSocket('ws://localhost:9000');
  
  // Event listener for when the WebSocket connection is established
  socket.addEventListener('open', function (event) {
      console.log('WebSocket connection established');
  });
  
  // Event listener for when the WebSocket receives a message from the server
  socket.addEventListener('message', function (event) {
      console.log('Message from server:', event);
  });

  console.log("socke = ", socket);
  
  // Event listener for when the WebSocket connection is closed
  socket.addEventListener('close', function (event) {
      console.log('WebSocket connection closed');
  });

  const sendMessage = () => {
    console.log("message = ", message);
  };

  return (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="bg-[#f2f3f8] p-8 rounded-md flex flex-col justify-center items-center">
        <div className="mb-4 text-xl text-bold">
            <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} />
        </div>
        <button
          type="button"
          className="px-[22px] md:px-[30px] lg:px-[35px] xl:px-[37px] py-[3px] sm:py-[4px] md:py-[7px] lg:py-[9px] xl:py-[12px] bg-gradient-to-b from-[#D13F96] to-[#833586] text-white rounded-[5px] text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-[21.48px]"
          onClick={sendMessage}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Test;