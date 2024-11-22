"use client"
import { Button } from '@nextui-org/react';

import { useTheme } from "next-themes"
import {
  Home ,
  User ,
  Settings ,
  Mail ,
  Search ,
  Info ,
  Moon,
} from "lucide-react";

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Nav = () => {
  const {setTheme } = useTheme();
const theme={theme:"dark"};
function HandelTheming({ theme }: { theme: string }) {
  if (theme === "light") {
    return "dark"
  }
  else {
    return "light"
  }
}


  const pathName = usePathname();
  const links = [
    { id: 1, name: 'Home', icon: <Home /> ,path:"/home" },
    { id: 2, name: 'Profile', icon: <User /> ,path:"/problems"},
    { id: 3, name: 'Settings', icon: <Settings /> ,path:"/pullRequests"},
    { id: 4, name: 'Messages', icon: <Info /> ,path:"/search"},
    { id: 5, name: 'Search', icon: <Search /> ,path:"/"},
    { id: 5, name: 'Search', icon: <Moon onClick={()=>setTheme(HandelTheming(theme))}/> ,path:""}
  
  
  ];

  return (
    <nav className="flex gap-6 ">
      {links.map((link, index) => {
        return (
          <Button
          key={index} size="sm" className={`${link.path === pathName? 'border-b border-primary'  : '  font-medium transition-all size-9  p-2 text-foreground '}`}>
            <Link
              href={link.path}
              
              
            >

            {link.icon}
          </Link>
          </Button>
        )
      })}
    </nav>
  )
}

export default Nav