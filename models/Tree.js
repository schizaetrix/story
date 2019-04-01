// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// -------------------------------------------------
const Player = require('./Player')
// -------------------------------------------------

const treeSchema = new Schema({
    treeSession: Number,
    gameOn: {
        type: Boolean,
        default: false
    },
    playerOne: {
        player: [Player],
        1: {
            isOpen: {
                type: Boolean,
                default: true
            },
            hasVisited: {
                type: Boolean,
                default: true
            }
        },
        2: {
            isOpen: {
                type: Boolean,
                default: true
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        3: {
            isOpen: {
                type: Boolean,
                default: true
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        4: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        5: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        6: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        7: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        8: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        9: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        10: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        11: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        12: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        13: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        14: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        15: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        16: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        17: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        18: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        19: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        20: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        21: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        }
    },
    playerTwo: {
        player: [Player],
        1: {
            isOpen: {
                type: Boolean,
                default: true
            },
            hasVisited: {
                type: Boolean,
                default: true
            }
        },
        2: {
            isOpen: {
                type: Boolean,
                default: true
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        3: {
            isOpen: {
                type: Boolean,
                default: true
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        4: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        5: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        6: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        7: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        8: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        9: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        10: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        11: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        12: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        13: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        14: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        15: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        16: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        17: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        18: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        19: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        20: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        },
        21: {
            isOpen: {
                type: Boolean,
                default: false
            },
            hasVisited: {
                type: Boolean,
                default: false
            }
        }
    }
})

// -------------------------------------------------
mongoose.model('trees', treeSchema)
// -------------------------------------------------