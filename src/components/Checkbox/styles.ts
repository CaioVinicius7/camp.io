import * as Checkbox from "@radix-ui/react-checkbox";

import { styled } from "../../styles";

export const CheckboxContainer = styled("label", {
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",

	cursor: "pointer",
	color: "$text-base"
});

export const CheckboxRoot = styled(Checkbox.Root, {
	width: "1.5rem",
	height: "1.5rem",

	background: "transparent",
	border: "1px solid $border-color",
	borderRadius: 4,

	cursor: "pointer",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	"&[data-state=checked]": {
		background: "$primary-color",
		borderColor: "$primary-color"
	}
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
	color: "#473404",
	fontSize: "1.25rem",
	lineHeight: 0
});
