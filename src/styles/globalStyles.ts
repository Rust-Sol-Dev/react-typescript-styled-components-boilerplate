import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }
  overflow-x: hidden;
`;

export default GlobalStyle;


/** Page Container */
interface ContainerType {
  maxWidth?: string;
  marginTop?: string;
  bgColor?: string;
  smBgColor?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  smPaddingTop?: string;
  smPaddingBottom?: string;
  smPaddingLeft?: string;
  smPaddingRight?: string;
  borderRadius?: string;
  marginBottom?: string;
  smTop?: string;
  smMarginTop?: string;
  smMarginBottom?: string;
}

export const Container = styled.div<ContainerType>`
  margin: auto;
  /* max-width: ${(props) => props.maxWidth || '1516px'}; // Corrected '1141x' to '1141px' */
  margin-top: ${(props) => props.marginTop || '0px'};
  padding-left: ${(props) => props.paddingLeft || '0px'};
  padding-right: ${(props) => props.paddingRight || '0px'};
  padding-top: ${(props) => props.paddingTop || '0px'};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
  border-radius: ${(props) => props.borderRadius};
  margin-bottom: ${(props) => props.marginBottom};
  position: relative;
  background-color: ${(props) => props.bgColor && props.bgColor};
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-top: ${(props) => props.smPaddingTop || '32px'};
    padding-bottom: ${(props) => props.smPaddingBottom || '50px'};
    padding-left: ${(props) => props.smPaddingLeft};
    padding-right: ${(props) => props.smPaddingRight};
    top: ${(props) => props.smTop};
    margin-top: ${(props) => props.smMarginTop};
    margin-bottom: ${(props) => props.smMarginBottom};
    background-color: ${(props) => props.smBgColor && props.smBgColor};
  }
`

interface IPageWrapper {
  colorMode?: string;
}

export const PageWrapper = styled.div<IPageWrapper>`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  /* padding-bottom: 599px; */
  display: block !important;

  /* @media screen and (max-width: 1280px) {
    padding-bottom: 1061px;
  }
  @media screen and (max-width: 600px) {
    padding-bottom: 617px;
  } */
`