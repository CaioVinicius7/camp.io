import { styled } from "../../styles/index";

export const TextInputRootContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "0.25rem"
});

export const TextInputLabel = styled("label", {
	fontFamily: "Poppins",
	fontSize: "1rem",
	fontWeight: 500
});

export const TextInputContent = styled("div", {
	padding: "0.75rem",

	border: "1px solid $border-color",
	borderRadius: 4,

	display: "flex",
	alignItems: "center",
	gap: "0.5rem",

	"&:has(input:focus)": {
		borderColor: "$primary-color",

		"span:first-child": {
			color: "$primary-color"
		}
	}
});

export const TextInputIconContainer = styled("span", {
	fontSize: "1.5rem",

	display: "flex",
	alignItems: "center",
	justifyContent: "center"
});

export const TextInputInputContainer = styled("input", {
	flex: 1,

	fontSize: "1rem",
	color: "$text-base",
	border: 0,
	outline: 0,
	background: "transparent"
});
