import styled from "styled-components";

const Gallery = styled.div``;

const Block = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

export default () => (
  <Gallery>
    <Block>
      <Image src="/static/img/gallery@2x.jpg" />
    </Block>
  </Gallery>
);
