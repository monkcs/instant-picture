/* Copyright https://github.com/monkcs/. Licensed under the GNU General Public License 3.0 */

var url = new URL(import.meta.url);
url.pathname = url.pathname.substring(0, url.pathname.lastIndexOf('/'));

let font = document.createElement("link");
font.href = url.href + "font.css";
font.rel = "stylesheet";
font.type = "text/css";
document.head.appendChild(font);

class InstantPicture extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });

        let style = document.createElement("link");
        style.href = url.href + "style.css";
        style.rel = "stylesheet";
        style.type = "text/css";
        shadow.appendChild(style);

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