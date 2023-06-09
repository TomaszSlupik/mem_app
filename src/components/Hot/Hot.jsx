import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/breakpoints";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Hot.scss";
import Searchmem from "../Searchmem/Searchmem";
import FormMem from "../FormMem/FormMem";
import Viewcard from "../Viewcard/Viewcard";
import Listmem from "../Listmem/Listmem";

export default function Hot(props) {
  // const dispatch = useDispatch();
  // const memStatus = useSelector(state => state.mem.status);
  // const mem = useSelector(state => state.mem.mem);
  // const error = useSelector(state => state.mem.error);

  // useEffect(() => {
  //     dispatch(fetchMem());
  //   }, [dispatch]);

  return (
    <div>
      <div className="searchmem">
        <Searchmem
          mem={props.mem}
          setMem={props.setMem}
          searchMemHot={props.searchMemHot}
          backToDataBase={props.backToDataBase}
        />
      </div>
      <div className="viewCard">
        <Viewcard
          changeColorLayout={props.changeColorLayout}
          setChangeColorLayout={props.setChangeColorLayout}
          changeView={props.changeView}
          setChangeView={props.setChangeView}
          language={props.language}
          setLanguage={props.setLanguage}
        />
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          <ThemeProvider theme={(theme, props.changeColorLayout)}>
            {props.changeView === false
              ? props.mem
                  .filter((el) => el.upvotes - el.downvotes > 5)
                  .map((el, index) => {
                    return (
                      <FormMem
                        index={index}
                        title={el.title}
                        upvotes={el.upvotes}
                        downvotes={el.downvotes}
                        img={el.img}
                        editLikeUpvote={props.editLikeUpvote}
                        editDisLikeUpvote={props.editDisLikeUpvote}
                        editLikeDownvote={props.editLikeDownvote}
                        editDisLikeDownvote={props.editDisLikeDownvote}
                        language={props.language}
                        setLanguage={props.setLanguage}
                      />
                    );
                  })
              : props.mem
                  .filter((el) => el.upvotes - el.downvotes > 5)
                  .map((el, index) => {
                    return (
                      <Listmem
                        index={index}
                        title={el.title}
                        upvotes={el.upvotes}
                        downvotes={el.downvotes}
                        img={el.img}
                        editLikeUpvote={props.editLikeUpvote}
                        editDisLikeUpvote={props.editDisLikeUpvote}
                        editLikeDownvote={props.editLikeDownvote}
                        editDisLikeDownvote={props.editDisLikeDownvote}
                        language={props.language}
                        setLanguage={props.setLanguage}
                      />
                    );
                  })}
          </ThemeProvider>
        </Grid>
      </Box>
    </div>
  );
}
