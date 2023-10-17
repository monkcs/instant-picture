/* Copyright https://github.com/monkcs/. Licensed under the GNU General Public License 3.0 */

class InstantPicture extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });

        let style = document.createElement("link");
        style.href = "/custom-element/instant-picture/style.css";
        style.rel = "stylesheet";
        style.type = "text/css";
        shadow.appendChild(style);

        let font = document.createElement("link");
        font.href = "/custom-element/instant-picture/font.css";
        font.rel = "stylesheet";
        font.type = "text/css";
        shadow.appendChild(font);

        let image = document.createElement('slot');
        shadow.appendChild(image);

        let text = document.createElement('slot');
        text.name = "text";
        shadow.appendChild(text);
    }

    get unstyled() {
        return this.hasAttribute("unstyled");
    }

    set unstyled(value) {
        if (value == true) {
            this.setAttribute("unstyled", "");
        }
        else {
            this.removeAttribute("unstyled");
        }
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        this.setAttribute('type', value);
    }
}
customElements.define('instant-picture', InstantPicture);