import React from 'react';

function SearchResultItem({user, setSearchText, setSelectedUser}) {
    // console.log("user = ", user);
    return (
        <div className='bg-[#FFFFFF] rounded-[5px] flex border border-primary/10 hover:border-primary cursor-pointer p-[7px]' 
        onClick={()=>{ 
                    setSearchText(user.email)
                    setSelectedUser(user.email)
        }}>
           {user.email}
        </div>
    );
}

export default SearchResultItem;