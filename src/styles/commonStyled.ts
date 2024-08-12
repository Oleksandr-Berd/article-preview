import styled from "styled-components";

export const SharedLayoutStyled = styled.div`
max-width: 1280px;

`

export const ImgPostCon = styled.div`
& >img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    margin-bottom: 36px;
}
`

export const ContentCon = styled.div`
& h3, & h4 {
    font-family: "ManRopeBold";
    color: ${({theme}) => theme.color.title}
    
}

& p{
font-family: "ManRopeMed";
}
`