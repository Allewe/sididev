/**
 * @class Modal
 *
 */

export default class Modal extends HTMLElement{
    
        

    constructor(){
        super()

        //Shadow DOM
        this.modal = this.attachShadow({ mode : 'open'})
        
        //contenu de la boite modal
        //recuperation des items 
        this.jsModal = document.querySelector(".header-left")
        console.log(this.jsModal.innerHTML)
        
        
        
        

        this.modal.innerHTML = `
            <style>
                div{
                    display : flex;
                    background : rgba(0, 0, 0, 0.5);
                    align-items : center;
                    justify-content : center;
                    left : 0;
                    position : fixed;
                    top : 0;
                    z-index: 10000;
                    width : 100vw;
                    height : 100vh;
                    flex-direction : column;
                    }
                    li{
                        list-style : none;
                    }
            </style>
            <div>
                ${this.jsModal.innerHTML}
            </div>
        `
    }
   
}
