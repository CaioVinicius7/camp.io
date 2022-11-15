import { SignIn } from "phosphor-react";

import { LoginBoxContainer, Header, LoginForm } from "./styles";

export function LoginBox() {
	return (
		<LoginBoxContainer>
			<Header>
				<h2>
					<SignIn size={24} /> Faça seu login
				</h2>

				<p>Entre com suas informações de cadastro.</p>
			</Header>

			<LoginForm></LoginForm>
		</LoginBoxContainer>
	);
}
