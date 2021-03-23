import Modal from './components/modal.js'


//custum element
customElements.define('modal-box', Modal )



document.querySelector('#modal').addEventListener('click', ()=>{
    //ajout de la boite modal 
    document.body.appendChild(new Modal)
})