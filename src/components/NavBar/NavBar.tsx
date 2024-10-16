import { FaceHappyIcon, GamePadIcon, HomeIcon, PriceIcon, RouteIcon } from "@/components"
import { cn } from "@/helpers/cn"
import Link from "next/link"
import React from "react"

  type NavBarProps =  React.ComponentProps<"nav">
  type NavBarListProps =  React.ComponentProps<"ul">
  type NavBarListItemProps =  React.ComponentProps<"li">
  type NavBarListItemLinkProps = React.ComponentProps<typeof Link>

  const NavBarList = ({children , className, ...props}: NavBarListProps) =>{
    return (
      <ul className={cn("my-4 border-t border-indigo-400/40 hover:border-indigo-400/40" ,className)}{...props}>
        {children}
      </ul>
    )
}
const NavBarListItem = ({children , className,...props}: NavBarListItemProps) =>{
  return (
    <li className={cn("my-2 rounded-lg bg-transparent p-2  hover:bg-indigo-400/40 cursor-pointer hover:text-slate-100 flex gap-2 items-center",className)}
    {...props}
    >
    {children}
    </li>
  )
}

const NavBarListItemLink = ({href, children, className, ...props}: NavBarListItemLinkProps) =>{
  return(
    <NavBarListItem className={cn("p-0", className)}>
      <Link href={href} className="flex gap-2 items-center p-2 w-full rounded-lg " {...props}>
      {children}
      </Link>
    </NavBarListItem>
  )
}
export  const NavBar = ({className, ...props}:NavBarProps)=>{
    return (
        <nav className={cn("flex h-screen flex-col  bg-slate-900 border-r border-indigo-400/20 text-slate-400 hover:border-indigo-800/40 w-72 p-2",className)}
        {...props}
        >
          <div className="flex items-center justify-center">
            <img
              src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
              alt="Logo EmersonBrogaDev"
              className="w-auto h-12 p-2 "
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