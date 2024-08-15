import styled from "styled-components";

export const SharedLayoutStyled = styled.div`
  max-width: 1280px;
`;

export const PostCon = styled.div`
  padding-bottom: 20px;
`;

export const ImgPostCon = styled.div`
  height: 200px;

  margin-bottom: 36px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentCon = styled.div`
  & > div:first-child {
    padding-left: 32px;
    padding-right: 32px;
  }

  & h3,
  & h4 {
    font-family: "ManRopeBold";
    color: ${({ theme }) => theme.color.title};
  }

  & p {
    color: ${({ theme }) => theme.color.text};

    font-family: "ManRopeMed";
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 0.12px;
  }

  & > div:first-child {
    margin-bottom: 32px;
  }
`;

export const PostTitle = styled.h3`
  margin-bottom: 12px;

  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;
`;

export const AuthorCon = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const AuthorImg = styled.div`
  display: inline-block;
  margin-right: 16px;
`;

export const AuthorTitle = styled.h4`
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const ShareCommonCon = styled.div`
display: flex;
flex-direction: row;

  background-color: ${({ theme }) => theme.color.title};
`;


export const ShareTitle = styled.h5`
color: ${({theme})=> theme.color.layout}
`

export const IconsList = styled.ul`
display: flex;
flex-direction: row;
`