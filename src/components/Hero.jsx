import React from 'react'
import '../buttonGradient.css'

import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine, RiPlayFill, RiStarFill, RiCheckboxBlankFill } from 'react-icons/ri'

import Spline from '@splinetool/react-spline';
import CubeComponent from './Cube';

const Hero = () => {
    return (
        <section className='min-h-[90vh] grid grid-cols-1 md:grid-cols-8 '>
            {/* Information */}
            <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-20'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-5xl xl:text-7xl font-bold xl:leading-[5.5rem] '>
                        Web Design Impactful Digital{" "}

                        {/* <span className='text-primary py-2 px-6 border-8 border-primary relative mt-8 inline-block'>
                            Products
                            <RiCheckboxBlankCircleFill className='text-background text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-background text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-background text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content' />
                            <RiCheckboxBlankCircleFill className='text-background text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content' />
                        </span> */}
                        <span className=" font-bold gradient-text">Products</span>



                    </h1>
                    <div className='w-24 bg-blue-gradient h-[0.35rem] rounded-[24px]'></div>
                    <p className='text-gray-500 text-[1.3rem] font-light leading-[1.8rem] '>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>

                    <div className='flex flex-col md:flex-row items-center gap-4 mt-4'>
                        <button className='w-full xl:w-auto bg-blue-gradient text-white py-3 px-8  text-xl font-semibold shadow-blue rounded-[24px]'>
                            Contact Us
                        </button>
                        {/* <button className=' w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl '>
                            <RiPlayFill className='bg-secondary text-primary p-4 box-content rounded-full' /> Watch our <br /> introduction video
                        </button> */}
                        <button className='buttonGradient w-full xl:w-auto'>
                            Abstraer
                        </button>
                    </div>

                </div>
            </div>
            <div className=' md:col-span-3 flex items-center justify-center my-20 '>
                {/* <Spline scene="https://prod.spline.design/nFb6ZvTYL6rMPnWe/scene.splinecode" className='relative overflow-hidden' /> */}

                <div className=' transform  translate-x-0   md:-translate-y-20 scale-50 md:scale-75 xl:scale-100 '>
                    <CubeComponent />
                </div>
            </div>

            {/* Image */}
            {/* <div className=' md:col-span-3 flex items-center justify-center relative '> */}
            {/* <div>
                    <img src="hero.png" className=' w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover xl:-mt-24 ' alt="" />


                    <div className='relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12'>
                        <div className='flex items-center '>
                            <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                                className='w-10 h-10 object-cover rounded-full ring-gray-300 ring-2 bg-white' alt="" />
                            <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                                className='w-10 h-10 object-cover rounded-full ring-gray-300 ring-2 -ml-4 bg-white' alt="" />
                            <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                                className='w-10 h-10 object-cover  rounded-full ring-gray-300 ring-2 -ml-4 bg-white' alt="" />
                            <img src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                                className='w-10 h-10 object-cover  rounded-full ring-gray-300 ring-2 -ml-4 bg-white' alt="" />
                        </div>
                        <h2 className='text-gray-800 text-xl font-bold tracking-[1px]'>120 + Employees</h2>
                        <div className='flex items-center gap-2 text-lg text-gray-500'>
                            <RiStarFill className='text-primary' /> 5.0 (3.1k Reviews)
                        </div>
                        <div className='absolute -right-12 -bottom-12 -z-10'>
                            <div className='relative'>
                                <RiCheckboxBlankCircleFill className=' text-primary text-8xl mt-4' />
                                <div className='absolute -left-0 -top-0 bg-background w-14 h-14' />
                            </div>
                        </div>
                    </div>

                </div> */}
            {/* Circle */}
            {/* <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-background border-[10px] border-primary rounded-full -z-10'></div> */}

            {/* Logos */}
            {/* <img
                    src="figma.png"
                    className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full border-l-4 border-gray-600 absolute top-[12%] right-[15%] xl:right-[15%] -rotate-12"

                />
                <img
                    src="adobe.png"
                    className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full border-l-4 border-gray-600 absolute top-[10%] xl:top-[8%] left-[15%] xl:left-[15%] -rotate-12"
                /> */}
            {/* <img
                    src="sketch.png"
                    className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full absolute top-[5%] left-[10%] xl:left-[1%] -rotate-12 bg-background border-l-4 border-gray-600  p-2"
                /> */}


            {/* </div> */}

        </section>
    )
}

export default Hero