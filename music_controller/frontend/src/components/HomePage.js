import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

function HomePage() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<p>This is this the homepage</p>
				</Route>
				<Route path="/join" component={RoomJoinPage} />
				<Route path="/create" component={CreateRoomPage} />
			</Switch>
		</Router>
	);
}

export default HomePage;
