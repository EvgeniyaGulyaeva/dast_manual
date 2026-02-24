import React from 'react';
import Img from '@theme-original/MDXComponents/Img';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ZoomableImg(props) {
  return (
    <Zoom>
      <Img {...props} style={{ cursor: 'zoom-in' }} />
    </Zoom>
  );
}
