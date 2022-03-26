import * as Styled from './styles';
import { useRef, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children, footerNavigation }: any) => {
    const ref = useRef();

    useEffect(() => {
        (window as any).WER_DAS_LESEN_KANN_IST_COOL = (ref as any).current.scrollbar;
    }, []);

    return (
        <Styled.Container>
            <Header />
            <Styled.ScrollWrapper damping={0.1} ref={ref}>
                {children}
                <Footer footerNavigation={footerNavigation} />
            </Styled.ScrollWrapper>
        </Styled.Container>
    );
};

export default Layout;
