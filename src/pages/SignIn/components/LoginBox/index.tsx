import { Envelope, LockSimple, SignIn } from "phosphor-react";

import { Input } from "../../../../components/Input";
import { Checkbox } from "../../../../components/Checkbox";
import { Button } from "../../../../components/Button";

import {
	LoginBoxContainer,
	Header,
	LoginForm,
	LoginFormFooter,
	LoginBoxFooter
} from "./styles";

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

					<Input.Input placeholder="Digite sua senha" type="password" />
				</Input.Root>

				<LoginFormFooter>
					<Checkbox label="Lembre-me" />

					<a href="#">Esqueci minha senha</a>

					<Button title="Entrar" type="submit" />
				</LoginFormFooter>
			</LoginForm>

			<LoginBoxFooter>
				<p>
					Não tem uma conta? <span> Registre-se </span>
				</p>
			</LoginBoxFooter>
		</LoginBoxContainer>
	);
}
