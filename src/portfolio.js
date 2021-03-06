const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jhoan2.netlify.app/',
  title: 'JH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  // Change
  // the
  // Resume
  name: 'John Hoang',
  role: 'Full Stack Engineer',
  description: 'Full Stack Engineer with the ability to learn fast',
  resume:
    'https://drive.google.com/file/d/18F7d24JlBgHQi1UjBeQacaq45FWKJM_e/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/john-hoang-589804184/',
    github: 'https://github.com/jhoan2/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Web3-blog',
    description:
      'A fullstack web3 personal blog. Features include dark mode, filtering by tags, pagination, and sorting. Smart contract deployed on Mumbai Testnet. Only the owner of the smart contract can create blog posts. ',
    stack: ['Solidity', 'Next.js', 'Graphql', 'The Graph', 'IPFS', 'Hardhat'],
    sourceCode: 'https://github.com/jhoan2/web3-blog',
    livePreview: 'https://web3-blog-beta.vercel.app/',
  },
  {
    name: 'ZeniNFTs',
    description:
      'Unique collection of ZeniNFTs modeled after Zenitsu, the Dachshund. Drew the images on the MediBang app on the ipad and used hashlips art engine to create the unique images. The images were hosted on Pinata, and the frontend used Ethersjs to connect to the smart contract that was deployed on Rinkeby with the help of Hardhat.',
    stack: ['Ethersjs', 'Solidity', 'React', 'Bootstrap', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jhoan2/ZeniNFTs',
    livePreview: 'https://zeni-nfts.netlify.app/',
  },
  {
    name: 'John Seafood',
    description:
      'Website for the restaurant John Seafood. The website was made with React and Redux. You can check the total of your order before ordering, but there is no online ordering.',
    stack: ['React', 'Redux'],
    sourceCode: 'https://github.com/jhoan2/John-Seafood',
    livePreview: 'http://johnseafood.net/',
  },
  {
    name: 'Deschool',
    description:
      'A decentralized platform to host blogs geared towards learning. Students may mint blog which will show up on OpenSea as proof of completion. Won the prize pool for Web3Con hosted by Developer DAO. ',
    stack: ['Ethersjs', 'Solidity', 'Next.js', 'IPFS', 'Hardhat', 'React'],
    sourceCode: 'https://github.com/AcademiaDAO/web3-blog',
    livePreview: 'https://twitter.com/developer_dao/status/1515016114601795585',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Git',
  'CI/CD',
  'Ethersjs',
  'IPFS',
  'The Graph',
  'Hardhat',
  'Next.js',
  'Solidity',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnhoang1994@gmail.com',
}

export { header, about, projects, skills, contact }
