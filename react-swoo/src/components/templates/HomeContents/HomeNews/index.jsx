import React from 'react'
import ContentFrame from '../../../molecules/ContentFrame';
import News from '../../../organisms/Contents/News';
import theme from '../../../../theme';
import styled from '@emotion/styled';

const HomeNewsTemplate = styled.div`
  margin-bottom: ${theme.space * 1}px;
`;

const HomeNews = ({text}) => {
    return (
        <ContentFrame text={text} css={HomeNewsTemplate}>
            <News />
        </ContentFrame>
    )
}

export default HomeNews