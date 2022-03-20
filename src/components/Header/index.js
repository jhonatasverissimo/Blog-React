import logosvg from '../../svg/logo.svg';

function Header(){
    const descLogo = "Essa é a logo do Blog.";
    return(
        <>
        <header className='flex-space-beetween'>
            <div className="logo ">
                <img src={logosvg} className='logo ' alt={descLogo}/>
            </div>
            <div className="search">
                <input type="text" name="search" className='input-search'/>
                
            </div>
            
            <ul className="menu">
                <li> <a href="google.com" className='nav-link'> Category </a> </li>
                <li> <a href="google.com" className='nav-link'> About </a> </li>
                <li> <a href="google.com" className='nav-link'> Contact </a></li>
            </ul>
            
        </header>
        </>
    );
}
export default Header; 