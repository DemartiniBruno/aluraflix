import React from 'react';
import './Menu.css'
import Logo from '../../assets/img/Logo.png';
import ButtonLink from './components/ButtonLink'
import { Link } from 'react-router-dom'
// import { Button } from 'style-components';
import Button from '../Button/'

const Menu = () => {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Logo do site'></img>
            </Link>
            <Link to='/cadastro/video'>
                <ButtonLink as={Link} className='ButtonLink' href='/cadastro/video'>Novo Video</ButtonLink>
            </Link>
            {/* <Button>Novo Video</Button> */}
            {/* <Button as='a' href='/'>Novo Video</Button> */}
            {/* <Button as={Link} className='ButtonLInk' href='/cadastro/video'/>  */}
        </nav>
    )
}

export default Menu