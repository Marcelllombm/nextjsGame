import { FaceHappyIcon, GamePadIcon, HomeIcon, PriceIcon, RouteIcon } from "@/components"
import { cn } from "@/helpers/cn"
import React from "react"
import { NavBarProps } from "./types"
import { NavBarList } from "./NavBarList"
import { NavBarListItemLink } from "./NavBarListItemLink"
import Image from "next/image"
 

export  const NavBar = ({className, ...props}:NavBarProps)=>{
    return (
        <nav className={cn("flex h-screen flex-col  bg-slate-900 border-r border-indigo-400/20 text-slate-400 hover:border-indigo-800/40 w-72 p-2",className)}
        {...props}
        >
          <div className="flex items-center justify-center">
            <Image
              src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
              alt="Logo EmersonBrogaDev"
              className="w-auto h-12 p-2 "
              width={112}
              height={32}
            />
          </div>
          <NavBarList className={"flex-grow"}>
            <NavBarListItemLink href="/">
              <HomeIcon className="w-4 h-4"/>Home
            </NavBarListItemLink>
            <NavBarListItemLink href="/games">
              <GamePadIcon className="w-4 h-4"/>Games
            </NavBarListItemLink>
            <NavBarListItemLink href="/top-10">
              <PriceIcon  className="w-4 h-4"/>Top 10
            </NavBarListItemLink>
            <NavBarListItemLink href="/Walkthroughs">
              <RouteIcon className="w-4 h-4 "/> Walkthroughs
            </NavBarListItemLink>
            
            
          </NavBarList>
          

          <NavBarList>
            <NavBarListItemLink href="/user">
              <FaceHappyIcon className="w-4 h-4 "/> User
            </NavBarListItemLink>
          </NavBarList>
        </nav>
      )
}