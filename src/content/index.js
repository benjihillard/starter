export default {
  nav: {
    links: [
      { text: 'About', to: 'about' },
      { text: 'Stack', to: 'stack' },
      { text: 'Portfolio', to: 'portfolio' },
      { text: 'Contact', to: 'contact' },
    ],
    pistil: process.env.PUBLIC_URL + '/assets/pistilP.png', 
    highlite: process.env.PUBLIC_URL + '/assets/highliteP.png', 
    milkcreate: process.env.PUBLIC_URL + '/assets/milkCreateP.png', 
  },
  header: {
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    text: ['Hello.', "I'm Benji.", 'I am a'],
    typical: [
      'Developer.',
      4000,
      'Designer.',
      4000,
      'Engineer.',
      4000,
    ],
    btnText: 'Discover More',
  },

  about:{
    bio: "Hi, I’m Benji. A recent graduate from the University of Massachusetts with a BS in computer science. I have a diverse background in both software and design theory. I once heard Don Norman say that “Design is the bridge between technology and people”. I believe that as technology evolves faster and faster, that bridge is being stretched, thinner and thinner. Alienating those whom the bridge doesn't have the capacity to carry. In the same way that a car is only as fast as its slowest part, I feel that revolutionary technology is only as great as it is usable. Because of this I am passionate about bridging that gap using human centered design. Let's build a bridge together one pixel at a time.",
    bioLong: "As a kid I wanted to be an inventor, my grandpa used to call me little Edison. Growing up I didn't have the resources to make the contraptions I would dream up in my head. So my thoughts were stuck to the page. I had notebooks detailing everything from a new palm pilot UX to energy crisis solutions. Flash forward a decade I discovered coding and it changed everything for me. I went from drawing up designs, to typing them into existence. That's when I realized, I would have to pivot from my job as a helicopter mechanic to pursue an education in design and software. I believe both software and myself have yet to reach our full potential.",
    pic: process.env.PUBLIC_URL + '/assets/selfie7.png',
  },


  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: "Javascript is my favorite language to program in. Coming from a background in C, I was thrilled by the speed at which code can be quickly scripted up and the power that comes with runtime compile. I found comfort in the happy medium between C and JS that nodeJS and Typescript create. Having written servers in C before, my mind was blown by Express with its ability to have a server up and running in just a couple lines of code. Although I'm no stranger to SQL, I prefer the speed to versatility trade off that mongodb and other noSQL cloud based platforms provide. Although it's the newest skill to my repertoire I have fallin love with React. It's everything I dreamed about while learning jQuery come to fruition in a way I never would have been able to imagine.",
  },

  portfolio: {
    projects: [
      {
        gif: "/assets/milkcreate.gif",
        title: "Milk Create",
        bio: "A reimagining of Spotify's UX.",
        link: "https://milkcreate.herokuapp.com/",
        youtube: "https://www.youtube.com/watch?v=WrL3-yX9bbI",
        git: "https://github.com/benjihillard/Milk-Create",
      },
      {
        gif: "/assets/pistil.gif",
        title: "Pistil",
        bio: "A magazine hosting and publishing web app.",
        link: "https://pistil.herokuapp.com/",
        youtube: "https://youtu.be/0GxS2499qEs",
        git: "https://github.com/benjihillard/Pistil",
      },
      {
        gif: "/assets/highlite.gif",
        title: "Highlite",
        bio: "A reading aid for those with reading or cognitive difficulty.",
        link: "https://highlite1.herokuapp.com/",
        youtube: "https://www.youtube.com/watch?v=jm1BrTeVTRs&feature=youtu.be",
        git: "https://github.com/benjihillard/Highlite",
      },
    ],
    github: "/assets/github.png",
    youtube: "/assets/youtube.png",
    live: "/assets/live.png",
    info: "/assets/info.png",
  },
  contact:{
    pic: process.env.PUBLIC_URL + '/assets/selfie7.png',
    location: "Austin, TX",
    name: "Benjamin Hillard",
    findme: "at your local coffee shop.",
    findmeTwo: "(post pandemic)",
    email: "hillardbe@gmail.com",
    phone: "508 667 9133",
    git: "github.com/benjihillard",
    gitLink: "https://github.com/benjihillard",
    gitImg: "/assets/github.png",
    insta: "instagram.com/benjihappens/",
    instaLink: "https://www.instagram.com/benjihappens/",
    instaImg: "/assets/instagram.png",
    linkedin: "linkedin.com/in/bhillard/",
    linkedinLink: "https://www.linkedin.com/in/bhillard/",
    linkedinImg: "/assets/linkedin.png"
  },
};
