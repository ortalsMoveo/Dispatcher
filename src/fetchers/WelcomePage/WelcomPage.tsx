import { Container, PageContent,Title, TextPage, SeparateLine, ButtonPosition } from './style';
import LogoLogin from '../../components/LoginLogo/LoginLogo';
import Button from '../../components/Button/Button';

const WelcomePage = () => {
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
                    /> 
                </ButtonPosition>
            </PageContent>
        </Container>

    );
}

export default WelcomePage;