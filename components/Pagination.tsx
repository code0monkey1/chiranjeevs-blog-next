import { useRouter } from 'next/router';
import qs from 'qs';
import React from 'react';
import { TDirection } from '../types';

interface IPropType {
    page: number;
    pageCount: number;
    // we put this as optional , as this is only used in category pages 
    // and not on the main page .
    redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = '/' }: IPropType) => {
    
    const router = useRouter();

    console.log("page",page)

    const isNextDisabled = (): boolean => {
        return page >= pageCount;
    };

    const isPrevDisabled = (): boolean => {
        return page <= 1;
    };
   
     // whenever you handle pagination , modify the page number , keep the 
     // rest of the query the same, using router
    const handlePaginate = async (direction: TDirection) => {
        if (direction === 1 && isNextDisabled()) 
            return;


        if (direction === -1 && isPrevDisabled()) 
            return;
        
        const queryString = qs.stringify({
            page: page+ direction,
        });
        
   // we always use a question mark before a query string
        router.push(`${redirectUrl}?${queryString}`);
    };
    
    return (
        <div className="flex justify-center mt-24">
            <button
                onClick={() => handlePaginate(-1)}
                className={`bg-primary py-2 px-4 text-white w-24 rounded ${
                    isPrevDisabled() ? 'disabled' : ''
                }`}>
                Previous
            </button>
            <button
                onClick={() => handlePaginate(1)}
                className={`bg-primary py-2 px-4 text-white w-24 rounded ml-4 ${
                    isNextDisabled() ? 'disabled' : ''
                }`}>
                Next
            </button>
        </div>
    );
};

export default Pagination;