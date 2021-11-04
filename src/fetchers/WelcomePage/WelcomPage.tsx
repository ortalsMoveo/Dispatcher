import { Container, PageContent,Title, TextPage, SeparateLine, ButtonPosition } from './style';
import LogoLogin from '../../components/LoginLogo/LoginLogo';
import Button from '../../components/Button/Button';
// import { Redirect } from 'react-router';
import React,{ useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const WelcomePage = () => {
    const { loginWithRedirect } = useAuth0();
   
    return(
        <Container>
            <LogoLogin />
            <PageContent>
                <Title>Welcome to Dispatcher</Title>
                <TextPage>Locate articles and breaking news headlines from news sources and blogs across the web
                </TextPage>
                <ButtonPosition>
                    <SeparateLine></SeparateLine>
                    <Button 
                        buttonType="primary" 
                        buttonText="continue"
                        icon={true}
                        fullWidth={true}
                        onClick={() => loginWithRedirect({
                            redirectUri: 'http://localhost:3000/home' 
                        })}
                    /> 
                </ButtonPosition>
            </PageContent>
        </Container>

    );
}

export default WelcomePage;