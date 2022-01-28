import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 360px;
    height: 69px;
    overflow: hidden;
    background-color: #232E35;
`

export const Lista = styled.ul`
    list-style: none;
    display: flex;
    text-align: center;
    color: white;
`

export const ItemFooter = styled.ul`
    font-size: 14px;
    margin-top: 10px;
    margin-right: 5px;
    margin-left: 5px;

    &:hover{
    color: green;
}
`

export const Svg = styled.svg`
    &:hover{
        fill: green;
    }
`