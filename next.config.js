/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: ['raw.githubusercontent.com', 'coin-images.coingecko.com', 's2.coinmarketcap.com', 'assets.coingecko.com', 'token-icons.s3.amazonaws.com', 'ipfs.io', 'ethereum-optimism.github.io'] // Add the domain here
  },
}

module.exports = nextConfig
