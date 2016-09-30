    window.location.href = "index.html#drawer";
	
	function clic(element)
    {
      var ident = element.id;
      var nom = element.textContent;
      console.log(nom);

      switch (ident){
        case "mont":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>À l'origine, il existait deux stations distinctes :</p><p>Montparnasse qui était une station de correspondance entre la ligne 4, propriété de la Compagnie du chemin de fer métropolitain de Paris (CMP), et la ligne 12, qui appartenait à la Société du chemin de fer électrique souterrain Nord-Sud de Paris. Elle se situait sous le boulevard du Montparnasse à l'entrée de l'ancienne gare de Paris-Montparnasse.<br>Bienvenüe, qui fut nommée en hommage à l'ingénieur Fulgence Bienvenüe, le père du métro de Paris, et se situait derrière la gare de Paris-Montparnasse. Elle assurait la correspondance entre les lignes numérotées aujourd'hui 6 et 13.</p><p>À la fin des années 1930, un long couloir de correspondance relie les deux stations Montparnasse et Bienvenüe.</p><p>Le 6 octobre 1942, les deux stations fusionnent en une seule sous le nom de Montparnasse - Bienvenüe. C'est à cette époque qu'est ouverte la « gare du Maine » qui devient l'origine et le terminus des trains de grandes lignes ; l'ancienne gare, située place de Rennes (actuelle place du 18-Juin-1940), devenue trop étroite et trop courte, est d'abord réservée au trafic de banlieue.</p><p>Dans les années 1970, cette dernière est rasée pour céder la place à la tour Montparnasse. Aujourd'hui, tout le trafic SNCF est traité dans la nouvelle gare. Un trottoir roulant est installé dans le couloir souterrain qui assure la correspondance entre la ligne 6 et l'ex-ligne 14 (devenue la ligne 13), côté nouvelle gare, et les lignes 4 et 12, côté rue de Rennes.</p><p>Les arrêts des lignes 4 et 12 sont situés au nord (sous la place du 18-Juin-1940) tandis que les arrêts des lignes 6 et 13 se trouvent au sud près de la porte Océane, à côté de la gare SNCF.</p><p>En 2002, l'ancien trottoir roulant est remplacé par un trottoir roulant rapide. Mais en mai 2009, la RATP annonce qu'il sera démonté et remplacé en mars 2011 par un trottoir roulant classique, en raison de « nombreuses réclamations de la clientèle relatives à la sécurité et au manque de fiabilité ».</p>";
        break;
        case "gait":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte en 1937.</p><p>Le nom provient de la rue de la Gaîté qui était un chemin de terre en 1730, puis une section du chemin vicinal qui menait de la barrière du Montparnasse à Clamart. Son vocable provient des barrières du Maine et du Montparnasse, toutes proches. Des guinguettes, restaurants et théâtres s’y étaient agglutinés et firent de cette rue leur artère principale.<br>Près de l'espace de vente des titres de transport, un couloir transversal rend possible la traversée de l'avenue du Maine qui est infranchissable à cet endroit au niveau de la voirie en raison de la trémie d'accès sud au souterrain de cette avenue ; celui-ci a été créé pour que les automobiles puissent passer sous l'esplanade de la place Raoul-Dautry située devant la gare Montparnasse. Le passage transversal permet aux piétons marchant sur le trottoir situé du côté des numéros impairs de l'avenue du Maine (côté est) de se rendre au centre commercial Gaîté, du côté ouest.</p>";
        break;
        case "mairieMontroug":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>L'ouverture de Mairie de Montrouge, qui intervient le 23 mars 2013, constitue la première étape d'une extension de la ligne 4 jusqu'à Bagneux (prévue pour 2019), qui était envisagée depuis 1929 selon un parcours différent. En 2004, le coût de ce premier tronçon a été évalué à 152 millions d'euros pour une longueur de 780 mètres.</p><p>Par la suite, la ligne atteindra Verdun-Sud entre le cimetière de Bagneux et le Fort de Montrouge, puis le terminus Bagneux au nord de cette commune.</p><p>La ligne devrait permettre à 37 000 voyageurs par jour d'avoir un accès direct au réseau métropolitain. Aux heures de pointe, 4 700 entrants ou sortants sont attendus.</p><p>Elle a vu entrer 2 916 681 voyageurs sur les dix mois d'ouverture en 2013, ce qui la place à la 184 position des stations de métro pour sa fréquentation sur 302.</p>";
        break;
        case "vet":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte le 19 septembre 1970.</p><p>En 1767, Louis XV le Bien-Aimé fonda la seconde école vétérinaire de France (après Lyon) sur le terrain du manoir médiéval d’Hallefort.</p><p>La station dispose de trois accès qui débouchent sur l'avenue du Général-Leclerc.</p><p>En 2011, 3 371 386 voyageurs sont entrés à cette station. En 2012, ils sont 3 150 748 voyageurs. Elle a vu entrer 3 175 166 voyageurs en 2013 ce qui la place à la 164 position des stations de métro pour sa fréquentation.</p>";
        break;
        case "orleans":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>Sur les quais, le nom de la station est sous-titré « Général Leclerc » du nom de l'avenue sous laquelle elle se trouve.</p><p>Jusqu'en 2011, elle était une des rares stations qui avaient encore des portillons automatiques. Ceux-ci étaient implantés à l'entrée du quai de départ pour Porte de Clignancourt.</p><p>En 2011, 9 598 097 entrants ont été comptabilisés dans cette station. À l'occasion de l'extension de la ligne jusqu'à Mairie de Montrouge, un communiqué de presse de la RATP indique que le trafic moyen journalier s'élève à plus de 27 000 entrants et sortants, ce qui en fait la plus fréquentée des stations se trouvant aux portes de la capitale. Elle a vu entrer 6 598 073 voyageurs en 2013 ce qui la place à la 47 position des stations de métro pour sa fréquentation.</p>";
        break;
        case "alesia":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est proche de la place Victor-et-Hélène-Basch, dominée par l'église Saint-Pierre-de-Montrouge.</p><p>Le nom de la station vient de la rue d'Alésia, qui passe par cette place. Alésia est un oppidum gaulois qui fut le théâtre de la bataille décisive de la guerre des Gaules qui opposa Jules César à la coalition gauloise menée par l'Arverne Vercingétorix en 52 av. J.-C..</p>";
        break;
        case "mouton":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte en 1909.</p><p>Son nom vient de la rue Mouton-Duvernet proche de la station, nommée en l'honneur du général Mouton-Duvernet.</p><p>L'entrée, datant des origines, est en bon état et ornée d'une balustrade d'Hector Guimard.</p><p>La station est rénovée au début de 1969 avec une nouvelle décoration fondée sur du carrelage orange, qui sera ensuite surnommé le « style Mouton ». Vingt autres stations sont transformées sur le même modèle durant les années qui suivent. Mais elle a perdu le style « orange » depuis le 13 mars 2007, à la suite de sa rénovation dans le cadre du programme « Renouveau du métro » comme à la station Gare de l'Est sur les lignes 5 et 7.</p>";
        break;
        case "denfert":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte en 1906 sur l’actuelle ligne 6 du métro de Paris. Elle est située sous la place Denfert-Rochereau dont le nom rend hommage à Pierre Philippe Denfert-Rochereau (1823-1878), colonel français, qui défendit victorieusement la ville de Belfort contre les Prussiens en 1870 et 1871.</p><p>La ligne 6 passe sous la ligne 4. Les quais de la ligne 6 font partie du concept architectural Andreu-Motte ; le mobilier et le bandeau d'éclairage sont de couleur orange. Par contre ceux de la ligne 4 sont carrossés de panneaux blancs et bleus avec un mobilier Motte bleu. Sous le nom Denfert-Rochereau des panneaux de quai de la ligne 4 figure le nom du Colonel Rol-Tanguy.</p><p>La partie de la place Denfert-Rochereau située au droit des pavillons de l'ancienne barrière d'Enfer, dus à l'architecte Claude Nicolas Ledoux, a reçu le nom de « Avenue du Colonel-Henri-Rol-Tanguy » en 2004, à l'occasion du soixantième anniversaire de la libération de Paris. Mais, sur les quais et dans les couloirs, les plaques Accès  : pl. Denfert-Rochereau subsistent toujours car la sortie « Accès 1 » permet de desservir surtout des bâtiments, les plus nombreux, situés sur les autres parties de la place Denfert-Rochereau.</p>";
        break;
        case "raspail":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte en 1906. Son accès est orné d'une balustrade Hector Guimard. Elle est située sous le boulevard Raspail dont le nom rend hommage à François-Vincent Raspail, chimiste et homme politique français du XIXe siècle.</p><p>La station a été rénovée en 2008 dans le cadre du programme « Renouveau du métro » en perdant sa décoration de style Mouton-Duvernet et ses carreaux orangés. Le nouveau mobilier est de couleur bleue sur la ligne 6 et de couleur vert d'eau sur la ligne 4.</p>";
        break;
        case "vavin":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte le 9 janvier 1910. Son nom vient de la rue Vavin, qui rend hommage à Alexis Vavin (1792-1863) qui était notaire. Élu député de Paris en 1839 il fit partie de l’Assemblée constituante, puis de l’Assemblée législative. Favorable à la monarchie, il s’opposa au coup d’État de Napoléon III.</p>";
        break;
        case "placide":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte le 9 janvier 1910 sous le nom de rue de Vaugirard. Pour éviter toute confusion avec la station Vaugirard de la ligne A du Nord-Sud (aujourd'hui ligne 12), elle prend son nom actuel le 15 novembre 1913.</p><p>Son nom provient de la rue Saint-Placide qui rend hommage à saint Placide, disciple de saint Benoît et qui, d'après la coutume, aurait été sauvé de la noyade par saint Maur.</p>";
        break;
        case "sulpice":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte le 9 janvier 1910.</p><p>Son nom vient de la rue Saint-Sulpice. Celle-ci se situe dans le quartier actuel de Saint-Germain-des-Prés. Elle passe au nord de l’église Saint-Sulpice, dédiée à Sulpice le Pieux (576 - 647), évêque de Bourges de 621 à 624 et aumônier de Clotaire II ; l'église actuelle remplace une première église de 1211 devenue trop petite. Commencée par Gamard en 1646, sa construction fut longue et épisodique et se prolongea jusqu’en 1788.</p>";
        break;
        case "germain":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>La station est ouverte le 9 janvier 1910.</p><p>Elle se trouve sous le boulevard Saint-Germain, entre le carrefour de la rue de Rennes et celui de la rue du Four.</p><p>Sa dénomination vient de l'église Saint-Germain-des-Prés et de la place Saint-Germain-des-Prés. Childebert 1er, fils de Clovis, fit bâtir une basilique à la demande de saint Germain, évêque de Paris. Ce dernier y fut inhumé, l’église prit dès lors son nom. On rajouta le qualificatif « des-Prés » pour la proximité des Prés-aux-Clercs et pour la distinguer de Saint-Germain-le-Vieux édifié dans la cité.</p><p>Chacune des deux sorties de cette station, situées de part et d'autre du boulevard Saint-Germain, juste à côté de l'église du même nom, est ornée d'un candélabre Val d'Osne.</p>";
        break;
        case "marcadet":
        document.getElementById("contenu").innerHTML="<span id='onthetop'></span><p>Il y avait à l'origine deux stations distinctes :</p><ul><li>Marcadet, ouverte en 1908 sur la ligne 4 ;</li><li>Poissonniers, ouverte en 1916 sur la ligne A du Nord-Sud.</li></ul><p>À la suite de l'absorption de cette compagnie par la CMP en 1930, un couloir de correspondance est construit entre les deux stations. À sa mise en service le 25 août 1931, les deux stations prennent leur nom actuel, Marcadet – Poissonniers.</p><p>Elle porte donc le nom des deux rues suivantes :</p><ul><li>la rue Marcadet tient son nom d’un lieu-dit, la Mercade, situé à la Chapelle Saint Denis. Peut-être qu’on y tenait un marché, Marcadus, à l’époque de la foire du Lendit ;</li><li>la rue des Poissonniers est l’ancien chemin des Poissonniers emprunté dès 1307 par les marchands de poissons pêchés dans la mer du Nord.</li></ul>";
        break;
        default:
        console.log("pas trouvé");
      }
      document.getElementById("titre").innerHTML=nom;
    }

    var nums = document.getElementById("listeStations");
    var listLi = nums.getElementsByTagName("li");
    var listItem = nums.getElementsByTagName("span");
    var annul = document.getElementById("annuler");

    var arrayStations = [];

    for (var i=0; i < listItem.length; i++) {
      arrayStations.push(listItem[i].innerHTML.toLowerCase());
    }

    function lettreSaisie()
    {
      document.getElementById("annuler").classList.remove("hidden");
      var x = document.getElementById("saisie").value;
      console.log("saisie : "+x);
      var n = x.length;

      var lettreStation = function (letter) {
        var extrait = [];
        var indStation = [];

        /*for (var i = 0; i < letter.length; i += 1) {
          var indStation = extrait.push(letter[i].charAt(n - 1));
          listLi[i].classList.add("noselec");
          if(extrait[i] == x){
            listLi[i].classList.remove("noselec");
          }
        }*/

        for(i = 0; i < letter.length; i++) {
          listLi[i].classList.add("noselec");
          if(letter[i].toLowerCase().indexOf(x) !== -1) {
            //console.log(letter[i]);
            listLi[i].classList.remove("noselec");
          }
        }

        //console.log("premiere lettre "+extrait);
        //console.log("indStation "+indStation);
      }
      lettreStation(arrayStations);
    };

    function annulRech()
    {
      document.getElementById("saisie").focus();
      document.getElementById("saisie").value = " ";
      for (var i = listLi.length - 1; i >= 0; i--) {
        listLi[i].classList.remove("noselec");
      };
      //document.getElementById("annuler").classList.add("hidden");
    };
/*
    function affichAnnul()
    {
      document.getElementById("annuler").classList.remove("hidden");
    };

    function cachAnnul()
    {
      document.getElementById("annuler").classList.add("hidden");
    };
    */