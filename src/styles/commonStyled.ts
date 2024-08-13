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

padding-left: 32px;
padding-right: 32px;

& h3, & h4 {
    font-family: "ManRopeBold";
    color: ${({theme}) => theme.color.title}
    
}

& p{
font-family: "ManRopeMed";
}

& > div:first-child{
    margin-bottom: 32px;
}
`

export const PostTitle = styled.h3`
margin-bottom: 12px;
`