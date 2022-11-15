import { styled } from "../../../../styles";

export const LoginBoxContainer = styled("div", {
	width: "stretch",
	margin: "0 4.5rem",
	padding: "3.5rem 8rem",

	background: "$form-background",
	borderRadius: 4,

	"@xl2": {
		padding: "2.5rem 4rem"
	},

	"@sm": {
		margin: "0 1.5rem",
		padding: "1.5rem 2rem"
	}
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

export const LoginFormFooter = styled("footer", {
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "1.25rem",

	a: {
		fontFamily: "Poppins",
		fontSize: "0.875rem",
		color: "$primary-color",
		textDecoration: "none",

		transition: "0.2s",

		"&:hover": {
			filter: "brightness(0.7)"
		}
	}
});

export const LoginBoxFooter = styled("footer", {
	marginTop: "1rem",

	textAlign: "center",

	p: {
		margin: "0 auto",
		width: "fit-content",

		fontFamily: "Poppins",
		color: "$primary-color",

		cursor: "pointer",
		transition: "0.2s",

		span: {
			fontWeight: 600
		},

		"&:hover": {
			textDecoration: "underline"
		}
	}
});
