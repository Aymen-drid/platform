import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "./components/ui/sheet"
import { MenuIcon } from "lucide-react"; 
  function Menu({side}) {
    return ( 
        <Sheet>
  <SheetTrigger className="border-2 rounded-md font-medium transition-all size-9  pl-1 text-foreground "><MenuIcon ></MenuIcon></SheetTrigger>
  <SheetContent side={side}>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

     );
  }
  
  export default Menu;