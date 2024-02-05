
<!-- LOGO -->

<p align="center">
    <a href="https://developerdao.com">
    <picture width="80" height="80">
    <source media="(prefers-color-scheme: dark)" srcset="packages/frontend/public/D_D_logo-dark.svg" width="80" height="80">
    <source media="(prefers-color-scheme: light)" srcset="packages/frontend/public/D_D_logo-light.svg" width="80" height="80">
    <img alt="Shows the DeveloperDAO logo with light or dark mode." src="packages/frontend/public/D_D_logo-dark.svg">
  </picture>
    </a>
    <h2 align="center">DeveloperDAO</h2>
    <p align="center">
    A community of builders who believe in collective ownership of the internet.
    </p>
</p>

[![Chat on Discord](https://img.shields.io/badge/chat-Discord-7289DA?logo=discord)][discord] [![Follow on Twitter](https://img.shields.io/badge/social-Twitter-1DA1F2?logo=twitter)](https://twitter.com/developer_dao) [![See on Etherscan](https://img.shields.io/badge/MintNFT-Ethereum-3C3C3D?logo=ethereum)](https://etherscan.io/token/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b#writeContract)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-39-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- Table of Contents -->

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ul>
    <li><a href="#what-is-a-dao">What is a DAO</a></li>
    <li><a href="#what-is-developerDAO">What is  DeveloperDAO</a></li>
    <li><a href="#how-do-i-join">How do I join?</a></li>
    <li><a href="#what-is-this-repo">What is this repo?</a></li>
    <li><a href="#developing">Developing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contributors-">Contributors</a></li>
</ul>

## What is a DAO

DAO stands for **D**ecentralized **A**utonomous **O**rganisation. That is a group of people with shared goals/mission that are governed by an agreed set of rules coded into a smart contract(s) on a blockchain.

If you want to learn more about DAOs, check out Cooper Turley's blog at https://alias.co/coopahtroopa/essays, mainly ["The Rise of Micro-Economies"](https://coopahtroopa.mirror.xyz/gWY6Kfebs9wHdfoZZswfiLTBVzfKiyFaIwNf2q8JpgI).

## What is DeveloperDAO

The project was started as an experiment by [Nader Dabit](https://twitter.com/dabit3) to see what can be achieved when we bring together talented and like-minded people who are interested in learning about and building on Web3.

## How do I join?

The DAO operates inside our [discord server](https://discord.gg/ASjBPJuNhS). To gain access to this server you need to own a [Devs for Revolution](https://opensea.io/collection/devs-for-revolution) NFT. The contract for purchasing one [can be found on etherscan.io](https://etherscan.io/address/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b#writeContract). If you're not sure how to mint an NFT, [check out this how-to article](https://jonkuperman.com/how-to-join-developer-dao/) by @jkup.

Whilst there is no charge for the NFT you will have to pay a "gas fee" for the Ethereum Blockchain network in order to mint one. This fee can range wildly from about $40 up to and over $400 at peak times. You can check current gas fee using the [Ethereum gas price tracker](https://etherscan.io/gastracker). If the fee is high you may want to wait and come back later.

That said, there is a limited supply of NFT's that can be created so don't wait too long!

To find available tokenIDs you can mint try this tool created by the community - https://ddao.ibby.dev/.

If you get stuck please reach out on our [Discord] and we'd be happy to help.

## What is this repo?

This is the code for the [public DeveloperDAO site](https://developerdao.com/).

At the moment it allows members to view their genesis NFT by entering in its ID. As the community takes shape we will decide what this website becomes and build it as a collective.

## Built with

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Yarn](https://yarnpkg.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)

## Developing

### Local Development Environment

**Note:** Make sure you have the latest version of node installed `^14.17.6`.

```bash
cd developer-dao;
nvm install; # to install the version in .nvmrc
nvm use;
```

1. Clone this repo with git
1. Install dependencies by running `yarn`
1. In each of the subfolders of `package` copy the `.env.example` and name it `.env`
> Note: You can fill these out with functionality as required. Read them and use your best judgement. 
1. Seed the CMS with data by running `yarn workspace cms seed`
1. Start the development server with `yarn dev`
1. Open the development site by going to `http://localhost:3000`
1. Open the development server by going to `http://localhost:1317` (admin page `http://localhost:1317/admin`)


### Deployment

This project uses Vercel to manage deployments. We use the Vercel GitHub integration to automatically deploy in two situations:

- When code is merged into `main`, a production deployment is triggered. Vercel will build the project and deploy it to `developerdao.com`.
- When a pull request is created, a preview deployment is triggered. Vercel will build the project from the PR's code and deploy it to an auto-generated URL.

In both cases, Vercel runs `next build` to build the project. Since running `next build` automatically sets `NODE_ENV` to `production`, if you need to distinguish between an actual production deployment and a PR preview deployment (example: we only want to run code that connects to analytics in production and not for preview deploys), use the `NEXT_PUBLIC_VERCEL_ENV` (`process.env.NEXT_PUBLIC_VERCEL_ENV`) environment variable. This variable exists in Vercel and provides the following values:

| Vercel Environment | value         |
| ------------------ | ------------- |
| Production         | `production`  |
| Preview            | `preview`     |
| Development        | `development` |

## Contributing

Thanks for showing interest in contributing to Developer DAO. Before submitting any changes please review our contributing guidelines in [CONTRIBUTING.md](.github/CONTRIBUTING.md).


</div>

[discord]: https://discord.gg/ASjBPJuNhS
