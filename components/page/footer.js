class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML='<footer class="page-footer">\n' +
            '    <div class="container">\n' +
            '      <div class="row mb-5">\n' +
            '        <div class="col py-3">\n' +
            '          <ul class="list-group ds-contributors-list">\n' +
            '            <li class="list-group-item">\n' +
            '              <div class="row">\n' +
            '                <div class="col">\n' +
            '                  Chloe Strandwold\n' +
            '                </div>\n' +
            '                <div class="col">\n' +
            '                  strandwold.c@northeastern.edu\n' +
            '                </div>\n' 
            '          </ul>\n' +
            '\n' +
            '        </div>\n' +
            '      </div>\n' +
            '\n' +
            '      <p class="text-center" id="copyright">Copyright &copy; 2020. This template design and develop by <a href="https://macodeid.com/" target="_blank">MACode ID</a></p>\n' +
            '    </div>\n' +
            '  </footer>'
    }
}

customElements.define('footer-component', Footer);