import { useEffect, useState } from "react";
import { useSerchUserQuery } from "../../redux/features/inbox/inboxApi";

export default function Modal({ open, control }) {
    const [searchText, setSearchText] = useState("");
    const [queryText, setQueryText] = useState("");

    const { isLoading, isError, isSuccess, isFetching, data, error, refetch } =
    useSerchUserQuery(
      { keyword: queryText.trim() },
      {
        skip: !queryText.trim().length,
        refetchOnMountOrArgChange: 0,
      }
    );

    const doSearch = () => {
        // console.log("inside doSearch");
        setQueryText(searchText);
      };
    
      useEffect(() => {
        if (searchText) {
          const debounceDelay = 300; // Adjust this delay as needed
    
          const debounceHandler = setTimeout(() => {
            doSearch();
          }, debounceDelay);
    
          return () => {
            // Cleanup the previous timeout when the input value changes
            clearTimeout(debounceHandler);
          };
        }
      }, [searchText]);

      useEffect(()=>{
        if(isSuccess && data){
            console.log("data = ", data);
        }
      },[isSuccess, data])
    

    return (
        open && (
            <>
                <div
                    onClick={control}
                    className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                ></div>
                <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Send message
                    </h2>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="to" className="sr-only">
                                    To
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="to"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Send to"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    type="message"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Message"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                Send Message
                            </button>
                        </div>

                        {/* <Error message="There was an error" /> */}
                    </form>
                </div>
            </>
        )
    );
}
