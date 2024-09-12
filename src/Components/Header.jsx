

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg my-nav" >
            <h1 className="navbar-brand my-nav-head">NASA-APP</h1>
            <button className="navbar-toggler my-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-content">
                <span className="navbar-toggler-icon my-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapse-content">
                <ul className="navbar-nav">
                    <li className="nav-item my-nav-item">
                        <a href="#" className='nav-link'>Home</a>
                    </li>
                    <li className="nav-item my-nav-item">
                       <a href="#"className='nav-link'>Contacts</a>
                    </li>
                    <li className="nav-item my-nav-item" data-bs-toggle="dropdown" data-bs-target="#dropdown-content">
                        <a href="#" className="nav-link dropdown-toggle">About Us</a>
                    </li>
                    <ul className="dropdown-menu" id="dropdown-content">
                        <li className="dropdown-item "><a href="#" className="my-dd-item">Location</a></li>
                        <li className="dropdown-item "><a href="#" className="my-dd-item">Services</a></li>
                        <li className="dropdown-item "><a href="#" className="my-dd-item">Others..</a></li>
                    </ul>
                    
                </ul>
            </div>
            
        </nav>
    )
}