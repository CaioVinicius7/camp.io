import { styled } from "../../styles";

export const SignInContainer = styled("main", {
	height: "100vh",

	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",

	"@xl": {
		gridTemplateColumns: "1fr"
	}
});

export const ContentContainer = styled("aside", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	img: {
		position: "absolute",
		left: "2.5rem",
		top: "2.5rem"
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
