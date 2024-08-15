import styled from "styled-components";

export const SharedLayoutStyled = styled.div`
  max-width: 1280px;

  @media (min-width: 1280px) {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PostCon = styled.div`
  max-width: 730px;
  max-height: 280px;

  padding-bottom: 20px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;

    padding-bottom: 0;

    box-shadow: 4px 10px 21px 0px rgba(194, 167, 194, 1);

    border-radius: 10px;
  }
`;

export const ImgPostCon = styled.div`
  height: 200px;

  margin-bottom: 36px;

  overflow: hidden;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1280px) {
    min-width: 40%;
    height: 280px;

    margin: 0;

  }
`;

export const ContentCon = styled.div`
  & > div:first-child {
    padding-left: 32px;
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

    @media (min-width: 1280px) {
      margin-bottom: 20px;

     padding-right: 40px;
        padding-left: 0;
      
    }
  }

  @media (min-width: 1280px) {
    position: relative;

    padding-top: 25px;
    padding-left: 40px;
  }
`;

export const PostTitle = styled.h3`
  margin-bottom: 12px;

  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.2px;

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.25px;
  }
`;

export const AuthorCon = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 16px;
  padding-right: 32px;
  padding-bottom: 16px;
  padding-left: 32px;

  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (min-width: 1280px) {
    padding-top: 0;
    padding-bottom: 40px;
    padding-left: 0px;
  }

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
  justify-content: space-between;
  align-items: center;

  padding-top: 16px;
  padding-right: 32px;
  padding-bottom: 16px;
  padding-left: 32px;

  background-color: ${({ theme }) => theme.color.title};

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  box-shadow: 4px 10px 21px 0px rgba(194, 167, 194, 1);

  @media (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: 0;

    transform: translateY(-107px) translateX(68px);

    padding-top: 18px;
    padding-right: 32px;
    padding-bottom: calc(29px-12px);
    padding-left: 41px;

    border-radius: 10px;
    box-shadow: none;
  }
`;

export const ShareTitle = styled.h5`
  text-transform: uppercase;

  font-family: "ManRopeMed";
  letter-spacing: 5px;
  line-height: 1.5;
  font-size: 13px;

  color: ${({ theme }) => theme.color.layout};

  @media (min-width: 1280px) {
    margin-right: 21px;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & > li:not(:last-child) {
    margin-right: 16px;
  }
`;
