/**
 * @class Modal
 */

export default class Modal extends HTMLElement{

    constructor(){
        super()

        //Shadow DOM
        this.modal = this.attachShadow({ mode : 'open'})
        //contenu de la boite modal
        this.modal.innerHTML = `
            <style>
                div{
                    display : flex;
                    background : rgba(157, 170, 42, 0.8);
                    align-items : center;
                    justify-content : center;
                    left : 0;
                    position : fixed;
                    top : 0;
                    z-index: 10000;
                    width : 100vw;
                    height : 100vh;
                    }
            </style>
            <div>Hello World</div>
        `
    }
}
