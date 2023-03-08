// Setup
import { Network, Alchemy } from 'alchemy-sdk';
import { ethers } from 'ethers';

const settings = {
    apiKey: "rw5Yd7N-VMI0iT3_HzhO0qCZI7kG26ae",
    network: Network.ETH_MAINNET,
};

const nameTokenId = (domainName) => {
    const normalilze = ethers.ensNormalize(domainName);
    const domainHash = ethers.namehash(normalilze);
    return BigInt(domainHash).toString();
}

const getTokenOwner = async (tokenId) => {
    const alchemy = new Alchemy(settings);
    // TIMEPieces contract address
    const address = "0xfeddc1448eb4480714a9942ba28a27b16caf9ce4";
    // Get owner of NFT
    const owner = await alchemy.nft.getOwnersForNft(address, tokenId);
    console.log(owner);
    return owner;
};


export default async (req, res) => {
    const alchemy = new Alchemy(settings);
    const { domain } = req.query;
    const normalizedName =
        ethers.ensNormalize(domain);
    const nameHash =
        ethers.namehash(normalizedName);
    let tokenId = BigInt(nameHash).toString();

    const lastBlock = await alchemy.core.getBlockNumber();
    const nfts = await alchemy.nft.getNftsForOwner("chaoverse.eth");

    const owner = await alchemy.nft.getOwnersForNft("0xfeddc1448eb4480714a9942ba28a27b16caf9ce4", tokenId);

    res.status(200).json({
        domain,
        normalizedName,
        nameHash,
        tokenId,
        lastBlock,
        nfts,
        owner
    });

};
