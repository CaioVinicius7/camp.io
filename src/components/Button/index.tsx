import { ComponentProps } from "@stitches/react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
	title: string;
}

export function Button({ title, ...props }: ButtonProps) {
	return <ButtonContainer {...props}>{title}</ButtonContainer>;
}
