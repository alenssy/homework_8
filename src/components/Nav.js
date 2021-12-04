import {NavLink} from "react-router-dom";
import {Menu} from "antd"

const Nav = () => {
    const navLinks = ['Home', 'Popular', 'Battle'];

    return (
        <Menu theme="dark" mode="horizontal">
            {navLinks.map((navLink, index) => (
                    <Menu.Item key={index}>
                        <NavLink exact to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>{navLink}</NavLink>
                    </Menu.Item>
                )
            )}
        </Menu>
    )
}

export default Nav;
