import React from 'react'
import ContentFrame from '../../../molecules/ContentFrame';
import Slider from '../../../organisms/Contents/Slider';
import theme from '../../../../theme';
import styled from '@emotion/styled';

const HomeSliderTemplate = styled.div`
  margin-bottom: ${theme.space * 1}px;
`;

const HomeSlider = ({text}) => {
    return (
        <ContentFrame text={text} css={HomeSliderTemplate}>
            <Slider />
        </ContentFrame>
    )
}

export default HomeSlider