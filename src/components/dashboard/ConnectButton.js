import { Button, Typography } from "@mui/material";
import { useEthers, useEtherBalance } from "@usedapp/core";
//redux
import setAddress from "../../store/Actions/WalletAction";
import { useDispatch, useSelector } from "react-redux";

export default function ConnectButton() {
    const dispatch = useDispatch();
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const wallet_address = useSelector((state) => state.Wallet.address);
    if (account) dispatch(setAddress(account));

    const connectButton = (
        <Button variant="subtitle1" onClick={activateBrowserWallet}>
            CONNECT WALLET
        </Button>
    );

    const accountAddress = (
        <Typography variant="subtitle1">{wallet_address}</Typography>
    );

    return (
        <div>
            {!account && connectButton}
            {account && accountAddress}
        </div>
    );
}
