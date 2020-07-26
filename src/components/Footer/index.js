import React from 'react';
import { FooterContainer, FooterLinkGithub, FooterPersonalInfo, FooterText, FooterSocial, SocialItem, NameItem } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <FooterContainer>
    <FooterLinkGithub href="https://github.com/juliansci/improve-your-vocabulary" target="_blank">
      View on Github <FontAwesomeIcon icon={faGithub} />
    </FooterLinkGithub>
    <FooterPersonalInfo>
      <FooterText>
        <NameItem href="https://julianscialabba.com" target="_blank">Julián Scialabba</NameItem>
      </FooterText>
      <FooterSocial>
        <SocialItem href="http://twitter.com/juliansci" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialItem>
        <SocialItem href="http://github.com/juliansci" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </SocialItem>
        <SocialItem href="https://www.linkedin.com/in/julianscialabba/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialItem>

      </FooterSocial>
    </FooterPersonalInfo>
  </FooterContainer>
);

export default Footer;
