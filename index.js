import {getProvincia, getRama} from './firebase.js'

const selectRama = document.getElementById('rama')
window.addEventListener('DOMContentLoaded', async ()=>{
    const querySnapshot = await getRama();
    let html = ''
    querySnapshot.forEach(doc => {
        //console.log(doc.data())
        const rama = doc.data()
        html +=
        `<option value="">${rama.rama1}</option>
        <option value="">${rama.rama2}</option>`
    
    })

    selectRama.innerHTML = html
})

const selectProvincia = document.getElementById('provincia')
window.addEventListener('DOMContentLoaded', async() =>{
    const querySnapshot = await getProvincia();
    let html = ''
    querySnapshot.forEach(doc => {
        console.log(doc.data())
        const provincia = doc.data()
        html +=
        `<option value="">${provincia.Provincia1}</option>
        <option value="">${provincia.Provincia2}</option>`
    })
    selectProvincia.innerHTML = html;
})
