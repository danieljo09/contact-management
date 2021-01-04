import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

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
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Contacts = (props) => {
  const { contacts } = props;
  const classes = useStyles();
  if (!contacts || contacts.length === 0)
    return (
      <Container>
        <p>You do not have any contacts.</p>
        <Link href="/admin/create">
          <Fab className={classes.fab} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Container>
    );
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {contacts.map((contact) => {
            return (
              <Grid item key={contact.id} xs={12} md={4}>
                <Card className={classes.card}>
                  <Link
                    color="textPrimary"
                    href={"contact/" + contact.tel}
                    className={classes.link}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={contact.image}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        className={classes.contactName}
                      >
                        {contact.name.substr(0, 25)}
                      </Typography>
                      <div className={classes.contactTel}>
                        <Typography color="textSecondary">
                          {contact.tel.substr(0, 15)}
                        </Typography>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Link href="/admin/create">
          <Fab className={classes.fab} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Container>
    </React.Fragment>
  );
};
export default Contacts;
