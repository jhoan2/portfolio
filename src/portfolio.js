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
    'https://docs.google.com/document/d/1S6q3Ukaqw8xJ6RECx6GUhqJnbKCeqFfJZBaYh4Qh6Sc/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/john-hoang-589804184/',
    github: 'https://github.com/jhoan2/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'John Seafood',
    description:
      'Website for the restaurant John Seafood. The website was made with React and Redux. You can check the total of your order before ordering, but there is no online ordering.',
    stack: ['React', 'Redux'],
    sourceCode: 'https://github.com/jhoan2/John-Seafood',
    livePreview: 'http://johnseafood.net/',
  },
  {
    name: 'ZeniNFTs',
    description:
      'Unique collection of ZeniNFTs modeled after Zenitsu, the Dachshund. I drew the images on the MediBang app on the ipad and used hashlips art engine to create the unique images. The images were hosted on Pinata, and the frontend used Etherjs to connect to the smart contract, I deployed on Rinkeby with the help of Hardhat.',
    stack: ['Ethersjs', 'Solidity', 'React', 'Bootstrap', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jhoan2/ZeniNFTs',
    livePreview: 'https://zeni-nfts.netlify.app/',
  },
  {
    name: 'Web3-blog',
    description:
      'A fullstack web3 personal blog. Some features are dark mode, filtering by tags, pagination, and sorting.',
    stack: [
      'React',
      'Ethersjs',
      'Solidity',
      'Next',
      'Mui',
      'Chai',
      'Graphql',
      'The Graph',
      'IPFS',
      'Hardhat',],
    sourceCode: 'https://github.com/jhoan2/web3-blog',
    livePreview: 'https://web3-blog-beta.vercel.app/',
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
