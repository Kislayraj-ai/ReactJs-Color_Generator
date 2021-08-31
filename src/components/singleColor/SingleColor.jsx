import React, { useState, useEffect } from 'react';
import classes from './SingleColor.module.css';

const SingleColor = (props) => {
  const { rgb, weight, hex } = props.colors;
  const { Index } = props;

  const [copy, setCopy] = useState();

  useEffect(() => {
    const copyTImeout = setTimeout(() => {
      setCopy(false);
    }, 1000);

    return () => clearTimeout(copyTImeout);
  }, [copy]);

  const colorLight = Index > 9 && classes.colorlight;

  const hexValues = `#${hex}`;
  const ClipBoardHandler = () => {
    navigator.clipboard.writeText(hexValues);
    setCopy(true);
  };
  return (
    <article
      className={`${classes.colorContainer} ${colorLight}`}
      style={{ backgroundColor: `rgb(${rgb})` }}
      onClick={ClipBoardHandler}
    >
      <p className={`${classes['percent-value']} `}>{weight}%</p>
      <p className={`${classes['color-value']} `}>{hexValues}</p>
      {copy && <p className={`${classes.clipBoard} `}>copied to clipboard </p>}
    </article>
  );
};

export default SingleColor;
