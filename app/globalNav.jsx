"use client"
import { Button } from '@nextui-org/react';
import { ModeToggle } from './toggle-theme-switcher';
import {
  Home ,
  User ,
  Settings ,
  Mail ,
  Search ,
  Info ,
} from "lucide-react";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { id: 1, name: 'Home', icon: <Home /> ,path:"/home" },
  { id: 2, name: 'Profile', icon: <User /> ,path:"/issues"},
  { id: 3, name: 'Settings', icon: <Settings /> ,path:"/pullRequests"},
  { id: 4, name: 'Messages', icon: <Info /> ,path:"/search"},
  { id: 5, name: 'Search', icon: <Search /> ,path:"/inbox"},

];


const Nav = () => {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <nav className="flex gap-6 ">
      {links.map((link, index) => {
        return (
          <Button
          key={index} size="sm" className="border-2 rounded-md font-medium transition-all size-9  p-2 text-foreground ">
            <Link
              href={link.path}
              
              className={`${
                link.path === pathName
                  ? ' '
                  : ''
              }`}
            >

            {link.icon}
          </Link>
          </Button>
        )
      })}
 <ModeToggle/>
    </nav>
  )
}

export default Nav