import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/breakpoints";
import MyLink from "../../styles/Mylink";
import Navigation from "../../styles/Navigation";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import { FormattedMessage } from "react-intl";

export default function Nav(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const style = {
    burger: {
      cursor: "pointer",
      fontSize: "5rem",
      position: "fixed",
      right: "2%",
      top: "0%",
      zIndex: 30,
    },
    link: {
      textDecoration: "none",
      textAlign: "center",
      textTransform: "uppercase",
      color: props.changeColorLayout.palette.primary.main,
    },
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <Navigation>
            <ThemeProvider theme={(theme, props.changeColorLayout)}>
              <div>
                <div>
                  <div>
                    <MyLink>
                      <Link to="/mem_app" style={style.link}>
                        <FormattedMessage id="home" defaultMessage="Start" />
                      </Link>

                      <Link to="mem_app/hot" style={style.link}>
                        <FormattedMessage id="hot" defaultMessage="Gorące" />
                      </Link>
                      <Divider />
                      <Link to="mem_app/regular" style={style.link}>
                        <FormattedMessage
                          id="regular"
                          defaultMessage="Regular"
                        />
                      </Link>
                      <Divider />
                    </MyLink>
                  </div>
                </div>
              </div>
            </ThemeProvider>
          </Navigation>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="nav">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <ThemeProvider theme={props.changeColorLayout}>
            <MenuIcon
              color="primary"
              style={style.burger}
              onClick={toggleDrawer(anchor, true)}
            >
              {anchor}
            </MenuIcon>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </ThemeProvider>
        </React.Fragment>
      ))}
    </div>
  );
}
