import { styled } from "../../styles";

export const SignInContainer = styled("main", {
	height: "100vh",

	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",

	"@xl": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}
});

export const ContentContainer = styled("aside", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",

	img: {
		position: "absolute",
		left: "2.5rem",
		top: "2.5rem"
	},

	"@sm": {
		position: "relative",

		img: {
			top: "-2rem",
			left: "3.5rem"
		}
	}
});

export const SideImage = styled("img", {
	width: "100%",
	height: "100vh",
	objectFit: "cover",

	"@xl": {
		display: "none"
	}
});
