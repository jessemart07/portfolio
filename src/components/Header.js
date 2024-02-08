// next/image
import Image from 'next/image';

// next/link
import Link from 'next/link';

// components
import Socials from './Socials'; 

function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:pl-10 xl:pr-24 xl:h-[90px]">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          {/* Logo */}
          <Link href={'/'}>
            <Image src={'/logo.svg'} width={160} height={58} alt='Jesse Martin Logo' priority={true}/>
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header