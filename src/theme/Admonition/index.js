import React from 'react';
import OriginalAdmonition from '@theme-original/Admonition';

const TITLE_MAP = {
  info: 'Примечание',
  note: 'Примечание',
  tip: 'Совет',
  warning: 'Обратите внимание',
  danger: 'Опасно',
};

export default function Admonition(props) {
  const { type, title } = props;

  return (
    <OriginalAdmonition
      {...props}
      title={title ?? TITLE_MAP[type] ?? title}
    />
  );
}