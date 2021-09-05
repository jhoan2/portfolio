const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
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
  resume: 'https://example.com',
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
    name: 'Jikan Api',
    description:
      'Website made with the Jikan Api. The website was made with React and deployed through Netlify. There is continuous integration, and I experimented with end to end testing using cypress, unit testing with jest, and React Hooks. You can search up anime and look through your results in pages.',
    stack: ['React'],
    sourceCode: 'https://github.com/jhoan2/jikanapi',
    livePreview: 'https://jikanapi.netlify.app/',
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
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnhoang1994@gmail.com',
}

export { header, about, projects, skills, contact }
