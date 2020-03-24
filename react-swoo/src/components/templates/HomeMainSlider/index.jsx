import React from 'react'
import theme from '../../../theme';
import styled from '@emotion/styled';
import MainSlider from '../../organisms/MainSlider';

const HomeMainSliderTemplate = styled.div`
  margin-bottom: ${theme.space * 1}px;
`;

const HomeMainSlider = () => {
    return (
        <HomeMainSliderTemplate>
            <MainSlider />
        </HomeMainSliderTemplate>
    )
}

export default HomeMainSlider
