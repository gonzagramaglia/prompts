'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

    const isUserLoggedIn = true ;

    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setProviders();
    }, [])
    

    return (
        <nav className="flex-between w-full mt-32 mb-[-70px] pt-3" >
            <Link href="/" className="flex gap-2 flex-center" > 
                <Image
                    src="/assets/images/logo.svg"
                    alt="Prompts Logo"
                    width="50"
                    height="50"
                />
                <p className="font-bold text-3xl ml-1 hidden sm:block" ><span className="font-extrabold">Pro</span>mpts</p>
            </Link>
            {/* {Desktop  Navigation } */}
            <div className="hidden sm:flex" >
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5" >
                        <Link href="/create-prompt" className="black_btn" >
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link
                            href="/profile"
                        >
                            <Image
                                src="/assets/images/logo.svg"
                                alt="profile picture"
                                height="37"
                                width="37"
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.value(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative" >
                {isUserLoggedIn ? (
                    <div className="flex" >
                        <Image
                            src="/assets/images/logo.svg"
                            alt="profile picture"
                            height="37"
                            width="37"
                            className="rounded-full"
                            onClick={() => setToggleDropDown( prevState => !prevState )}
                        />

                        {toggleDropDown && (
                            <div className="dropdown" >
                                <Link 
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link 
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    className="border-solid border-t-2 mt-2 border-gray-400 dropdown_link pt-1"
                                    onClick={ () => {
                                        setToggleDropDown(false)
                                        signOut()
                                    } }
                                >
                                    Sign Out
                                </button>
                            </div>
                        )} 
                    </div>
                ) : (
                    <>
                        {providers && Object.value(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>

        </nav>
    )
}

export default Nav