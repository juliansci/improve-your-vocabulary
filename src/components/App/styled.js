import styled from 'styled-components';

export const AppLayout = styled.div`
    display: grid;
    grid-template-rows: 250px 1fr 50px;
    width: 100%;
    height: 100%;
`;

export const HeaderLayout = styled.div`
   grid-row: 1 / 2;
`;

export const ContentLayout = styled.div`
`;

export const FooterLayout = styled.div`
   grid-template-rows: 1fr;
`;
