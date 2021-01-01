import React, { useEffect, useState } from 'react';
import './App.css';
import Contacts from './components/admin/contacts';
import LoadingComponent from './components/contacts/loading';
import axiosInstance from './axios';

function Admin() {
	const Loading = LoadingComponent(Contacts);
	const [appState, setAppState] = useState({
		loading: true,
		contacts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allContacts = res.data;
			setAppState({ loading: false, contacts: allContacts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Contacts</h1>
			<Loading isLoading={appState.loading} contacts={appState.contacts} />
		</div>
	);
}
export default Admin;