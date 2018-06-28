const identity = {
  name: 'headwinds',
  link: 'https://www.headwinds.net',
  slogan: '',
  works: {
    name: 'works',
    link: 'https://www.headwinds.net/works'
  },
  about: {
    name: 'about',
    link: 'https://www.headwinds.net/about'
  },
  contact: {
    name: 'contact',
    link: 'https://www.headwinds.net/contact'
  },
  projects: [
    {
      name: 'Patient Network',
      description:
        'The Trioova Patient Network enables patients to connect with care-givers and other providers. Patients can form their own connected care circle and engage in private or team chat. They can also upload and share files as well as search a marketplace to connect with providers across the country',
      client: 'Trioova',
      company: 'QoC Health',
      tags: 'security,file sharing, messaging',
      duration: 4,
      team: 4,
      role: 'Lead UI',
      tech: 'React 16 & Redux',
      year: 2018,
      localized: false,
      locked: false,
      id: 0
    },
    {
      name: 'Thought Spot',
      description:
        'Thought Spot is a responsive (desktop & mobile) web app for CAMH. It talks to both the Google Places and Mapbox APIs as well as performs full text and geolocation proximity search through the HIPAA-compliant QoC API.',
      client: 'CAMH',
      company: 'QoC Health',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'Fullstack',
      localized: false,
      tech: '',
      year: 2017,
      locked: false,
      id: 1
    },
    {
      name: 'ML Tools',
      description:
        'Agents were required to manually tag thousands of lines of chat data. Natural Language Processing and Machine Learning alorigthms can now automatically tag the vast majority of this text reducing human involment down to much more manageable results. Inspired by an excel-like interface that talks to ML services, this tool allows an agent to quickly review problematic tags and reduced the time it takes to develop a model for the Data Science team down from 3 months to 1 week.',
      client: '247 ai',
      company: '247 ai',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'Fullstack',
      tech: '',
      year: 2016,
      localized: true,
      locked: false,
      id: 2
    },
    {
      name: 'Voices',
      description:
        'I was hired to lead the Flash development on a project for Microsoft. In order to promote version 2 of the MSN search toolbar, we developed a global guiz contest -- the MSN World Tour -- that would be played out in real-time over the course of 4 weeks and may involve as many as 12 million users. I helped the team of designers and developers assemble the game assests, and developed the game logic that relies on Flash/XML communication with ASP.NET. We also did some complex encryption to protect our users, and produced two versions in French and English.',
      client: '247 ai',
      company: '247 ai',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'Fullstack',
      localized: true,
      tech: '',
      year: 2015,
      locked: false,
      id: 3
    },
    {
      name: 'Total Drama Avatar Builder',
      description:
        'Inspired by a monster maker, kids can use this tool to build their own total drama avatar by selecting a head, body, feet, and background, and then share them with their friends.',
      client: 'Corus Entertainment',
      company: 'Zincroe',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Flash AS3',
      localized: false,
      year: 2010,
      locked: false,
      id: 4
    },
    {
      name: 'Lancer Earth',
      description:
        'I was hired to lead the Flash development on a project for Microsoft. In order to promote version 2 of the MSN search toolbar, we developed a global guiz contest -- the MSN World Tour -- that would be played out in real-time over the course of 4 weeks and may involve as many as 12 million users. I helped the team of designers and developers assemble the game assests, and developed the game logic that relies on Flash/XML communication with ASP.NET. We also did some complex encryption to protect our users, and produced two versions in French and English.',
      client: 'Microsoft',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Flash AS3',
      localized: true,
      year: 2007,
      locked: false,
      id: 5
    },
    {
      name: 'World Tour',
      description:
        'In order to promote version 2 of the MSN search toolbar, we developed a global guiz contest that would be played out in real-time over the course of 4 weeks and may involve as many as 12 million users. I helped the team of designers and developers assemble the game assests, and developed the game logic that relies on Flash/XML communication with ASP.NET. We also did some sha-256 encryption to protect our users, and produced two versions in French and English.',
      client: 'Microsoft',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Flash AS2',
      localized: true,
      year: 2005,
      locked: false,
      id: 6
    },
    {
      name: 'Dakar Road Rally',
      description:
        'The Dakar is an intense off-road endurance race from Paris, France to Dakar, Sengal. After watching video about each legs of the race and then answering multiple choice questions and playing mini games, players can complete against each other to see who can compete the race. The experience is driven by a competive leaderboard which tracks the scores and events in the game.',
      client: 'Microsoft',
      tags: 'experience,game',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Flash AS2',
      year: 2006,
      locked: false,
      id: 7
    },
    {
      name: 'BMW Car Configurator',
      description:
        'Being able to pick and choose parts of your new beamer and the have car instantly change to reflect to your personal style is a compelling experience. Once the car is set to your liking, the configuration will be sent to a database to find appropriate dealer if the car exists or a manufacturer if he needs to be built.',
      client: 'BMW',
      company: 'Blast Radius',
      tags: 'experience,automotive,configuration',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Javascript Backbone',
      api: 'None',
      year: 2017,
      locked: false,
      id: 8
    },
    {
      name: 'Bacardi 360 Video',
      description:
        'This after party experience invites the viewer into a massive manhattan apartment. From a first person prespective, the user can scroll around in full 360 video and look anywhere in the room. As they explore, they will discover mini games and novelty items that pulls content from their Facebook profile and feed.',
      client: 'Bacardi',
      tags: 'experience',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Flash As3',
      api: 'Facebook',
      year: 2013,
      locked: false,
      id: 9
    },
    {
      name: 'Wii Fitness',
      description:
        'Wii Fitness combined a console game with a physical device. We built an instructional video-based website to teach players a series of excercises and then track their progress.',
      client: 'Nintendo',
      company: 'Blast Radius',
      tags: 'experience',
      duration: 4,
      team: 4,
      role: 'Fullstack',
      tech: '',
      api: 'None',
      year: 2010,
      locked: false,
      id: 10
    },
    {
      name: 'Cabin Quest',
      description:
        'I was hired to lead the Flash development on a project for Microsoft. In order to promote version 2 of the MSN search toolbar, we developed a global guiz contest -- the MSN World Tour -- that would be played out in real-time over the course of 4 weeks and may involve as many as 12 million users. I helped the team of designers and developers assemble the game assests, and developed the game logic that relies on Flash/XML communication with ASP.NET. We also did some complex encryption to protect our users, and produced two versions in French and English.',
      client: 'Microsoft',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'Fullstack',
      tech: 'React, Redux, MongoDB, Python',
      api: '',
      year: 20,
      locked: false,
      id: 11
    },
    {
      name: 'Labatt Wolf Pack',
      description:
        'I was hired to lead the Flash development on a project for Microsoft. In order to promote version 2 of the MSN search toolbar, we developed a global guiz contest -- the MSN World Tour -- that would be played out in real-time over the course of 4 weeks and may involve as many as 12 million users. I helped the team of designers and developers assemble the game assests, and developed the game logic that relies on Flash/XML communication with ASP.NET. We also did some complex encryption to protect our users, and produced two versions in French and English.',
      client: 'Labatt',
      tags: 'security,experience,game,world',
      duration: 4,
      team: 4,
      role: 'UI',
      tech: 'Flash AS2',
      year: 2006,
      locked: false,
      id: 12
    }
  ]
};

export default identity;
