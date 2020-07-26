import styled from 'styled-components';

export const HeaderContainer = styled.div`
   height: 100%;
   width: 100%;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

export const HeaderTitle = styled.div`
   font-size: 46px;
   text-align: center;
   @media (max-width: 768px) {
      font-size: 32px;
      padding: 12px 40px;
   }
`


export const HeaderDescription = styled.div`
   font-size: 24px;
   text-align: center;
   @media (max-width: 768px) {
      font-size: 22px;
      padding: 12px 40px;
   }
`