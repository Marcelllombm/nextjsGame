import { cn } from "@/helpers/cn"
import { NavBarListItemProps } from "./types"

export const NavBarListItem = ({children , className,...props}: NavBarListItemProps) =>{
    return (
      <li className={cn("my-2 rounded-lg bg-transparent p-2  hover:bg-indigo-400/40 cursor-pointer hover:text-slate-100 flex gap-2 items-center",className)}
      {...props}
      >
      {children}
      </li>
    )
  }