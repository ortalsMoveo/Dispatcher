import { LogoContainer, Logo  } from './Style';

export type Logo = {
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