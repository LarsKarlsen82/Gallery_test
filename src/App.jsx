
import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import AuthorCard from "./AuthorCard";

const App = () => {
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAuthors();
      if (response) {
        setAuthors(response);
      }
    };
    fetchData();
  }, [getAuthors]);

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Contentful API</h1>
        <p>Galleri</p>
      </TitleWrapper>
      <Gallery>
        {authors.map((author, index) => (
          <AuthorCard key={index} author={author} />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;
