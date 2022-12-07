class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let pagename = this.getAttribute('pagename') || "Home"
        this.innerHTML = '  <!-- Back to top button -->\n' +
            '  <div class="back-to-top"></div>\n' +
            '\n' +
            '  <header>\n' +
            '    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="300">\n' +
            '      <div class="container">\n' +
            '        <a href="#" class="navbar-brand">YA Lit <span class="text-primary">Final Project</span></a>\n' +
            '\n' +
            '        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
            '          <span class="navbar-toggler-icon"></span>\n' +
            '        </button>\n' +
            '\n' +
            '        <div class="navbar-collapse collapse" id="navbarContent">\n' +
            '          <ul class="navbar-nav ml-auto">\n' +
            '            <li class="nav-item' + (pagename === "Home" ? ' active">' : '">') +
            '              <a class="nav-link" href="index.html">Home</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item' + (pagename === "Data" ? ' active">' : '">')
            + '<a class="nav-link" href="data.html">Data</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item' + (pagename === "Process" ? ' active">' : '">') +
            '              <a class="nav-link" href="data_analysis.html">Process</a>\n' +
            '            </li>\n' +
            '            <li class="nav-item' + (pagename === "Research" ? ' active">' : '">') +
            '              <a class="nav-link" href="conclusion.html">Research</a>\n' +
            '            </li>\n' +
            '          </ul>\n' +
            '        </div>\n' +
            '\n' +
            '      </div>\n' +
            '    </nav>\n' +
            '\n' + (pagename !== "Home" ?
                '    <div class="container">\n' +
                '      <div class="page-banner">\n' +
                '        <div class="row justify-content-center align-items-center h-100">\n' +
                '          <div class="col-md-6">\n' +
                '            <nav aria-label="Breadcrumb">\n' +
                '              <ul class="breadcrumb justify-content-center py-0 bg-transparent">\n' +
                '                <li class="breadcrumb-item"><a href="index.html">Home</a></li>\n' +
                '                <li class="breadcrumb-item active">' + pagename + '</li>\n' +
                '              </ul>\n' +
                '            </nav>\n' +
                '            <h1 class="text-center">' + pagename + '</h1>\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '    </div>\n' :
                '<div class="container">\n' +
                '      <div class="page-banner home-banner">\n' +
                '        <div class="row align-items-center flex-wrap-reverse h-100">\n' +
                '          <div class="col-md-6 py-5 wow fadeInLeft">\n' +
                '            <h1 class="mb-4">Exploring Diversity in Popular YA Literature</h1>\n' +
                ' <p class="text-lg text-grey mb-5">Chloe Strandwold</p>\n' +
                '            \n' +
                '          </div>\n' +
                '          <div class="col-md-6 py-5 wow zoomIn">\n' +
                '            <div class="img-fluid text-center">\n' +
                '              <img src="../../assets/img/banner_image_1.svg" alt="">\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '    </div>') +
            '  </header>'
    }
}

customElements.define('header-component', Header);