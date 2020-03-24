import React from 'react'
import ContentFrame from '../../../molecules/ContentFrame';
import Banner from '../../../organisms/Contents/Banner';
import theme from '../../../../theme';
import styled from '@emotion/styled';

const HomeBannerTemplate = styled.div`
  margin-bottom: ${theme.space * 1}px;
`;

const HomeBanner = ({text}) => {
    return (
        <ContentFrame text={text} css={HomeBannerTemplate}>
            <Banner />
        </ContentFrame>
    )
}

export default HomeBanner