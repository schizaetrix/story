// -------------------------------------------------
import Node1 from './images/red-pill-blue-pill.jpg'
import Node2 from './images/dont-fall-neo.jpg'
import Node3 from './images/there-is-no-spoon.jpg'
import Node4 from './images/here-take-a-cookie.jpg'
import Node5 from './images/building-jump.jpg'
import Node6 from './images/i-know-kung-fu.jpg'
import Node7 from './images/through-the-mirror.jpg'
import Node8 from './images/my-name-is-neo.jpg'
import Node9 from './images/worst-dream-ever.jpg'
import Node10 from './images/dodging-bullets.jpg'
import Node11 from './images/crypto-agents.jpg'
import Node12 from './images/grey-goo.jpg'
import Node13 from './images/the-real-world.jpg'
import Node14 from './images/dont-talk-neo.jpg'
import Node15 from './images/sleeping-beauty.jpg'
import Node16 from './images/stopping-bullets.jpg'
import Node17 from './images/end-of-the-line.jpg'
import Node18 from './images/system-failure.jpg'
import Node19 from './images/meet-trinity.jpg'
import Node20 from './images/white-rabbit.jpg'
import Node21 from './images/sleeping-hacker.jpg'
// -------------------------------------------------

const Stories = {
    node01: {
        url: 'https://raw.githubusercontent.com/schizaetrix/story/master/client/src/assets/images/red-pill-blue-pill.jpg',
        image: Node1,
        title: 'Morpheus',
        subject: 'Once Upon a storyTree...',
        body: "You've heard about him all over the interwebs, but with all your amazing hacking skillz, you still couldn't find him - he found you instead. Now he's offering you a choice. Take a leap of faith with the red pill or resume the status quo with the blue pill.",
        key: 1,
        isDeath: false,
        isWin: false,
        children: [ 2, 3 ],
        gchilds0: [ 4, 5 ],
        gchilds1: [ 6, 7 ]
    },
    node02: {
        image: Node2,
        title: 'Feel Like a Base Jump, Neo?',
        subject: 'Take the Blue Pill',
        lead: "Seems like Morpheus didn't like your choice! After taking the blue pill, you find yourself hanging off the side of a building.",
        body: "As you hang on for dear life on the side of that building, you glance into one of the windows, you see a nice-looking lady watching you from her kitchen. Do you ask for her help, or do you try to get down on your own?",
        key: 2,
        isDeath: false,
        isWin: false,
        children: [ 4, 5 ],
        gchilds0: [ 8, 9 ],
        gchilds1: [ 0, 0 ]
    },
    node03: {
        image: Node3,
        title: 'What Was In that Pill?',
        subject: 'Take the Red Pill',
        lead: "After taking that red pill, you start to feel a little strange. You go home and sit in your dingy kitchen, fascinated by your silverware.",
        body: "The world begins to warp around you. As you stare at the spoon, you start to realize that there is no spoon. In fact, there is no kitchen. There is no reality. A full-length mirror beside you begins to tremble like a miniature StarGate. It beckons you. Do you go Through the Looking Glass, or... do you want to just go play video games?",
        key: 3,
        isDeath: false,
        isWin: false,
        children: [ 6, 7 ],
        gchilds0: [ 10, 11 ],
        gchilds1: [ 12, 13 ]
    },
    node04: {
        image: Node4,
        title: 'Would You Like a Cookie?',
        subject: 'Ask for her help',
        lead: "The nice lady helps you in through the window. She invites you to stay awhile in her kitchen, which smells of fresh cookies. Should you be worried that she doesn't seem surprised to see you?",
        body: "You're grateful for the lady's help, but you're anxious to get back home. The lady is insistent that you try one of her cookies, and you don't want to be rude. You take a bite of a cookie. The lady watches you and smiles slowly. She doesn't seem so sweet anymore. You start to feel uneasy - do you tell yourself you're just being crazy, or do you spit out the cookie?",
        key: 4,
        isDeath: false,
        isWin: false,
        children: [ 8, 9 ],
        gchilds0: [ 14, 15 ],
        gchilds1: [ 0, 0 ]
    },
    node05: {
        image: Node5,
        title: 'Better Luck Next Time, Buttertoes',
        subject: 'Get yourself down',
        lead: "You don't want to explain to the lady how you got on the side of the building. You decide to climb down. Unfortunately, you left your climbing shoes in your other life, where you are a rugged outdoorsman instead of a hacker. Your shoe slips and you fall to your death.",
        key: 5,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node06: {
        image: Node6,
        title: 'I Know Kung Fu',
        subject: 'Go play video games',
        lead: "You ignore the creepy StarGate mirror and go play your favorite 1v1 fighting game instead. But as soon as you touch the controls, you get sucked into your TV. Morpheus is waiting for you across the dojo.",
        body: 'Morpheus shakes his head at you. "You were supposed to go through the mirror, genius," he said. "Maybe I\'m wrong about you being the Chosen One. Now you have to prove it to me with your kung fu skills!" You take a second and realize that you\'re probaby just hallucinating. Do you just go with it, or do you take a second to get a grip on reality?',
        key: 6,
        isDeath: false,
        isWin: false,
        children: [ 10, 11 ],
        gchilds0: [ 16, 17 ],
        gchilds1: [ 18, 19 ]
    },
    node07: {
        image: Node7,
        title: 'Sure thing, Alice...',
        subject: 'Go through the Looking Glass',
        lead: "You reach for the shimmering surface of the mirror. Your fingers pass through it like water... if water could suck you in like quicksand.",
        body: "You're not sure you're in for a Lewis Carroll experience just yet... maybe you just want to stick with bending spoons? Do you change your mind and pull back, or do you pull your guts together and push through?",
        key: 7,
        isDeath: false,
        isWin: false,
        children: [ 12, 13 ],
        gchilds0: [ 0, 0 ],
        gchilds1: [ 20, 21 ]
    },
    node08: {
        image: Node8,
        title: "I'm Allergic to Poison",
        subject: 'You spit out the cookie',
        lead: 'You may be paranoid, but you spit the cookie onto the floor. To your amazement, you see some of your blood there as well. The cookie was poisoned!',
        body: "",
        key: 8,
        isDeath: false,
        isWin: false,
        children: [ 14, 15 ],
        gchilds0: [ 0, 0 ],
        gchilds1: [ 0, 0 ]
    },
    node09: {
        image: Node9,
        title: 'One Crazy Cookie',
        subject: "You're crazy, Crazy.",
        lead: 'Surprise! It was a poisoned cookie. As the life chokes out of you, the lady stands over you and chuckles. "You should have taken the Red Pill, Neo." Then everything goes dark.',
        key: 9,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node10: {
        image: Node10,
        title: 'Node 10 title',
        subject: 'Node 10 subject',
        lead: "",
        body: 'Node 10 body',
        key: 10,
        isDeath: false,
        isWin: false,
        children: [ 16, 17 ]
    },
    node11: {
        image: Node11,
        title: 'Node 11 title',
        subject: 'Node 11 subject',
        body: 'Node 11 body',
        key: 11,
        isDeath: false,
        isWin: false,
        children: [ 18, 19 ]
    },
    node12: {
        image: Node12,
        title: 'Node 12 title',
        subject: 'Node 12 subject',
        body: 'Node 12 body',
        key: 12,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node13: {
        image: Node13,
        title: 'Node 13 title',
        subject: 'Node 13 subject',
        body: 'Node 13 body',
        key: 13,
        isDeath: false,
        isWin: false,
        children: [ 20, 21 ]
    },
    node14: {
        image: Node14,
        title: 'Node 14 title',
        subject: 'Node 14 subject',
        body: 'Node 14 body',
        key: 14,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node15: {
        image: Node15,
        title: 'Node 15 title',
        subject: 'Node 15 subject',
        body: 'Node 15 body',
        key: 15,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
    node16: {
        image: Node16,
        title: 'Node 16 title',
        subject: 'Node 16 subject',
        body: 'Node 16 body',
        key: 16,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
    node17: {
        image: Node17,
        title: 'Node 17 title',
        subject: 'Node 17 subject',
        body: 'Node 17 body',
        key: 17,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node18: {
        image: Node18,
        title: 'Node 18 title',
        subject: 'Node 18 subject',
        body: 'Node 18 body',
        key: 18,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node19: {
        image: Node19,
        title: 'Node 19 title',
        subject: 'Node 19 subject',
        body: 'Node 19 body',
        key: 19,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
    node20: {
        image: Node20,
        title: 'Node 20 title',
        subject: 'Node 20 subject',
        body: 'Node 20 body',
        key: 20,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node21: {
        image: Node21,
        title: 'Node 21 title',
        subject: 'Node 21 subject',
        body: 'Node 21 body',
        key: 21,
        isDeath: false,
        isWin: true,
        children: [ null ]
    }
}

// -------------------------------------------------
export default Stories
// -------------------------------------------------