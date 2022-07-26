import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import { logout } from '../redux/userSlice';

const Navbar = ()=>{
    let navigate = useNavigate();
    const status = useSelector(state=>state.user.isLogged);
    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/home' , {replace:true})
    }

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" >
            <div className="container-fluid">
                <p  className="navbar-brand" to="/">Dashboard</p>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {status && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/main">Users</NavLink>
                    </li>
    
                    )}
                    {status && (
                    <li className="nav-item">
                        <NavLink className="nav-link" onClick={handleLogout} to="/home">Logout</NavLink>
                    </li>
    
                    )}
                    {!status && (
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>

                    )}
                    
                </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;