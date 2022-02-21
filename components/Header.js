import Image from "next/image";
import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon} from "@heroicons/react/outline";
import {HomeIcon} from '@heroicons/react/solid';
import {signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from '../atoms/modalAtom';

function Header() {
    const { data: session  } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const route = useRouter();

    return (
      <div className="shadow-sm border-b bg-white sticky z-50 ">
        <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
            <div onClick={() => route.push('/')} className="relative w-28 cursor-pointer">
                <Image  src="/images/logo.png" layout="fill" objectFit="contain"/>
            </div>

            <div className="max-w-xs hidden md:inline-block " >
                <div className="relative mt-1 p-3 rounded-md ">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <input className="bg-gray-50 block w-full pl-10 sm:text-sm 
                    border-gray-300 rounded-md focus:ring-black focus:border-black disabled:cursor-not-allowed" disabled type="text" placeholder="Search"/>
                </div>
            </div>
            
            <div className="flex items-center justify-end space-x-4 p-3 h-[60px]" >
                <HomeIcon onClick={() => route.push('/')} className="navBtn"/>
                {session ? (
                    <>
                        <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>
                        <div className="relative navBtn dontworking">
                            <PaperAirplaneIcon className="navBtn rotate-45 dontworking"/>
                            {/* <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 
                            rounded-full flex items-center justify-center animate-pulse
                            text-white dontworking">
                                3
                            </div> */}
                        </div>
                        <UserGroupIcon className="navBtn dontworking"/>
                        <HeartIcon className="navBtn dontworking"/>

                        <img onClick={signOut} src={session.user.image} className="h-10 w-10 rounded-full cursor-pointer"/>
                    </>
                ) : (
                    <button onClick={signIn}>Sign In</button>
                )}
            </div>            
            
        </div>
      </div>
  );
}

export default Header;