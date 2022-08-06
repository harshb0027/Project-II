/*
*AUTHORS: Mathieu Theriault
*PURPOSE: UI interface for sign in
*VERSION:1.0
*DATE: 15 June 2022
*/
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
//import { GoogleLogin } from 'react-google-login'; Must use React 16 or 17


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/signup/"; //must specify the whole URL, all the way to specific route
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	// //Function to handle successful sign in using google.
	// const googleSuccess = async (e) => {
	// 	console.log("GOOGLE SUCCESS")
	// }

	// const googleFailure = () => {
	// 	console.log("GOOGLE FAILURE.")
	// }

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
						{/* <GoogleLogin 
							clientId="GOOGLE ID"
							render={(renderProps) => (
								<button 
								className='googleButton' 
								color='primary' 
								fullWidth 
								onClick={renderProps.onClick} 
								disabled={renderProps.disabled} 
								variant="container">
									Google Sign In
								</button>
							)}
							onSuccess = {googleSuccess}
							onFailure = {googleFailure}
							cookiePolicy="single_host_origin"
						/> */}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;



// //Sign Up JSX component.
// export const Signup = () => {
// 	const [data, setData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 	});
// 	const [error, setError] = useState("");

// 	//Function to set values upon changes in fields.
// 	const handleChange = e => ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	//Function to handle submit on button press.
// 	// Async so
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/signup/post"; // URL to send POST to
// 			const { data: res } = await axios.post(url, data);
// 			console.log(res.message);
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.signup_container}>
// 			<div className={styles.signup_form_container}>
// 				<div className={styles.left}>
// 					<h1>Welcome Back</h1>
// 					<Link to="/login">
// 						<button type="button" className={styles.white_btn}>
// 							Sing in
// 						</button>
// 					</Link>
// 				</div>
// 				<div className={styles.right}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Create Account</h1>
// 						<input
// 							type="text"
// 							placeholder="First Name"
// 							name="firstName"
// 							onChange={handleChange}
// 							value={data.firstName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="text"
// 							placeholder="Last Name"
// 							name="lastName"
// 							onChange={handleChange}
// 							value={data.lastName}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sing Up
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup;

