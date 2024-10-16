import { cn } from "@/helpers/cn"
import { NavBarListProps } from "./types"

export  const NavBarList = ({children , className, ...props}: NavBarListProps) =>{
    return (
      <ul className={cn("my-4 border-t border-indigo-400/40 hover:border-indigo-400/40" ,className)}{...props}>
        {children}
      </ul>
    )
}