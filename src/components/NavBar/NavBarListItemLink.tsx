import Link from "next/link"
import { NavBarListItem } from "./NavBarListItem"
import { NavBarListItemLinkProps } from "./types"
import { cn } from "@/helpers/cn"

export const NavBarListItemLink = ({href, children, className, ...props}: NavBarListItemLinkProps) =>{
    return(
      <NavBarListItem className={cn("p-0", className)}>
        <Link href={href} className="flex gap-2 items-center p-2 w-full rounded-lg " {...props}>
        {children}
        </Link>
      </NavBarListItem>
    )
  }