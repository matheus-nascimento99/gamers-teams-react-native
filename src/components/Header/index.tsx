import { Container, Logo, BackButton, BackIcon } from "./style";
import logoImg from '@assets/logo.png'

export const Header = () => {
    return (
        <Container>
            <BackButton>
                <BackIcon />
            </BackButton>
            <Logo source={logoImg} />
        </Container>
    );
}