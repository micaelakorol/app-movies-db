import "../../styles/nav.css";
import Link from "./Elements/Link";
import SwitchButton from "./Elements/SwitchButton";
const Nav = ({ theme, setTheme }) => {
  return (
    <header>
      <nav>
        <Link />
        <SwitchButton theme={theme} setTheme={setTheme}/>
      </nav>
    </header>
  );
};

export default Nav;
