import styled from 'styled-components';
// import { LazyLoadImage } from "react-lazy-load-image-component";
interface CustomImageStyleType {
  width?: string;
  height?: string;
  image?: string;
  smWidth?: string;
  smHeight?: string;
  onClick?: any;
  cursor?: string;
  borderRadius?: string;
  position?: string;
  marginTop?: string;
  marginLeft?: string;
  smMarginLeft?: string;
  marginRight?: string;
  smMarginRight?: string;
  border?: string;
  smMarginTop?: string;
  alt?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: any;
  smBorderRadius?: string;
  hoverScale?: string;
  srcset?: string;
  top?: string;
  right?: string;
}



const CustomImageStyle = styled.img <CustomImageStyleType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  border: 4px;
  cursor: ${(props) => props.cursor};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  border: ${(props) => props.border};


  
  &:hover{
    transform: ${(props) => props.hoverScale};; 
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.smWidth};
    height: ${(props) => props.smHeight};
    margin-top: ${(props) => props.smMarginTop};
    border-radius: ${(props) => props.smBorderRadius};
    margin-left: ${(props) => props.smMarginLeft};
    margin-right: ${(props) => props.smMarginRight};
  }
`
const placeholderImage = ``
const CustomImage = (
  {
    width,
    height,
    image,
    smWidth,
    smHeight,
    onClick,
    cursor,
    borderRadius,
    position,
    marginTop,
    border,
    smMarginTop,
    alt,
    onMouseEnter,
    onMouseLeave,
    smBorderRadius,
    style,
    marginLeft,
    smMarginLeft,
    marginRight,
    smMarginRight,
    hoverScale,
    srcset,
    top,
    right
  }: CustomImageStyleType
) => {
  const onImageError = (e: any) => {
    e.target.src = placeholderImage
  }

  return (
    <CustomImageStyle
      width={width}
      height={height}
      src={image ? image: placeholderImage}
      smHeight={smHeight}
      smWidth={smWidth}
      onClick={onClick}
      cursor={cursor}
      borderRadius={borderRadius}
      position={position}
      marginTop={marginTop}
      border={border}
      smMarginTop={smMarginTop}
      alt={alt}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      smBorderRadius={smBorderRadius}
      style={style}
      marginLeft={marginLeft}
      smMarginLeft={smMarginLeft}
      marginRight={marginRight}
      smMarginRight={smMarginRight}
      loading = "lazy"
      onError = {onImageError}
      hoverScale = {hoverScale}
      srcset = {srcset}
      top = {top}
      right = {right}
    />
  )
}

export default CustomImage