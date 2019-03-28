// -------------------------------------------------
const keys = require('../../config/keys')
// -------------------------------------------------

function nodeTemplate (node) {
    return `
    <html>
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
                <div>
                    <a href="${keys.redirectDomain}/api/nodes/${node.id}/${node.choiceA}">
                        ${node.choiceA}
                    </a>
                    <a href="${keys.redirectDomain}/api/nodes/${node.id}/${node.choiceB}">
                        ${node.choiceB}
                    </a>
                </div>
            </div>
        </body>
    </html>
    `
}

// -------------------------------------------------
module.exports = nodeTemplate
// -------------------------------------------------