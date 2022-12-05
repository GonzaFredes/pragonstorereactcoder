import styled from "styled-components";

export const ContainerFather = styled.div`
    position: relative;
    top: 12rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 92%;
    margin: auto;
    padding-top: 70px;

    @media (min-width: 768px) {
        padding-top: 20px;
        height: 100%;
    }
`

export const MyUser = styled.p`
    font-family: 'inter', sans-serif;
    font-weight: 600;
    margin-bottom: 10px;
    border-bottom: 1px solid #faf0f0;
    padding: 10px;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const MyUser2 = styled.div`
    font-family: 'inter', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 1px solid #faf0f0;
    padding: 20px;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`