const filterElement = document.querySelector('header input')
const trs = document.querySelectorAll('.filter tr')

filterElement.addEventListener('input', filterTrs)

function filterTrs(){
    if(filterElement.value != ''){
        for (let tr of trs){
            let title = tr.querySelector('tr')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if(!title.includes(filterText)){
                tr.style.display = "none"
            }
            else{
                tr.style.display = "block"
            }
        }
    }else{
        for (let card of cards){
            tr.style.display = "block"
        }
    }
}