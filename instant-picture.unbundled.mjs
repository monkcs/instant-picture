/* Copyright https://github.com/monkcs/. Licensed under the GNU General Public License 3.0 */

class InstantPicture extends HTMLElement
{
    constructor()
    {
        super();
        let shadow = this.attachShadow({ mode: 'open' });

        let style = document.createElement('style');
        style.textContent = `
        :host {
            background-color: white;
            display: none;
            overflow: hidden;
            border-radius: 1%;
            margin: 0.4rem;
            font-family: 'Just Another Hand', cursive;
        
            transition: all 0.3s;
        }
        
        :host([type="i-type"]),
        :host([type="600"]),
        :host([type="sx-70"]),
        :host([type="go"]),
        :host([type="mini"]),
        :host([type="square"]),
        :host([type="wide"]) {
            display: inline-block;
        }
        
        :host([type="i-type"]),
        :host([type="600"]),
        :host([type="sx-70"]),
        :host([type="go"]) {
            aspect-ratio: 0.82;
        }
        
        :host([type="mini"]) {
            aspect-ratio: 0.63;
        }
        
        :host([type="square"]) {
            aspect-ratio: 0.84;
        }
        
        :host([type="wide"]) {
            aspect-ratio: 1.26;
        }
        
        ::slotted(:not([slot=text])) {
            width: 100%;
            border-radius: 1%;

            color: white;
            font-family: sans-serif;
            font-size: 1rem;
            text-align: center;
        }
        
        :host(:not([unstyled])) ::slotted(:not([slot=text])) {
            filter: blur(0.3px) brightness(120%) contrast(90%) grayscale(2%) saturate(105%);
        }
        
        :host([type="i-type"])> ::slotted(:not([slot=text])),
        :host([type="600"])> ::slotted(:not([slot=text])),
        :host([type="sx-70"])> ::slotted(:not([slot=text])),
        :host([type="go"])> ::slotted(:not([slot=text])),
        :host([type="square"])> ::slotted(:not([slot=text])) {
            aspect-ratio: 1;
        }
        
        :host([type="mini"])> ::slotted(:not([slot=text])) {
            aspect-ratio: 0.74;
        }
        
        :host([type="wide"])> ::slotted(:not([slot=text])) {
            aspect-ratio: 1.6;
        }
        
        slot:not([name=text]) {
            background-color: #120051;
            border-radius: 1.1%;
            display: flex;
        }
        
        :host([type="i-type"])>slot:not([name=text]),
        :host([type="600"])>slot:not([name=text]),
        :host([type="sx-70"])>slot:not([name=text]),
        :host([type="go"])>slot:not([name=text]) {
            margin-top: 5%;
            margin-left: 5%;
            width: 90%;
            aspect-ratio: 1;
        }
        
        :host([type="mini"])>slot:not([name=text]) {
            margin-top: 6%;
            margin-left: 6%;
            width: 88%;
            aspect-ratio: 0.74;
        }
        
        :host([type="square"])>slot:not([name=text]) {
            margin-top: 9%;
            margin-left: 6%;
            width: 88%;
            aspect-ratio: 1;
        }
        
        :host([type="wide"])>slot:not([name=text]) {
            margin-top: 6%;
            margin-left: 4%;
            width: 92%;
            aspect-ratio: 1.6;
        }
        
        ::slotted([slot=text]) {
            color: black;
            font-family: inherit;
            font-size: inherit;
            text-align: center;
        }
        
        :host([type="i-type"])> ::slotted([slot=text]),
        :host([type="600"])> ::slotted([slot=text]),
        :host([type="sx-70"])> ::slotted([slot=text]),
        :host([type="go"])> ::slotted([slot=text]) {
            margin-top: 2%;
            margin-left: 5%;
            width: 90%;
        }
        
        :host([type="mini"])> ::slotted([slot=text]) {
            margin-top: 2%;
            margin-left: 6%;
            width: 88%;
        }
        
        :host([type="square"])> ::slotted([slot=text]) {
            margin-top: 2%;
            margin-left: 6%;
            width: 88%;
        }
        
        :host([type="wide"])> ::slotted([slot=text]) {
            margin-top: 2%;
            margin-left: 4%;
            width: 92%;
        }`;
        shadow.appendChild(style);

        let image = document.createElement('slot');
        shadow.appendChild(image);

        let text = document.createElement('slot');
        text.name = "text";
        shadow.appendChild(text);
    }

    get unstyled()
    {
        return this.hasAttribute("unstyled");
    }

    set unstyled(value)
    {
        if (value == true)
        {
            this.setAttribute("unstyled", "");
        }
        else
        {
            this.removeAttribute("unstyled");
        }
    }

    get type()
    {
        return this.getAttribute('type');
    }

    set type(value)
    {
        this.setAttribute('type', value);
    }
}
customElements.define('instant-picture', InstantPicture);