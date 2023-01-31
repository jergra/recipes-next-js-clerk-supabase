import Image from "next/image"
import Link from "next/link"
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs'

export const Header = () => {
    return (
        <header className="transition
        duration-200 ease-in-out hover:bg-red-300 bg-red-200">
            <Link href='/'>
                <div className='flex justify-evenly items-center p-4'>
                    <div>
                        <Image src='/recipes.svg' width='50' height='50' alt='Logo' />
                    </div>
                    <div className='text-5xl text-slate-800'>
                        R E C I P E S
                    </div>
                    <div>
                        <SignedOut>
                            <Link href='/sign-in'>
                                Signed Out
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton
                                userProfileMode='modal'
                                afterSignOutUrl='/'
                            />
                        </SignedIn>
                    </div>
                </div>
            </Link>
        </header>
    )
}