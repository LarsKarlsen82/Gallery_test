import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container mx-auto flex flex-wrap justify-between items-center h-full">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Lars Karlsen</h3>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Sociale medier</h3>
          <SocialMediaLinks>
            <a
              href="https://www.facebook.com/lars.karlsen.144/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/lars-karlsen-5540971a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            {/* <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl" />
            </a> */}
          </SocialMediaLinks>
        </div>
      </div>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Lars Karlsen. All Rights Reserved.</p>
      </Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #2d3748;
  color: #fff;
  padding-left: 3.4rem;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const SocialMediaLinks = styled.div`
  display: flex;

  a {
    margin-right: 1rem;
    color: #fff;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: #ccc;
  flex-shrink: 0;
`;

export default Footer;
