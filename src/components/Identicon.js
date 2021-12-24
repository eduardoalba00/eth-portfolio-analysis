import { useEffect, useRef } from "react";
import { useEthers } from "@usedapp/core";
import styled from "@emotion/styled";
import Jazzicon from "@metamask/jazzicon";

const StyledIdenticon = styled("div")(({ theme }) => ({
	height: "2rem",
	width: "2rem",
	borderRadius: "1.125rem",
	backgroundColor: "black",
}));

export default function Identicon() {
	const ref = useRef();
	const { account } = useEthers();

	useEffect(() => {
		if (account && ref.current) {
			ref.current.innerHTML = "";
			ref.current.appendChild(
				Jazzicon(32, parseInt(account.slice(2, 10)))
			);
		}
	}, [account]);

	return <StyledIdenticon ref={ref} />;
}
