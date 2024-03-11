import React from 'react';

function Logo({width = "100px"}) {
    return (
        <div>
            <h1>
                <span className='text-3xl font-bold text-amber-500'>B</span>
                <span className='text-3xl font-bold'>log</span>
                <span className='text-3xl font-bold text-sky-800'>V</span>
                <span className='text-3xl font-bold'>ista</span>
            </h1>
        </div>
    );
}

export default Logo;