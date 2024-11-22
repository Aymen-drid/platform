
import Nav from "./globalNav";
import Menu from './Sheet';
function Header() {
    return (
        <header className='bg-primary-foreground flex flex-row gap-2 py-3 px-2   pb-8'>
            <div>
                <Menu side="left" />
            </div>
            <div className=" ml-auto flex justify-end ">
                <Nav />
            </div>
            <div className='pl-3'>
                <Menu side="right" />
            </div>
        </header>

    );
}

export default Header;