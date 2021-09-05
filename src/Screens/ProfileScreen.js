import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../Resources/firebase";
import Nav from "../Components/Nav";
import "./styles/ProfileScreen.css";
import avatar from "../Images/Netflix-avatar.png";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
	const user = useSelector(selectUser);
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen_body">
				<h1>Edit Profile</h1>
				<div className="profileScreen_info">
					<img src={avatar} alt="" />
					<div className="profileScreen_details">
						<h2>Email : {user.email}</h2>
						<div className="profileScreen_plans">
							<h3>Plans</h3>
							<PlansScreen />
							<button
								onClick={() => auth.signOut()}
								className="profileScreen_signOut">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
