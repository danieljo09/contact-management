import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useParams } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  image: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {},
  text: {},
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  edit: {
    margin: theme.spacing(1),
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(10),
  },
  delete: {
    margin: theme.spacing(1),
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Contact() {
  const { tel } = useParams();
  const classes = useStyles();

  const [data, setData] = useState({
    contacts: [],
  });

  useEffect(() => {
    axiosInstance.get("contact/" + tel).then((res) => {
      setData({
        contacts: res.data,
      });
      console.log(res.data);
    });
  }, [setData]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}> </div>{" "}
      <Container maxWidth="lg">
        <Avatar className={classes.image} src={data.contacts.image}></Avatar>
		<div className={classes.paper}> </div>{" "}
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableBody>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">{data.contacts.name}</TableCell>
              </TableRow>
			  <TableRow>
                <TableCell align="left">Telephone</TableCell>
                <TableCell align="left">{data.contacts.tel}</TableCell>
              </TableRow>
			  <TableRow>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">{data.contacts.email}</TableCell>
              </TableRow>
			  <TableRow>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">{data.contacts.address}</TableCell>
              </TableRow>
			  <TableRow>
                <TableCell align="left">Facebook</TableCell>
                <TableCell align="left">{data.contacts.facebook}</TableCell>
              </TableRow>
			  <TableRow>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">{data.contacts.desc}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>{" "}
      <Link href={"/admin/edit/" + data.contacts.id}>
        <Fab className={classes.edit} color="primary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Link>
      <Link href={"/admin/delete/" + data.contacts.id}>
        <Fab className={classes.delete} color="secondary" aria-label="delete">
          <DeleteIcon />
        </Fab>
      </Link>
    </Container>
  );
}

// <Typography
// 	component="h1"
// 	variant="h2"
// 	align="center"
// 	color="textPrimary"
// 	gutterBottom
// >
// 	{data.contacts.name}{' '}fdfsdfdsfsdfdsfsdfdsfsdfdfsdfdsfds fdfdfdfsdfsfdsfsdf
// </Typography>{' '}
// <Typography
// 	variant="h5"
// 	align="center"
// 	color="textSecondary"
// 	paragraph
// >
// 	{data.contacts.tel}{' '}
// </Typography>{' '}
