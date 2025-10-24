import Link from 'next/link';
import React from 'react';

const notfond = () => {
    return (
        <div className='flex justify-center items-center place-content-center'>
            <h2>Not Fond page 404</h2>
            <Link href="/">Back Home</Link>
        </div>
    );
};

export default notfond;