import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Memcard from "../../styles/Memcard";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

export default function FormMem(props) {
  const style = {
    typography: { fontWeight: 600 },
  };

  return (
    <Grid
      key={props.index}
      item
      xs={12}
      sm={6}
      lg={4}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0em",
      }}
    >
      <Memcard>
        <Card
          style={{ position: "relative", width: "100%", minHeight: "200px" }}
        >
          <div className="card">
            <div className="card__header">{props.title}</div>
            <div className="card__img">
              <img
                style={{ width: "100%", height: "100%" }}
                src={props.img}
                alt={props.title}
              />
            </div>
            <div className="card__voice">
              <Box sx={{ width: "50%", textAlign: "center" }}>
                <FormattedMessage id="upvote" defaultMessage="Podoba mi się" />
                <span> {props.upvotes}</span>
                <BottomNavigation showLabels>
                  <BottomNavigationAction
                    onClick={() =>
                      props.editLikeUpvote(
                        props.title,
                        props.upvotes,
                        props.downvotes,
                        props.img
                      )
                    }
                    label={
                      <FormattedMessage id="like" defaultMessage="Lubię to" />
                    }
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    disabled={props.upvotes <= 0}
                    onClick={() =>
                      props.editDisLikeUpvote(
                        props.title,
                        props.upvotes,
                        props.downvotes,
                        props.img
                      )
                    }
                    label={
                      <FormattedMessage
                        id="dislike"
                        defaultMessage="Nie lubię"
                      />
                    }
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>
              <Box sx={{ width: "50%", textAlign: "center" }}>
                <FormattedMessage
                  id="downvotes"
                  defaultMessage="Nie podoba mi się"
                />
                <span> {props.downvotes}</span>
                <BottomNavigation showLabels>
                  <BottomNavigationAction
                    onClick={() =>
                      props.editLikeDownvote(
                        props.title,
                        props.upvotes,
                        props.downvotes,
                        props.img
                      )
                    }
                    label={
                      <FormattedMessage id="like" defaultMessage="Lubię to" />
                    }
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    disabled={props.downvotes <= 0}
                    onClick={() =>
                      props.editDisLikeDownvote(
                        props.title,
                        props.upvotes,
                        props.downvotes,
                        props.img
                      )
                    }
                    label={
                      <FormattedMessage
                        id="dislike"
                        defaultMessage="Nie lubię"
                      />
                    }
                    icon={<FavoriteIcon />}
                  />
                </BottomNavigation>
              </Box>
            </div>
            <div className="card__final">
              <div className="card__final-header">
                <Typography style={style.typography} color="primary" mt={2}>
                  {props.upvotes - props.downvotes}
                </Typography>
                <div className="card__final-header--under">
                  <FormattedMessage
                    id="finalvoice"
                    defaultMessage="Podsumowanie głosowania"
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </Card>
      </Memcard>
    </Grid>
  );
}
