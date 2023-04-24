import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "./Footer.scss";
import { ThemeProvider } from "@emotion/react";
import { DateTime } from "luxon";

export default function Footer(props) {
  const [yearNow, setYearNow] = useState(DateTime.now());

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
                <span className="footer__box-text">{yearNow.c.year}</span>
                &nbsp;Created by Tomasz Słupik
              </div>
            </div>
          </Paper>
        </ThemeProvider>
      </div>
    </footer>
  );
}
