import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: #16161A;
    height: 100vh;
    color: #ffff;
    font-family: 'Nunito', sans-serif;
    font-size: 0.7rem;
    padding: 16px 20px;
    & h2{
        text-align: center;
        margin-bottom: 33px;
    }
`
export const CategoryContainer = styled.div`
    margin-top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
`
export const LinkCategory = styled.div`
    width: 96px;
    height: 128px;
    margin: 24px;    
    & img {
        width: 100%;
        border-radius: 50%;
    }
    & a {
        text-decoration: none;
        color: #ffff;
        text-align:center;
        
    }

`
export const SecondCategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
`