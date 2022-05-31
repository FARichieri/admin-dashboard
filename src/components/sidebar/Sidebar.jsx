import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import ArticleIcon from '@mui/icons-material/Article';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:'none'}}>
                <span className="logo">richiadmin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <Link to="/users" style={{textDecoration:'none'}}>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonIcon className='icon' />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration:'none'}}>
                    <li>
                        <StoreIcon className='icon' />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <ArticleIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({ type:'LIGHT' })}></div>
            <div className="colorOption" onClick={() => dispatch({ type:'DARK' })}></div>
        </div>
    </div>
  )
}

export default Sidebar