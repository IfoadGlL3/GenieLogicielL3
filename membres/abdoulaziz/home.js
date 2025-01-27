const projets = [
    {
      titre: "Reussir en Philosophie",
      description: "Une application mobile pour soulager les élèves sur la méthodologie du commentaire et de la dissertation philosophique.",
      Technologies: "Node.JS, SQLite et Flutter",
      images: "images/rp.jpg",
    },
    {
      titre: "Kambba-Educ",
      description: "Une application mobile pour soulager les parents sur la communication avec les administrations scolaires et le suivi de leurs enfants à l'école.",
      Technologies: "Node.JS (Strapi), Firebase Cloud Messaging, MySQL, Flutter et React.JS",
      images: "images/km.jpg",
    },
    {
      titre: "AGRICOM",
      description: "Un site web pour communiquer sur les activités de la Direction Regionale de l'Agriculture du Centre-Est.",
      Technologies: "Node.JS (Strapi), MySQL et React.JS",
      images: "images/ag.jpg",
    },
  ];
  
  // Sélectionner le conteneur des cartes
  const projectsSection = document.querySelector(".groupe");
  
  // Générer les cartes avec `map`
  const cardsHTML = projets
    .map(
      (card) => `
      <div class="liste-element">
        <div class="card mb-3" style="max-width: 340px;">
      <div class="row g-0">
        <div class="col-md-4 card-img-container">
          <img src="${card.images}" class="img-fluid rounded-start" alt="${card.titre}" onclick="window.open('${card.images}', '_blank')" style="cursor: pointer;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${card.titre}</h5>
            <p class="card-text">${card.description}</p>
            <p class="card-text"><small class="text-body-secondary">${card.Technologies}</small></p>
          </div>
        </div>
      </div>
        </div>
    </div>
    `
    )
    .join("");
  
  // Insérer les cartes dans le conteneur
  projectsSection.innerHTML = cardsHTML;
  

  /* Parcous */
  const profilSection = document.querySelector(".profil");

  const cate_profil = `
  <div class="container">
      <div class="text-center py-5">
        <img src="images/profil.png" alt="" class="ui-w-100 rounded-circle">
        <div class="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
          <h4 class="font-weight-bold my-4">Sawadogo Abdoul Aziz</h4>
          <h6 class="font-weight-bold my-2">Developpeur full stack web et mobile</h4>

           <p>
                <div class="opacity-75 mb-4">
            Passionné de nouvelles technologies, je suis de cette jeune génération qui a vu 
l'inondation spectaculaire des smartphones dans le monde et leur apport 
considérable dans notre quotidien. Depuis cet avènement, un outil qui servait de 
divertissement s'est transformé en passion et en voulant comprendre, le 
fonctionnement de ces technologies, je me suis lancé dans l'informatique.Relever des défis et aller 
aux delà de mes limites c'est ce que j'ai toujours recherché pour repondre aux 
exigences de notre monde. Un monde qui évolue constamment.  </div>
        </div>
           </p>
           <a href="images/cv.pdf" download="cv.pdf" class="btn btn-success" >Télécharger mon CV</a>
        <div class="text-center pt-3">
          <a href="javascript:void(0)" class="btn icon-btn btn-twitter btn-round">
            <span class="ion ion-logo-twitter"></span>
          </a>
          &nbsp;
          <a href="javascript:void(0)" class="btn icon-btn btn-facebook btn-round">
            <span class="ion ion-logo-facebook"></span>
          </a>
          &nbsp;
          <a href="javascript:void(0)" class="btn icon-btn btn-instagram btn-round">
            <span class="ion ion-logo-instagram"></span>
          </a>
        </div>
      </div>
    </div>`





profilSection.innerHTML = cate_profil;

/*Pied de page*/

const PiedSection = document.querySelector(".PiedSection");

const cont_footer = 
`
<div class="container">
        <div class="row">
            <div class="col-md-5">
                <h5>Sawadogo Abdoul Aziz</h5>
                <div class="row">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li><a href="">Profil</a></li>
                            <li><a href="">Projets réalisés</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                        
                            <li><a href="">Developpement web</a></li>
                            <li><a href="">Developpement mobile</a></li>
                            <li><a href="">Technolgies</a></li>
                        </ul>
                    </div>
                </div>
                <ul class="nav">
                    <li class="nav-item"><a href="" class="nav-link pl-0"><i class="bi bi-facebook"></i></a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="bi bi-github"></i></a></li>
                </ul>
                <br>
            </div>
            <div class="col-md-2">
                <h5 class="text-md-right">Contactez moi </h5>
                <hr>
            </div>
            <div class="col-md-5">
                <form>
                    <fieldset class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="sawadogoabdoulaziz561@gmail.com">
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
`
PiedSection.innerHTML = cont_footer;


