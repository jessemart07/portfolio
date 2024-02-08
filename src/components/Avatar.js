import Image from 'next/image'
import React from 'react'

function Avatar() {
  return (
    <div>
        <Image src={'/jesse2.png'} width={500} height={500} alt='picture of a gentleman in a suit jacket'
        className='translate-z-0 bottom-0 absolute mix-blend-difference left-0'/>
    </div>
  )
}

export default Avatar