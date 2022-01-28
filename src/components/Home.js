/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryContainer, HomeContainer, LinkCategory, SecondCategoryContainer } from '../styles/HomeStyle';

const Home = () => {
    

  return <HomeContainer>
            <h2>Practica tus conocimientos en la categoría que prefieras.</h2>
            <CategoryContainer>
                <LinkCategory>
                    <Link to={`/questions/1`}>
                        <img src="https://i.ibb.co/nbcyNj8/858d76ab80d4c2e910dd760c6c1ea568.png" alt='category-image'></img>
                        <p>HTML</p>
                    </Link>
                </LinkCategory>
                <SecondCategoryContainer>
                    <LinkCategory>
                        <Link to="/questions/2">
                            <img src="https://i.ibb.co/G5wfzh9/44bbd42c1fecdbdd48807a443390db7f.png" alt='category-image'></img>
                            <p>HTML</p>
                        </Link>
                    </LinkCategory>
                    <LinkCategory>
                        <Link to="/questions/3">
                            <img src="https://i.ibb.co/Vg0T5sL/c01d173bdfeaaec75ba7eb9daa9af87b.png" alt='category-image'></img>
                            <p>HTML</p>
                        </Link>                        
                    </LinkCategory>
                </SecondCategoryContainer>
            </CategoryContainer>
        </HomeContainer>;
};

export default Home;
  