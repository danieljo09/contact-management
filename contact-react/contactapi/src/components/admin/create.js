import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {

	const history = useHistory();
	const initialFormData = Object.freeze({
		id: '',
		name: '',
		tel: '',
		email: '',
        address: '',
        facebook: '',
		desc: '', 
	});

	const [contactData, updateFormData] = useState(initialFormData);
	const [contactimage, setContactImage] = useState(null);

	const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setContactImage({
				image: e.target.files,
			});
			console.log(e.target.files);
		}
		if ([e.target.name] == 'name') {
			updateFormData({
				...contactData,
                [e.target.name]: e.target.value.trim(),
                ['tel']: e.target.value.trim(),
			});
		} else {
			updateFormData({
				...contactData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('name', contactData.name);
		formData.append('tel', contactData.tel);
		formData.append('email', contactData.email);
		formData.append('address', contactData.address);
        formData.append('facebook', contactData.facebook);
        formData.append('desc', contactData.desc);
		formData.append('author', 1);
		formData.append('image', contactimage.image[0]);
		axiosInstance.post(`admin/create/`, formData);
		history.push({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Create New Contact
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								autoComplete="name"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="tel"
								label="Telephone"
								name="tel"
								autoComplete="tel"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="address"
								label="Address"
								name="address"
								autoComplete="address"
								onChange={handleChange}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="facebook"
								label="Facebook"
								name="facebook"
								autoComplete="facebook"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								id="desc"
								label="Description"
								name="desc"
								autoComplete="desc"
								onChange={handleChange}
								multiline
								rows={3}
							/>
						</Grid>
						<input
							accept="image/*"
							className={classes.input}
							id="contact-image"
							onChange={handleChange}
							name="image"
							type="file"
						/>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Contact
					</Button>
				</form>
			</div>
		</Container>
	);
}