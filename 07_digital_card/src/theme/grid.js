import styled from 'styled-components';


export const ImageContainer = styled.div`
    flex-basis: 45%;
    height: 100vh;
    background-image: url('${require('../assets/PHOTO.jpg')}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const InfoContainer = styled.div`
    flex-basis: 55%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Name = styled.div`
    font-size: 10vh;
    font-family: 'Abril Fatface';
    margin-bottom: 2vh;
`

export const Description = styled.div`
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 3vw;
    opacity: .4;
`

export const Quote = styled.div`
    blockquote{
        font-size: 36px;
        font-family: 'Abril Fatface';
        font-style: italic;
        line-height: 1.4;
        margin-bottom: .6em;
    }

    .byline {
        font-family: 'Times', serif;
        text-align: right;
        margin-right: 40px;
        font-size: 22px;	
        font-style: italic;
        opacity: .25;
    }
`

export const Container = styled.div`
    display: flex;
    height: 100vh;
`