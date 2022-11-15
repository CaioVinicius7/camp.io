import { styled } from "../../styles";

export const ButtonContainer = styled("button", {
	width: "100%",
	padding: "0.75rem 1rem",

	border: 0,
	borderRadius: 4,
	color: "$primary-color-text",
	background: "$primary-color",

	textTransform: "uppercase",
	fontFamily: "Poppins",
	fontSize: "1.125rem",
	fontWeight: 600,

	cursor: "pointer",
	transition: "0.2s",

	"&:hover": {
		filter: "brightness(0.8)"
	}
});
