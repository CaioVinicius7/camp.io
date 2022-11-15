import { ComponentProps } from "@stitches/react";
import { Check } from "phosphor-react";

import { CheckboxContainer, CheckboxRoot, CheckboxIndicator } from "./styles";

export interface CheckboxProps extends ComponentProps<typeof CheckboxRoot> {
	label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
	return (
		<CheckboxContainer>
			<CheckboxRoot {...props}>
				<CheckboxIndicator asChild>
					<Check weight="bold" />
				</CheckboxIndicator>
			</CheckboxRoot>

			{!!label && label}
		</CheckboxContainer>
	);
}
