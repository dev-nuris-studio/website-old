import { GridProps } from './types';

import * as Styled from './styles';

export default function Grid({ children, cols, centered, className }: GridProps) {
    return (
        <Styled.GridWrapper className={className} centered={centered} cols={cols}>
            {children}
        </Styled.GridWrapper>
    );
}

Grid.defaultProps = {
    cols: {
        default: 1,
        md: 2,
        lg: 3,
        xl: 4,
    },
};
