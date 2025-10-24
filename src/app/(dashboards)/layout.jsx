import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                {/* side navbar */}
                <div className='col-span-3'>
                    <ul>
                        <li>usert list</li>
                    </ul>
                </div>
                {/* dashboard content */}
                <div className='col-end-9'>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default layout;