import React from 'react';
import Swiper from 'react-id-swiper';
import uuid from 'uuid/v4';
import { css } from '@emotion/core';
import mediaQuery from '../../../theme/mediaQuery';

const DUMMY_DATA = [
  {
    id: uuid(),
    imgSrc:
      'https://images.unsplash.com/photo-1582787264476-ceb5898497c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imgAlt: 'sample image',
  },
  {
    id: uuid(),
    imgSrc:
      'https://images.unsplash.com/photo-1528150230181-99bbf7b22162?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    imgAlt: 'sample image',
  },
  {
    id: uuid(),
    imgSrc:
      'https://images.unsplash.com/photo-1557231146-afde25e6598f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    imgAlt: 'sample image',
  },
];

const MainSlider = () => {
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  return (
      <Swiper {...params}>
        {DUMMY_DATA.map((data) => (
          <div
            key={data.id}
            css={css`
              width: 100vw;
              height: 400px;
              ${mediaQuery(2)} {
                height: 600px;
              }
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
              src={data.imgSrc}
              alt={data.imgAlt}
            />
          </div>
        ))}
      </Swiper>
  );
};

export default MainSlider;
