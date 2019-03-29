// -------------------------------------------------

const Stories = {
    node01: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node1,
        title: 'Node 1 title',
        subject: 'Node 1 subject',
        body: 'Node 1 body',
        key: 1,
        isDeath: false,
        isWin: false,
        children: [ 2, 3 ]
    },
    node02: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node2,
        title: 'Node 2 title',
        subject: 'Node 2 subject',
        body: 'Node 2 body',
        key: 2,
        isDeath: false,
        isWin: false,
        children: [ 4, 5 ]
    },
    node03: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node3,
        title: 'Node 3 title',
        subject: 'Node 3 subject',
        body: 'Node 3 body',
        key: 3,
        isDeath: false,
        isWin: false,
        children: [ 6, 7 ]
    },
    node04: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node4,
        title: 'Node 4 title',
        subject: 'Node 4 subject',
        body: 'Node 4 body',
        key: 4,
        isDeath: false,
        isWin: false,
        children: [ 8, 9 ]
    },
    node05: {
        url: 'https://raw.githubusercontent.com/schizaetrix/story/master/client/src/assets/images/dont-fall-neo.jpg',
        // image: Node5,
        title: 'Node 5 title',
        subject: 'Node 5 subject',
        body: 'Node 5 body',
        key: 5,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node06: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node6,
        title: 'Node 6 title',
        subject: 'Node 6 subject',
        body: 'Node 6 body',
        key: 6,
        isDeath: false,
        isWin: false,
        children: [ 10, 11 ]
    },
    node07: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node7,
        title: 'Node 7 title',
        subject: 'Node 7 subject',
        body: 'Node 7 body',
        key: 7,
        isDeath: false,
        isWin: false,
        children: [ 12, 13 ]
    },
    node08: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node8,
        title: 'Node 8 title',
        subject: 'Node 8 subject',
        body: 'Node 8 body',
        key: 8,
        isDeath: false,
        isWin: false,
        children: [ 14, 15 ]
    },
    node09: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node9,
        title: 'Node 9 title',
        subject: 'Node 9 subject',
        body: 'Node 9 body',
        key: 9,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node10: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node10,
        title: 'Node 10 title',
        subject: 'Node 10 subject',
        body: 'Node 10 body',
        key: 10,
        isDeath: false,
        isWin: false,
        children: [ 16, 17 ]
    },
    node11: {
        url: 'https://raw.githubusercontent.com/schizaetrix/story/master/client/src/assets/images/dodging-bullets.jpg',
        // image: Node11,
        title: 'Node 11 title',
        subject: 'Node 11 subject',
        body: 'Node 11 body',
        key: 11,
        isDeath: false,
        isWin: false,
        children: [ 18, 19 ]
    },
    node12: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node12,
        title: 'Node 12 title',
        subject: 'Node 12 subject',
        body: 'Node 12 body',
        key: 12,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node13: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node13,
        title: 'Node 13 title',
        subject: 'Node 13 subject',
        body: 'Node 13 body',
        key: 13,
        isDeath: false,
        isWin: false,
        children: [ 20, 21 ]
    },
    node14: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node14,
        title: 'Node 14 title',
        subject: 'Node 14 subject',
        body: 'Node 14 body',
        key: 14,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node15: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node15,
        title: 'Node 15 title',
        subject: 'Node 15 subject',
        body: 'Node 15 body',
        key: 15,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
    node16: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node16,
        title: 'Node 16 title',
        subject: 'Node 16 subject',
        body: 'Node 16 body',
        key: 16,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
    node17: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node17,
        title: 'Node 17 title',
        subject: 'Node 17 subject',
        body: 'Node 17 body',
        key: 17,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node18: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node18,
        title: 'Node 18 title',
        subject: 'Node 18 subject',
        body: 'Node 18 body',
        key: 18,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node19: {
        url: 'https://raw.githubusercontent.com/schizaetrix/story/master/client/src/assets/images/crypto-agents.jpg',
        // image: Node19,
        title: 'Node 19 title',
        subject: 'Node 19 subject',
        body: 'Node 19 body',
        key: 19,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
    node20: {
        url: 'https://dl.dropboxusercontent.com/s/ginycdlbo5b8aky/Node1.jpg',
        // image: Node20,
        title: 'Node 20 title',
        subject: 'Node 20 subject',
        body: 'Node 20 body',
        key: 20,
        isDeath: true,
        isWin: false,
        children: [ null ]
    },
    node21: {
        url: 'https://raw.githubusercontent.com/schizaetrix/story/master/client/src/assets/images/building-jump.jpg',
        // image: Node21,
        title: 'Node 21 title',
        subject: 'Node 21 subject',
        body: 'Node 21 body',
        key: 21,
        isDeath: false,
        isWin: true,
        children: [ null ]
    },
}

// -------------------------------------------------
module.exports = Stories
// -------------------------------------------------