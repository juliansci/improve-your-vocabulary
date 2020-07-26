import styled from 'styled-components';

export const FooterContainer = styled.div`
   height: 100%;
   width: 100%;
   background-color: #0C090A;
   color: white;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
export const FooterLinkGithub = styled.a`
   font-size: 14px;
   margin-left: 25px;
   cursor: pointer;
   color: white;
   text-decoration: none;
   @media (max-width: 768px) {
      margin-top: 19px;
      margin-right: 3px;
   }
`
export const FooterPersonalInfo = styled.div`
   display: flex;
`
export const FooterText = styled.div`
   font-size: 14px;
   margin-right: 20px;
   font-weight: 700;
`
export const FooterSocial = styled.div`
   font-size: 14px;
   margin-right: 20px;
   color: white;
`

export const NameItem = styled.a`
   color: white;
   text-decoration: none;
`

export const SocialItem = styled.a`
   color: white;
   margin-right: 15px;
   font-size: 18px;
   cursor: pointer;
`