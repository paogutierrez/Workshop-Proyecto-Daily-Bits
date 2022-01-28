import styled from "styled-components";

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #16161A;
    height: 100vh;
    color: #ffff;
    padding: 0 16px;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: bold;
`
export const InfoCntainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    & a {
        color: black;
    }
    & div > span{
        vertical-align: -webkit-baseline-middle;
    }
`
export const Slider = styled.input`
`
export const HeartIcon = styled.svg`
    color: #EF4565;
    vertical-align: -webkit-baseline-middle;
    margin-right: 5px;
`
export  const QuestionSection = styled.section`
    display: flex;
    flex-direction: row;
    
    margin-top: 92px;
    & p{
        margin-left: 26px;
    }
`
export const AnserSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 16px 16px 32px;
    margin-top: 50px;
`
export const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-width: 328px;
    min-height: 56px;
    background-color: #232E35;
    border: 2px solid #FFFFFE;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 16px 0px;
    padding: 6px 0px;
    font-size: 0.8rem;
    & label{
        max-width: 80%;
    }
    & [type=radio] {
        width: 24px;
        height: 24px;
        align-self: center;
    }
`

export const BtnCheckAnswer = styled.button`
    width: 328px;
    height: 50px;
    position: fixed;
    bottom: 0;
    margin: 10px 0px;
    background: #D4CAF3;
    border-radius: 16px;
    border: none;
    color: #ffff;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    &:hover{
        background-color: #6B47DC;
    }
`