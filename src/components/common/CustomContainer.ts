import styled from "styled-components";

export const CustomContainer = styled.div<IContainer>`
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