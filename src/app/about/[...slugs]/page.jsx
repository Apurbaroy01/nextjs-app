import React from 'react';

const page = async ({ params }) => {
    const p = await params;
    console.log(p);
    return (
        <div>
            <h2>params</h2>
        </div>
    );
};

export default page;