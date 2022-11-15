import { ReactElement, ReactNode } from "react";
import { ComponentProps } from "@stitches/react";

import {
	TextInputInputContainer,
	TextInputIconContainer,
	TextInputRootContainer,
	TextInputLabel,
	TextInputContent
} from "./styles";

export interface TextInputRootProps {
	children: ReactNode;
	label?: string;
}

function TextInputRoot({ children, label }: TextInputRootProps) {
	return (
		<TextInputRootContainer>
			{!!label && <TextInputLabel>{label}</TextInputLabel>}

			<TextInputContent>{children}</TextInputContent>
		</TextInputRootContainer>
	);
}

export interface TextInputIconProps {
	children: ReactElement;
}

function TextInputIcon({ children }: TextInputIconProps) {
	return <TextInputIconContainer>{children}</TextInputIconContainer>;
}

export interface TextInputInputProps
	extends ComponentProps<typeof TextInputInputContainer> {}

function TextInputInput({ ...props }: TextInputInputProps) {
	return <TextInputInputContainer {...props} />;
}

export const Input = {
	Root: TextInputRoot,
	Icon: TextInputIcon,
	Input: TextInputInput
};
