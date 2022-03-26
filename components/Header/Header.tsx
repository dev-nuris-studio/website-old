import * as Styled from './styles';

const Header = ({ className }: any) => {
    return (
        <>
            <Styled.Container className={className}>
                <Styled.Inner>
                    <div />
                    <Styled.Logo />
                    <Styled.MainContainer>sd</Styled.MainContainer>
                </Styled.Inner>
            </Styled.Container>
        </>
    );
};

export default Header;
