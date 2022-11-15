import { styled } from "../../../../styles";

export const LoginBoxContainer = styled("div", {
	width: "stretch",
	margin: "4.5rem",
	padding: "3.5rem 8rem",

	background: "$form-background",
	borderRadius: 4
});

export const Header = styled("header", {
	color: "$text-title",

	h2: {
		fontSize: "$xl",
		fontFamily: "Poppins",
		fontWeight: 600,

		display: "flex",
		alignItems: "center",
		gap: "0.75rem"
	},

	svg: {
		color: "$primary-color"
	},

	p: {
		marginTop: "0.5rem",

		fontWeight: 500,
		color: "$text-base"
	}
});

export const LoginForm = styled("form", {
	marginTop: "1.75rem",

	display: "flex",
	flexDirection: "column",
	gap: "1.25rem"
});
