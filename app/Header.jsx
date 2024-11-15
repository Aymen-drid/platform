import Head from 'next/head'
import Nav from "./globalNav";
import Menu from './Sheet';
function Header() {
    return ( 
        <div id='header' className=' flex flex-row gap-2 py-3 px-2   pb-8'>
            <div>
<Menu side="left" />
            </div>
            <div className=" ml-auto flex justify-end ">
                <Nav/>
            </div>
            <div>
            <Menu side="right" />
            </div>
        </div>

     );
}

export default Header;