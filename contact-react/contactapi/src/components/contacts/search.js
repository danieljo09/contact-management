import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "81.25%",
    borderRadius: "50%",
    margin: "28px 28px 0px",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  contactName: {
    fontSize: "16px",
    textAlign: "center",
  },
  contactTel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    fontSize: "12px",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Search = () => {
  const classes = useStyles();
  const search = "search";
  const [appState, setAppState] = useState({
    search: "",
    contacts: [],
  });

  useEffect(() => {
    axiosInstance.get(search + "/" + window.location.search).then((res) => {
      const allContacts = res.data;
      setAppState({ contacts: allContacts });
      console.log(res.data);
    });
  }, [setAppState]);

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {appState.contacts.map((contact) => {
            return (
              <Grid item key={contact.id} xs={12} md={4}>
                <Card className={classes.card}>
                  <Link
                    color="textPrimary"
                    href={"/contact/" + contact.tel}
                    className={classes.link}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={contact.image}
                      title="Image title"
                    />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.contactName}
                    >
                      {contact.name}
                    </Typography>
                    <div className={classes.contactTel}>
                      <Typography color="textSecondary">
                        {contact.tel}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Search;
