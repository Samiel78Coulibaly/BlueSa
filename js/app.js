new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, title: 'Vetement Dioguine blanc', description: 'Vetement tres confortable.', price: '20 000', image: 'images/Dioguine4.jpg'},
      { id: 2, title: 'Vetement Dioguine bleu fooncé', description: 'vetement tres elegant.', price: '20 000', image: 'images/Dioguine6.jpg' },
      { id: 3, title: 'Vetement Dioguine noir blanc', description: 'Solide et tendance.', price: '20 000', image: 'images/Dioguine2.jpg' },
      { id: 4, title: 'Vetement Dioguine noir', description: 'Compacte, très special.', price: '20 000', image: 'images/Dioguine1.jpg' },
      { id: 5, title: 'Chausure slip-on', description: 'Elegante, tres confortable.', price: '18 000', image: 'images/slip-on.jpg' },
      { id: 6, title: 'Chausure sneakers', description: 'Protège votre elegance.', price: '18 000', image: 'images/sneakers.jpg' },
      { id: 7, title: 'Chausure sneakers', description: 'Très propre.', price: '18 000', image: 'images/sneakers .jpg' },
      { id: 8, title: 'Chausure sandales', description: 'Chausure homme de qualité .', price: '17 500', image: 'images/sandale.jpg' },
      { id: 9, title: 'Montre Poedagar 996L', description: 'Montre de qualité.', price: '15 000', image: 'images/Montre.jpg' },
      { id: 10, title: 'Montre Omega Seamaster', description: 'Collection de fiabilité.', price: '15 000', image: 'images/Montre9.jpg' },
      { id: 11, title: 'Montre Poedagar 970', description: 'Montre de luxe.', price: '15 000', image: 'images/Montre3.jpg' },
      { id: 12, title: 'Montre Poedagar 996', description: 'Montre résistant a eau.', price: '15 000', image: 'images/Montre6.jpg' },
      { id: 13, title: 'Montre Poedagar 996', description: 'Dotée un mouvement a quartz.', price: '15 000', image: 'images/Montre7.jpg' },
      { id: 14, title: 'Montre Breitling', description: 'Conçu pour homme et femme.', price: '15 000', image: 'images/Montres (2).jpg' },
      { id: 15, title: 'Sac de Bureau', description: 'Protège vos document et surtout garanti elegance.', price: '22 000', image: 'images/Sacs.jpg' },
      { id: 16, title: 'Sac de Bureau', description: 'Sac de voyage eleve elegance.', price: '22 000', image: 'images/Sac2.jpg' },
      { id: 17, title: 'T-shirt orange', description: 'Style confortable, ideal pour les activité de loisir.', price: '13 000', image: 'images/T-shirt1.jpg' },
      { id: 18, title: 'T-shirt noir blanc', description: 'Elegance au rend-vous.', price: '13 000', image: 'images/T-shirt2.jpg' },
      { id: 19, title: 'T-shrit noir', description: 'Confirme votre propre style vestimentaire.', price: '13 000', image: 'images/t-shirt.jpg' },
      { id: 20, title: 'Chausure Timberland noir', description: 'Marque americaine de qualté et durable.', price: '18 000', image: 'images/Timberland10.jpg' },
      { id: 21, title: 'Chausure Timberland gris', description: 'Peuvent etre portées avec different diffents styles de vetement.', price: '18 000', image: 'images/Timberland6.jpg' },
      { id: 22, title: 'Chausure Timberland bleu marine', description: 'Conçues pour etre imperéable a eau.', price: '18 000', image: 'images/sneakers.jpg' },
      { id: 23, title: 'Chausure Timberland ', description: 'Style conditioné pour les elegant.', price: '18 000', image: 'images/Timberland .jpg' },
      { id: 24, title: 'Chausure Timberland blanc', description: 'Très confortable et adaptable a tout endroit.', price: '18 000', image: 'images/Timberland .jpg' },
      { id: 25, title: 'Chausure DIOXADOP', description: 'Conçue dans un style Y2K combinant esthetique et confort.', price: '17 000', image: 'images/DIOXADOP.jpg' },
      { id: 26, title: 'Chausure Dioxadop', description: 'Très propre car sa confère la stabilité.', price: '17 000', image: 'images/Dioxadop1.jpg' },
      { id: 27, title: 'Chausure Railand', description: 'Conçue pour un usage quotidien, offrent a la fois style et soutien.', price: '17 000', image: 'images/Railand2.jpg' },
      { id: 28, title: 'Chemise', description: 'Homme et femme peuvent portée.', price: '10 000', image: 'images/Chemise .jpg' },
      { id: 29, title: 'Chemise', description: 'Très propre et très confortable.', price: '10 000', image: 'images/Chemise.jpg' },
      { id: 30, title: 'Chemise', description: 'Specialement conçue pour etre elegant.', price: '10 000', image: 'images/Chemise3.jpg' },
      { id: 31, title: 'Chemise', description: 'choisissez car elle est adaptable a tout les saison.', price: '10 000', image: 'images/Chemise4.jpg' },
      { id: 32, title: 'Chemise', description: 'Couleurs orange qui fait une fois de plus la difference.', price: '10 000', image: 'images/Chemise5.jpg' },
      { id: 33, title: 'Complet de sport', description: 'Elegance est au terme.', price: '10 000', image: 'images/Chemises2.jpg' },
      { id: 34, title: 'Complet de sport', description: 'Le confort est au rend-vous.', price: '12 000', image: 'images/Complet1.jpg' },
      { id: 35, title: 'Complet de sport', description: 'Couleur blanc sale tres impecable .', price: '12 000', image: 'images/Diogines15.jpg' },
      { id: 36, title: 'Complet de sport', description: 'Très bien structure et de bonne qualité.', price: '12 000', image: 'images/Dioguine8.jpg' },
      { id: 37, title: 'Complet de sport', description: 'De couleur noir et adaptable a tout endroit.', price: '12 000', image: 'images/Dioguine10.jpg' },
      { id: 38, title: 'Complet de sport', description: 'Une des couleurs tres rare car le gris a toujour été a la hauteur.', price: '12 000', image: 'images/Dioguine16.jpg' },
      { id: 39, title: 'Complet de sport', description: 'De couleur vert et bien impresionnant .', price: '12 000', image: 'images/Dioguine18.jpg' },
      { id: 40, title: 'Complet de sport', description: 'De couleur noir et tres bien produit.', price: '12 000', image: 'images/Dioguines .jpg' },
      { id: 41, title: 'Complet de sport', description: 'Couleur orange qui est une fois de plus impresionnant.', price: '12 000', image: 'images/Dioguines6.jpg' },
      { id: 42, title: 'Complet de sport', description: 'De couleur bleu fonce qui inpire la vie.', price: '12 000', image: 'images/Dioguines11.jpg' },
      { id: 43, title: 'Complet de sport', description: 'Très cool pour un gentlemen.', price: '12 000', image: 'images/Dioguines12.jpg' },
      { id: 44, title: 'Complet de sport', description: 'De couleur rouge très inspirant.', price: '12 000', image: 'images/Dioguines13.jpg' },
      { id: 45, title: 'Complet de sport', description: 'Etre elegant ma passion.', price: '12 000', image: 'images/Dioguines14.jpg' },
      { id: 46, title: 'Complet de sport', description: 'Le plus difficile est que ton choix tombe la-dessus et apres tu sentira.', price: '12 000', image: 'images/Dioguines20.jpg' },
      { id: 47, title: 'Complet de sport', description: 'Le plus populaire.', price: '12 000', image: 'images/Dioguines37.jpg' },
      { id: 48, title: 'Complet de sport', description: 'Nike de couleur noir.', price: '12 000', image: 'images/Dioguines34.jpg' },
      { id: 49, title: 'Complet de sport', description: 'Oh baih ouf que de bonne qualité.', price: '12 000', image: 'images/Dioguines32.jpg' },
      { id: 50, title: 'Complet de sport', description: 'A ton rythme ma passion .', price: '12 000', image: 'images/Dioguines36.jpg' },
      { id: 51, title: 'Complet de sport', description: 'Impecable.', price: '13 000', image: 'images/Dioguines23.jpg' },
      { id: 52, title: 'Dioguines', description: 'Calme si doue.', price: '13 000', image: 'images/Dioguines24.jpg' },
      { id: 53, title: 'Dioguines', description: 'Impecable.', price: '13 000', image: 'images/Dioguines23.jpg' },
      { id: 54, title: 'Dioguinest', description: 'Populaire.', price: '13 000', image: 'images/Dioguines29.jpg' },
      { id: 55, title: 'Dioguines', description: 'Exaltant.', price: '13 000', image: 'images/Dioguines31.jpg' },
      { id: 56, title: 'Dioguines', description: 'Impresionnant.', price: '19 000', image: 'images/Dioguine9.jpg' },
      { id: 57, title: 'Dioguines', description: 'Impecable.', price: '19 000', image: 'images/Dioguine30.jpg' },
      { id: 58, title: 'Soulier Berlti', description: 'Une totalitée de confort.', price: '22 000', image: 'images/Berlti5.jpg' },
      { id: 59, title: 'Soulier Berlti', description: 'La performence de la durabilité est au rend-vous.', price: '22 000', image: 'images/Berlti3.jpg' },
      { id: 60, title: 'Soulier Berlti', description: 'Sont plusque un accessoire.', price: '22 000', image: 'images/Berlti2.jpg' },
      { id: 61, title: 'Soulier Berlti', description: 'Completer sont style avec elegance et durabilité.', price: '22 000', image: 'images/Berlti1.jpg' },
      { id: 62, title: 'Soulier Berlti', description: 'un chef parmis temp autres.', price: '22 000', image: 'images/Berlti.jpg' },
      {id: 63, title: 'Mocassin timberland', description: 'Fabriquée en nubuck,très propre et adaptable a tout endroit.', price: '18 500', image: 'images/Timberland-mo.jpg' },
      {id: 64, title: 'Mocassin timberland', description: 'Moccassins Timberland sont un execelent choix.', price: '18 500', image: 'images/Timberland-moc.jpg' },
      {id: 65, title: 'Timberland', description: 'Style unique.', price: '18 500', image: 'images/Timberland-m.jpg' },
      {id: 66, title: 'Mocassin timberland', description: 'Très cool.', price: '18 500', image: 'images/Timberland-mo1.jpg' },
      {id: 67, title: 'Mocassin timberland', description: 'Mocassins Timberland élégants en cuir véritable.', price: '18 500', image: 'images/Timberland-mo2.jpg' },
      {id: 68, title: 'Mocassin timberland', description: 'Confort et style réunis dans ce modele iconique.', price: '18 500', image: 'images/Timberland-mo3.jpg' },
      {id: 69, title: 'Mocassin timberland', description: 'Semelle souple, finition soigné.', price: '18 500', image: 'images/Timberland-mo4.jpg' },
      {id: 70, title: 'Mocassin timberland', description: 'Pour vos journéé qctives ou vos sorties stylées cùest un bon choix.', price: '18 500', image: 'images/Timberland-mo5.jpg' },
      {id: 71, title: 'Mocassin timberland', description: 'Disign sobre et raffiné, ideal pour tout les saisons.', price: '18 500', image: 'images/Timberland-mo6.jpg' },
      {id: 72, title: 'Mocassin timberland', description: 'Mocassin en cuir souple, respirant et durable.', price: '18 500', image: 'images/Timberland-mo7.jpg' },
      {id: 73, title: 'Timberland', description: 'Un essentiel intenporel signé Ti,berland.', price: '18 500', image: 'images/Timberland-mo8.jpg' },
      {id: 74, title: 'Timberland', description: 'Finition cuir grainé et confort absolu.', price: '18 500', image: 'images/Timberland-mo9.jpg' },
      {id: 75, title: 'Mocassin timberland', description: 'Le mocassin parfait pour vos tenues casual ou habillée.', price: '18 500', image: 'images/Timberland-mo10.jpg' },
      {id: 76, title: 'Chaussure Sneakers', description: 'Style moderne et confort absolu au quotidien.', price: '16 000', image: 'images/Snakers1.jpg' },
      {id: 77, title: 'Chaussure Sneakers', description: 'Semelle légère, design épuré.', price: '16 000', image: 'images/Snakers2.jpg' },
      {id: 78, title: 'Chaussure Sneakers', description: 'Alliance parfaite entre syle et performance.', price: '16 000', image: 'images/Snakers3.jpg' },
      {id: 79, title: 'Chaussure Sneakers', description: 'Basses ideale pour un usage quotidien.', price: '16 000', image: 'images/Snakers4.jpg' },
      {id: 80, title: 'Chaussure Sneakers', description: 'Pour marcher avec style et élegance.', price: '16 000', image: 'images/Snakers5.jpg' },
      {id: 81, title: 'Chaussure Sneakers', description: 'Design dynamique, confort inégalé.', price: '16 000', image: 'images/Snakers6.jpg' },
      {id: 82, title: 'Chaussure Sneakers', description: 'Un basique stylé à avoir dans sa collection.', price: '16 000', image: 'images/Snakers7.jpg' },
      {id: 87, title: 'Chaussure Sneakers', description: 'Chaussure legère au confort surprenant.', price: '16 000', image: 'images/Snakers12.jpg' },
    ]
  }
});
