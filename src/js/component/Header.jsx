import React from "react";
function MyHeader() {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-link" href="#">
						Features
					</a>
					<a className="nav-link" href="#">
						Pricing
					</a>
				</div>
			</div>
		</nav>
	);
}
export default MyHeader;
