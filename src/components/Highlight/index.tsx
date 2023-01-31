import { Container, Title, SubTitle } from './style';

type Props = {
    title: string,
    subtitle: string
}

export const Highlight = ({ title, subtitle }:Props) => {
    return (
        <Container>
            <Title>{title}</Title> 
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    );
}