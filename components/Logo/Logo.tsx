import * as Styled from './styles';
import Link from 'next/link';

const Logo = ({ className }: any) => {
    return (
        <Link href='/'>
            <Styled.Container className={className}>nuris studio</Styled.Container>
        </Link>
    );
};

export default Logo;
