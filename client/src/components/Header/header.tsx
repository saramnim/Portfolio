import { HeaderWrapper, HeaderTitle } from "./style";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <HeaderWrapper>
            <Link to={'/'} className="title">HYEJIS^_^Portfolio</Link>
        </HeaderWrapper>
    )
}

export default Header;