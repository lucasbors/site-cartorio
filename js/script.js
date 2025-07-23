// Cabeçalho e Rodapé
const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
    <nav>
            <a class="logo" href="./index.html"><img src="images/logo.png" alt="logo_cartorio"></a>
            <div class="mobile-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-list">
                <li><a href="./index.html">Início</a></li>
                <li><a href="./contato.html">Contato</a></li>
                <li><a href="./trabalhe-conosco.html">Trabalhe Conosco</a></li>
                <li><a href="./politica-de-privacidade.html">Políticas de Privacidade</a></li>
            </ul>
    </nav>
`;

footer.innerHTML = `
<div id="footer_content">
            <div id="footer_contacts">
                <h1><img src="images/logo.png" alt="logo_cartorio"></h1>
                <h3 class="cab0">Entre em contato:</h3>
                
                <div id="footer_social_media">
                    <a href="mailto:lucas@cartoriosp.com.br" class="footer-link" id="email">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
    
                    <!-- <a href="#" class="footer-link" id="facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a> -->
    
                    <a href="https://api.whatsapp.com/send?phone=551111223344" class="footer-link" id="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div> 
            
            <ul class="footer-list">
                <li>
                    <h3 class="cab1">Ajuda</h3>
                </li>
                <li>
                    <a href="./politica-de-privacidade.html" class="footer-link">Políticas de Privacidade</a>
                </li>
                <li>
                    <a href="./trabalhe-conosco.html" class="footer-link">Trabalhe Conosco</a>
                </li>
                <li>
                    <a href="./contato.html" class="footer-link">Contato</a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3 class="cab2">Serviços Online</h3>
                </li>
                <li>
                    <a href="https://registradores.onr.org.br/CertidaoDigital/frmPedidosCertidao.aspx?from=menu&digital=1" target="_blank" rel="noopener noreferrer" class="footer-link">Certidão de Matrícula</a>
                </li>
                <li>
                    <a href="https://registradores.onr.org.br/eProtocolo/DefaultAC.aspx" target="_blank" rel="noopener noreferrer" class="footer-link">Protocolo Eletrônico</a>
                </li>
                <li>
                    <a href="https://registradores.onr.org.br/servicos/actitulo/frmAcompanhamentoTitulo.aspx" target="_blank" rel="noopener noreferrer" class="footer-link">Acompanhamento de Protocolo Físico</a>
                </li>
            </ul>
        </div>

        <div id="footer_copyright">
            &#169
            2025 - Cartório de São Paulo - Todos os direitos reservados
        </div>
`;

// Menu de Navegação Mobile
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
    return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu" ,
    ".nav-list" ,
    ".nav-list li" ,
);
mobileNavbar.init();

//Scroll
window.sr = ScrollReveal({ reset: true});

// index.html
sr.reveal('.cta-scheduling', {duration: 1000});

sr.reveal('.address', {duration: 1000});

sr.reveal('.online-services', {duration: 1000});

sr.reveal('.useful-services', {duration: 1000});

sr.reveal('.information', {duration: 1000});

// contato.html
sr.reveal('.contact', {duration: 1000});

sr.reveal('.container-contact', {duration: 1000});

sr.reveal('.container-time', {duration: 1000});

// trabalhe-conosco
sr.reveal('.work', {duration: 1000});

// politicas-de-privacidade.html
sr.reveal('.privacy-policy-title', {duration: 1000});

// competencia.html
sr.reveal('.competence', {duration: 1000});

// agendamento.html
sr.reveal('.scheduling', {duration: 1000});


