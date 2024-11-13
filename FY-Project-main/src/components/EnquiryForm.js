import React from 'react';
import './EnquiryForm.css';
function EnquiryForm() {
    return (
        <div className="enquiry-container">
{
        <form  className="max-w-md mx-auto px-4 py-8 bg-white shadow-md rounded-md ">
            <input type="hidden" name="oid" value="00DF9000001FGMj" />
            <input type="hidden" name="retURL" value="http://google.com" />

            <div className="mb-4">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input id="first_name" maxLength="40" name="first_name" type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input id="last_name" maxLength="80" name="last_name" type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" maxLength="80" name="email" type="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input id="city" maxLength="40" name="city" type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Province</label>
                <input id="state" maxLength="20" name="state" type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500" />
            </div>

            <button type="submit" name="submit" className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">Submit</button>
        </form>
}
</div>
 );
}

export default EnquiryForm;
