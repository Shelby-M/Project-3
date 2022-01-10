import React, {useState} from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function Navbar() {
    const pathname = window.location.pathname;

    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);
  
    const handleItemClick = (e, { name }) => setActiveItem(name);
    
    return (
    <><Menu pointing secondary size="massive" inverted >
        <Container>
          <Menu.Item header>
            <Image size='mini' src='https://toppng.com/uploads/preview/moon-phase-eclipse-cycle-astronomy-space-115699006229kgwl6dmcq.jpg'  style={{ marginRight: '1.5em' }} />
            Divine Talk </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/" />

          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={activeItem === 'login'}
              onClick={handleItemClick}
              as={Link}
              to="/login" />
            <Menu.Item
              name="signup"
              active={activeItem === 'signup'}
              onClick={handleItemClick}
              as={Link}
              to="/signup" />
          </Menu.Menu>
        </Container>
      </Menu>
      </>
      
    )}
  


export default Navbar;