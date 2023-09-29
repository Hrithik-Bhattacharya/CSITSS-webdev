import React from "react";


function contact() {
  

  const handleSubmit = async (e:React.SyntheticEvent) => {
   e.preventDefault();
  
    try {
      const formData = new FormData(e.target);
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf4r9wOt9cnbgLAIilhKZjIITkC3k5rjFNtjnzCjkeyoIeNMw/formResponse",
        {
          method: "POST",
          body: formData,
        }
      );
  
      /*if (response.ok) {
       
        e.target.reset();
      } else {
   
        alert("Failed to submit form");
      } */
    } catch (error) {
      
      alert("Submitted Successfully");
    }
    e.target.reset()
    
    
  };
  return (
    <>
    
      <div className="flex flex-row">
      <div className="relative z-10 w-full md:w-1/2 lg:w-1/2">
     <table className="border-collapse border border-gray-300 mx-auto mt-40">
        <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th  className="border border-gray-300 px-4 py-2">Contact Number</th>
        </tr>
        <tr>
            <td  className="border border-gray-300 px-4 py-2">Dr. Abhilash Krishna D G</td>
            <td  className="border border-gray-300 px-4 py-2">+91 7989341864</td>
        </tr>
        <tr>
            <td className="border border-gray-300 px-4 py-2">Dr. Parth Sarathi Panigrahy</td>
            <td className="border border-gray-300 px-4 py-2">+91 8847834371</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Dr. Pandry Narendra Rao</td>
           <td className="border border-gray-300 px-4 py-2">+91 9885414398</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Dr. Vandana Jha </td>
           <td className="border border-gray-300 px-4 py-2">+91 8969977560</td>
        </tr>
       
    </table>
    </div>
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-gray-900 p-8 shadow-md md:w-1/2 lg:w-1/2">
          
          <h2 className="title-font mb-1 text-lg font-medium text-white">
            Contact Us
          </h2>
          <p className="mb-5 leading-relaxed text-white">
            Any Doubts pertaining to the CSITSS
          </p>
          <form name="myForm" onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="entry.1908009841"
                className="w-full rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              />
              
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="entry.1909108941"
                className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              ></textarea>
            </div>
            <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
              Send
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-400 text-opacity-90">
            Your email will be not shared with anyone.
          </p>

        </div>
       

      </div>
    </>
  );
}

export default contact;

