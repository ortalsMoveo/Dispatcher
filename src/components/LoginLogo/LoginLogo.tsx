import { LogoContainer, Logo  } from './Style';

interface Logo {
    logoPath: string;
}

const LogoLogin = ({logoPath}: Logo) => {
    return(
        <LogoContainer>
            <Logo src={logoPath}/>
        </LogoContainer>
    );
}

export default LogoLogin;