import { LogoContainer, Logo  } from './Style';
import LogoImg from '../../assets/Group 1086418.svg';

const LogoLogin = () => {
    return(
        <LogoContainer>
            <Logo src={LogoImg}/>
        </LogoContainer>
    );
}

export default LogoLogin;