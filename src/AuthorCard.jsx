import { useState } from "react";
import styled from "styled-components";

const AuthorCard = ({ author }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowDescription(true);
    }, 3000);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <Wrapper
      background={author.avatar.file.url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TextContainer>
        <Title>{author.name}</Title>
        <Subtitle isVisible={showDescription}>{author.description}</Subtitle>
      </TextContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 290px;
  height: 290px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: auto 150%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 86.5%;
  height: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items near the top */
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #000000;
  margin: 0px;
  margin-bottom: 20px; /* Add margin to separate from top */
`;

const Subtitle = styled.p`
  font-weight: normal;
  font-size: 18px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  display: ${(props) => (props.isVisible ? "block" : "none")};
  transition: visibility 0.3s ease-in-out, display 0.3s ease-in-out;
`;

export default AuthorCard;
