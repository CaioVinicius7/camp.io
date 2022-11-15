import { Envelope, LockSimple, SignIn } from "phosphor-react";

import { Input } from "../../../../components/Input";
import { Checkbox } from "../../../../components/Checkbox";

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

			<LoginForm>
				<Input.Root label="E-mail">
					<Input.Icon>
						<Envelope />
					</Input.Icon>

					<Input.Input placeholder="Digite seu e-mail" />
				</Input.Root>

				<Input.Root label="Senha">
					<Input.Icon>
						<LockSimple />
					</Input.Icon>

					<Input.Input placeholder="Digite sua senha" />
				</Input.Root>

				<Checkbox label="Lembre-me" />
			</LoginForm>
		</LoginBoxContainer>
	);
}
