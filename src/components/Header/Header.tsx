import { useEffect } from 'react'
import '../../App.css'
import { download_icon } from '../../assets/Icons'
import { Link } from 'react-router-dom';

export default function Header() {

    useEffect(() => {
        //window.location.pathname === '/contato' ? scrollTo 
    }, []);

    return (
        <>
            <div className="header">
                <span className="menuDesktop">
                    <div className='menu_header_logo'>
                        <h2>pon<b>t</b>o s<b>i</b>ngular</h2>
                    </div>
                    <div className="menu">
                        <div>
                            <ul>
                                <li>
                                <Link className={window.location.pathname === '/' ? 'a_focus' : ''} to='/'>Home</Link>
                                </li>
                                <li>
                                <Link className={window.location.pathname === '/projetos' ? 'a_focus' : ''} to='/projeto'>Projetos</Link>
                                </li>
                                <li>
                                <Link className={window.location.pathname === '/blog' ? 'a_focus' : ''} to='/blog'>BLOG</Link>
                                </li>
                                <li >
                                <Link className={window.location.pathname === '/contato' ? 'a_focus' : ''} to='/contato'>Contato</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="button_cv">
                                Baixar CV
                                <img src={download_icon} alt="" style={{ marginLeft: 12 }}/>
                            </button>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}