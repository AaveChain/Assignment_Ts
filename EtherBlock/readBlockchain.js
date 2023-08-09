const { ethers } = require('ethers');
// require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/a06edeb84db247888019eafab276594d"
);

const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);

    const balance = await provider.getBalance(
        "0xDE804e46f67ebeEcBe4c0a54Efe33143cb7ab9E2"
    );
    console.log("Account Balance In BN:", balance);

    const balanceEther = ethers.utils.formatEther(balance);
    console.log("Account Balance In Ether:", balanceEther);

    const balanceWei = ethers.utils.formatEther(balance);
    console.log(balanceWei);
}
querryBlockchain();




