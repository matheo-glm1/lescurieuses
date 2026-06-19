// Shared nav HTML — injected by each page
const NAV_HTML = `
<nav id="navbar">
  <a href="index.html" class="nav-logo">Les Curieuses</a>
  <ul class="nav-links" id="nav-links">
    <li><a href="index.html">Accueil</a></li>
    <li><a href="programme.html">Le programme</a></li>
    <li><a href="equipe.html">L'équipe</a></li>
    <li><a href="impact.html">Notre impact</a></li>
    <li><a href="partenaire.html">Partenaire</a></li>
    <li><a href="don.html">Faire un don</a></li>
    <li><a href="contact.html" class="nav-cta">Nous rejoindre</a></li>
  
  </ul>
  <button class="burger" id="burger" aria-label="Menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-logo">Les Curieuses </div>
    </div>
    <div class="footer-col">
      <h4>Programme</h4>
      <ul>
        <li><a href="programme.html">Comment ça marche</a></li>
        <li><a href="programme.html#leviers">Nos 3 leviers</a></li>
        <li><a href="programme.html#domaines">Les domaines</a></li>
        <li><a href="programme.html#modele">Notre modèle</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>À propos</h4>
      <ul>
        <li><a href="equipe.html">L'équipe</a></li>
        <li><a href="impact.html">Notre impact</a></li>
        <li><a href="impact.html#chiffres">Les chiffres</a></li>
        <li><a href="impact.html#temoignages">Témoignages</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Rejoindre</h4>
      <ul>
        <li><a href="contact.html">Accueillir une intervention</a></li>
        <li><a href="contact.html#partenaire">Devenir partenaire</a></li>
        <li><a href="contact.html#intervenir">Intervenir</a></li>
        <li><a href="mailto:contact@lescurieuses.fr">Contact direct</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="footer-copy">© 2026 Les Curieuses. Tous droits réservés.</p>
    <div class="footer-legal">
      <a href="#">Mentions légales</a>
      <a href="#">Politique de confidentialité</a>
    </div>
  </div>
</footer>`;

document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
