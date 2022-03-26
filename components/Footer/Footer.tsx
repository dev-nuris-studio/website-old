import * as Styled from './styles';

const FooterComponent = ({ footerNavigation }: any) => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Container>
            <Styled.Copyright>©nuris studio 2022</Styled.Copyright>
            <Styled.Navigation>
                {footerNavigation?.map((item: any) => {
                    return (
                        <Styled.NavigationItem key={item.slug} href={item.slug}>
                            <Styled.NavigationValue>{item.title}</Styled.NavigationValue>
                        </Styled.NavigationItem>
                    );
                })}
            </Styled.Navigation>
        </Styled.Container>
    );
};

export default FooterComponent;
