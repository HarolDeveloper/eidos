import React from 'react'

const Clients = () => {
    return (
        <div className='bg-background p-8 flex flex-col items-center justify-center gap-8 mt-20  md:-mt-20 xl:mt-0'>
            {/* <h1 className='text-2xl font-medium text-center'>Trusted by gratest companies</h1> */}
            <div className='flex flex-col md:flex-row items-center flex-wrap gap-20'>
                <img src="airbnb.png" className='w-40' alt="" />
                <img src="airbnb.png" className='w-40' alt="" />
                <img src="airbnb.png" className='w-40' alt="" />
                <img src="airbnb.png" className='w-40' alt="" />
            </div>
        </div>
    )
}

export default Clients