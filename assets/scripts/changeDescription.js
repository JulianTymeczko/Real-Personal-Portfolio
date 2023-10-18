const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' JavaScript '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
        if(nameCard === '.bootstrap') {
            cardName.innerHTML = ' Bootstrap '
        }
       
        if (nameCard === '.react'){
            cardName.innerHTML = ' React '
        } 
        
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* place your cursor over one of these categories *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'For a full list of skills and tools check out my resume.'
)

changeDescription(
    '.css',
    'For a full list of skills and tools check out my resume.'
)

changeDescription(
    '.js',
    'For a full list of skills and tools check out my resume.'
)

changeDescription(
    '.git',
    'For a full list of skills and tools check out my resume.'
)
changeDescription(
    '.react',
    'For a full list of skills and tools check out my resume.'
)
changeDescription(
    '.bootstrap',
    'For a full list of skills and tools check out my resume.'
)

