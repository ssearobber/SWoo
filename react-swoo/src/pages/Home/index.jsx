import React, { useContext } from 'react';
import WithAuth, { AuthContext } from '../../hoc/WithAuth';
import HomeMainSlider from '../../components/templates/HomeMainSlider';
import { css } from '@emotion/core';
import theme from '../../theme';
import ContentFrame from '../../components/molecules/ContentFrame';
import HomeIntro from '../../components/templates/HomeContents/HomeIntro';
import HomeSlider from '../../components/templates/HomeContents/HomeSlider';
import HomeNews from '../../components/templates/HomeContents/HomeNews';
import HomeBanner from '../../components/templates/HomeContents/HomeBanner';
import Slider from '../../components/organisms/Contents/Slider';
import News from '../../components/organisms/Contents/News';
import Banner from '../../components/organisms/Contents/Banner';

const Home = () => {
  // eslint-disable-next-line
  const auth = useContext(AuthContext);
  return (
    // <>은 무슨 의미?
    <>
      {/* <HomeNavSlider css={marginBottom(1)} /> */}
      <HomeMainSlider />
      <HomeIntro text="Intro"/>
      <HomeSlider text="Slider"/>
      <HomeNews text="News"/>
      <HomeBanner text="Banner"/>
      {/* <ContentFrame text="Slider" css={marginBottom(8)}>
        <HomeSlider />
      </ContentFrame> */}

      {/* <ContentFrame text="News" css={marginBottom(8)}>
        <HomeNews />
      </ContentFrame> */}

      {/* <ContentFrame text="Banner" css={marginBottom(8)}>
        <Banner />
      </ContentFrame> */}
    </>
  );
};
// num = 1 가 무슨의미?
const marginBottom = (num = 1) => css`
  margin-bottom: ${theme.space * num}px;
`;

export default WithAuth(Home);
