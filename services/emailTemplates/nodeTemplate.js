// -------------------------------------------------
const keys = require('../../config/keys')
const Stories = require('../storyDB')
// -------------------------------------------------

function nodeTemplate (node) {
    function links (node) {
        let linksHTML = ''
        node.children.map((child) => {
            Object.values(Stories).forEach((story) => {
                if (story.key == child && story.isDeath !== true) {
                    const html = 
                        `<div>
                            <a href="${keys.redirectDomain}/api/nodes/${node.id}/${node.key}/${story.key}">
                                ${story.title}
                            </a>
                        </div>`
                    linksHTML += html
                } else if (story.key == child && story.isDeath === true) {
                    const html = 
                        `<div>
                            <a href="${keys.redirectDomain}/api/death/${node.id}/${node.key}/${story.key}">
                                ${story.title}
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
                    <h3>Continuing with our story...</h3>
                    <img 
                        src="${node.image}" 
                        alt="${node.title}"
                        title="${node.title}"
                        style="display:block; margin-right:auto; margin-left:auto"
                        width="300"
                        height="180"
                    />
                    <p>${node.body}</p>
                    ${links(node)}
                </div>
            </body>
        </html>
        `
    )
}

// -------------------------------------------------
module.exports = nodeTemplate
// -------------------------------------------------