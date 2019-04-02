// -------------------------------------------------
const keys = require('../../config/keys')
const Stories = require('../storyDB')
// -------------------------------------------------

function nodeTemplate (node) {
    function links (node) {
        let linksHTML = ''
        node.children.map((child) => {
            Object.values(Stories).forEach((story) => {
                let gchilds = []
                if (story.key == child && !story.isDeath && !story.isWin) {
                    if (child == node.children[0]) {
                        gchilds = node.gchilds0
                    } else if (child == node.children[1]) {
                        gchilds = node.gchilds1
                    }
                    const html = 
                        `<div class="col">
                            <a href="${keys.redirectDomain}/api/nodes/${node.treeSession}/${node.id}/${node.key}/${story.key}/${gchilds[0]}/${gchilds[1]}/path">
                                ${story.subject}
                            </a>
                        </div>`
                    linksHTML += html
                } else if (story.key == child && story.isDeath === true) {
                    const html = 
                        `<div class="col">
                            <a href="${keys.redirectDomain}/api/nodes/${node.treeSession}/${node.id}/${node.key}/${story.key}/death">
                                ${story.subject}
                            </a>
                        </div>`
                    linksHTML += html
                } else if (story.key == child && story.isWin === true) {
                    const html = 
                        `<div class="col">
                            <a href="${keys.redirectDomain}/api/nodes/${node.treeSession}/${node.id}/${node.key}/${story.key}/win">
                                ${story.subject}
                            </a>
                        </div>`
                    linksHTML += html
                }
            })
        })
        return linksHTML
    }
    return (
        `<html>
            <body>
                <div style="text-align: center;">
                    <h3>${node.title}</h3>
                    <img 
                        src="${node.image}" 
                        alt="${node.title}"
                        title="${node.title}"
                        style="display:block; margin-right:auto; margin-left:auto; border-radius:10%; padding:1px; border:2px solid #558b2f"
                        width="300"
                        height="180"
                    />
                    <p>${node.body}</p>
                    <div class="row">
                        ${links(node)}
                    </div>
                </div>
            </body>
        </html>
        `
    )
}

// -------------------------------------------------
module.exports = nodeTemplate
// -------------------------------------------------