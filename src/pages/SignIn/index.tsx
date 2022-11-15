import { ContentContainer, SideImage, SignInContainer } from "./styles";

import sideImage from "../../assets/side-image.png";

export function SignIn() {
	return (
		<SignInContainer>
			<ContentContainer></ContentContainer>

			<SideImage src={sideImage} alt="" />
		</SignInContainer>
	);
}
