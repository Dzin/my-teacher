import { Container, Logo } from './styles';

const Header = () => {
    return (
        <Container>
            <div>
                <Logo src="/images/myteacher.png" />
            </div>

            <p>Encontre o professor perfeito!</p>
        </Container>
    )
}

export default Header