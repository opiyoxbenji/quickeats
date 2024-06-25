import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
		<div>
			<Navlink to='/home'>Home</Navlink>
			<Navlink to='/menu'>Menu</Navlink>
			<Navlink to='/offers'>Offers</Navlink>
			<Navlink to='/contact'>Contact</Navlink>
			<Navlink to='/careers'>Careers</Navlink>
		</div>
  );
}

export default Nav