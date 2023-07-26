import React from "react";
import css from "styled-jsx/css";

const btnStyle = {
  "btn-blue": `
    background: linear-gradient(
        102deg,
        rgb(0, 196, 255) 0%,
        rgb(0, 153, 255) 100%
      );
      color: #fff;
      box-shadow: rgba(9, 172, 255, 0.518) 0.3981px 0.3981px 0.56299px -0.9375px,
        rgba(9, 172, 255, 0.49) 1.20725px 1.20725px 1.70731px -1.875px,
        rgba(9, 172, 255, 0.42) 3.19133px 3.19133px 4.51322px -2.8125px,
        rgba(9, 172, 255, 0.176) 10px 10px 14.1421px -3.75px;
    `,
};

export default function ButtonTest({ children, type, href, style }) {
  const { className, styles } = css.resolve`
    ${btnStyle[type ? `btn-${type}` : "btn"]}
  `;
  return (
    <>
      <button className={`mangkodir-btn ${className}`} {...{ href, style }}>
        {children}
      </button>
      <style jsx>
        {`
          .mangkodir-btn {
            height: 100%;
            opacity: 1;
            padding: 14px 16px;
            border: 0;
            border-radius: 12px;
            cursor: pointer;
          }
        `}
      </style>
      {styles}
    </>
  );
}
