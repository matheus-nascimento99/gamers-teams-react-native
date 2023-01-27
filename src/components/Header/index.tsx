import { Container, Logo, BackButton, BackIcon } from "./style";
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?:boolean
}

export const Header = ({ showBackButton = false }:Props) => {
    return (
        <Container>

            {showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            
            <Logo source={logoImg} />
        </Container>
    );
}