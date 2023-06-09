const button = document.querySelector('.show-more')
const rowProjectsTwo = document.querySelector('.row-2')

rowProjectsTwo.style.display = 'none'


const showMore = () => {
    if(rowProjectsTwo.style.display === 'flex') {
        rowProjectsTwo.style.display = 'none'
        button.innerHTML = 'View more'
    } else if(rowProjectsTwo.style.display === 'none') {
        rowProjectsTwo.style.display = 'flex'
        button.innerHTML = 'View less'
    }
}




button.addEventListener('click', showMore)