import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Contentful API</h1>
        <br />
        <h2>Galleri</h2>
      </TitleWrapper>
      <Gallery>
        <Slider {...settings}>
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </Slider>
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
  .slick-slide div {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: 10px;
  }
`;
