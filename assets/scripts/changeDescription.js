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
        if(nameCard === '.responsive') {
            cardName.innerHTML = ' Responsiveness '
        } 
        if(nameCard === '.accessibility') {
            cardName.innerHTML = ' Accessibility '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* place your cursor over one of these categories *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.html',
    'Using semantic elements to structure layouts, forms, tables, and many different types of crucial basics of web development.'
)

changeDescription(
    '.css',
    'Using box model, CSS grid, flexbox, pseudo-classes, animations and Bootstrap.'
)

changeDescription(
    '.js',
    'Traversing the DOM, using libraries and frameworks, and other concepts like asynchronous JavaScipt.'
)

changeDescription(
    '.git',
    'Version control, Git commands, and collaborating with other developers.'
)

changeDescription(
    '.responsive',
    'Understanding responsive design, breakpoints and ensuring websites adapt gracefully to various screen sizes and devices.' 
)

changeDescription(
    '.accessibility',
    'Best practices; such as semantic elements and using attributes for screen readers and for boosting the SEO.'   
)
