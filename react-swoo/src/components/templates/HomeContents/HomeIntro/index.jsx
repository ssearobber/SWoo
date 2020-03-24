import React from 'react'
import ContentFrame from '../../../molecules/ContentFrame';
import Intro from '../../../organisms/Contents/Intro';
import theme from '../../../../theme';
import styled from '@emotion/styled';

const HomeIntroTemplate = styled.div`
  margin-bottom: ${theme.space * 1}px;
`;

const HomeIntro = ({text}) => {
    return (
        <ContentFrame text={text} css={HomeIntroTemplate}>
            <Intro />
        </ContentFrame>
    )
}

export default HomeIntro
