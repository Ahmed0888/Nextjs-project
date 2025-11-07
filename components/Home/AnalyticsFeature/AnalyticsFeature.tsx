import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const AnalyticsFeature = () => {
  return (
    <div className='pt-24 pb-16'>
        {/* Define Grid  */}
        <div className='w-[95%] sm:w-[80%] mx-auto items-center  grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Image Content   */}
            <div>
                {/* To Be Continueed...  At video 1:15:25 */}
                <Image src="/images/a.jpg" alt="image" width={500} height={500} className='object-contain' />
            </div>
            {/* Text  Content  */}
            <div className='p-6'>
              <h1 className='text-base font-semibold text-orange-500 '>Audience tracking and insights</h1>
              <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in quas ut laborum autem magnam.</h1>
              <p className='mt-4 text-grey-600 text-sm font-medium leading-[2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
              <ul className='mt-7 space-y-2 text-gray-800'>
                <li className='flex items-center font-semibold'>
                  <FaCheckCircle className='text-green-500 mr-2 '/>
                  chat prompt module supports multi-turn conversations.
                </li>
                <li className='flex items-center font-semibold'>
                  <FaCheckCircle className='text-green-500 mr-2 '/>
                  chat prompt module supports multi-turn conversations.
                </li>
                <li className='flex items-center font-semibold'>
                  <FaCheckCircle className='text-green-500 mr-2 '/>
                  chat prompt module supports multi-turn conversations.
                </li>

              </ul>
            </div>

        </div>
    </div>
  )
}

export default AnalyticsFeature