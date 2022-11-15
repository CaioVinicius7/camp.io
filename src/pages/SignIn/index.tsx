import { LoginBox } from "./components/LoginBox";

import { ContentContainer, SideImage, SignInContainer } from "./styles";

import sideImage from "../../assets/side-image.png";
import logo from "../../assets/logo.png";

export function SignIn() {
	return (
		<SignInContainer>
			<ContentContainer>
				<img src={logo} alt="logo" />

				<LoginBox />
			</ContentContainer>

			<SideImage src={sideImage} alt="" />
		</SignInContainer>
	);
}
