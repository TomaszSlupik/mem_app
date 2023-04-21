import React, { useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import "./Footer.scss";
import { ThemeProvider } from "@emotion/react";
import themeColor from "../../theme/themeColor";
import { current } from "@reduxjs/toolkit";

export default function Footer(props) {
  const yearNow = () => {
    let year = footerYear.current;
    year.innerText = new Date().getFullYear();
  };

  const footerYear = useRef(null);

  useEffect(() => {
    yearNow();
  }, []);

  return (
    <footer>
      <div className="footer">
        <ThemeProvider theme={props.changeColorLayout}>
          <Paper
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              backgroundColor: props.changeColorLayout.palette.primary.main,
            }}
            elevation={3}
          >
            <div className="footer__box">
              <div className="footer__box-text">
                &copy;
                <span className="footer__box-text" ref={footerYear}></span>
                &nbsp;Created by Tomasz Słupik
              </div>
            </div>
          </Paper>
        </ThemeProvider>
      </div>
    </footer>
  );
}
