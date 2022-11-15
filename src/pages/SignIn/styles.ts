import { styled } from "../../styles";

export const SignInContainer = styled("main", {
	height: "100vh",

	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)"
});

export const ContentContainer = styled("aside", {});

export const SideImage = styled("img", {
	width: "100%",
	height: "100vh",
	objectFit: "cover"
});
