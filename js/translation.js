      var lang = window.location.search.substring(5);
      //var oi = 'pt';
      // use plugins and options as needed, for options, detail see
      // http://i18next.com/docs/
      i18next.init({
        lng: lang, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
        resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
          //INGLÊS
          en: {
            translation: {
              introDiv: {
                head: 'Cumbuco KiteSurf Hostel',
                desc: 'Meet our hostel',
                button: 'Take a tour'
              },
              menu: {
                title: 'Main Menu',
                home: 'Home',
                about: 'About Us',
                services: 'Services',
                gallery: 'Gallery',
                language: 'Change language',
                contact: 'Contact',
                langEng: 'English',
                langPt: 'Portuguese',
                langEs: 'Spanish'
              },
              about: {
                head: 'Meet our hostel',
                text: 'Cumbuco KiteSurf Hostel has 8 chalets, all with a private balcony, TV, fridge, closet, fan, Wi-Fi connection, parking spots and breakfast in the morning. It is located 50 meters from Cumbuco Beach, where you can find restaurants and beach huts. We also have agreements for car rental, buggies and kite surfing school.'
              },
              services: {
                head: 'Some of Our Services',
                s1title: 'Wi-Fi Connection',
                s1desc: 'Connection for all of our guests in our chalets.',
                s2title: 'Parking',
                s2desc: 'Parking lot for all of our guests.',
                s3title: 'Buggy Rent',
                s3desc: 'Buggy Rent for during the stay.',
                s4title: 'KiteSurf School',
                s4desc: 'KiteSurf lessons for beginners.'
              },
              visit: 'Come visit us',
              gallery: {
                head: 'Our Picture Gallery',
                bbutton: 'See more pictures'
              },
              footer: {
                head: 'Where to find us',
                avenue: 'Coqueiros Avenue, 405'
              }
            }
          },
          //PORTUGUÊS
          pt: {
            translation: {
              introDiv: {
                head: 'Pousada Cumbuco KiteSurf',
                desc: 'Conheça a nossa pousada',
                button: 'Faça um tour'
              },
              menu: {
                title: 'Menu Principal',
                home: 'Início',
                about: 'Sobre Nós',
                services: 'Serviços',
                gallery: 'Galeria',
                language: 'Mudar idioma',
                contact: 'Contato',
                langEng: 'Inglês',
                langPt: 'Português',
                langEs: 'Espanhol'
              },
              about: {
                head: 'Conheça a nossa Pousada',
                text: 'A Pousada Cumbuco KiteSurf conta com 8 chalés, todos com varanda privativa, TV, frigobar, armário, ventilador, Wi-Fi, estacionamento e café da manhã. Está localizada à 50 metros da Praia do Cumbuco, onde encontramos restaurantes e barracas de praia. Contamos também com convênios para aluguel de automóveis, bugues e escola de kitesurf.'
              },
              services: {
                head: 'Alguns de nossos Serviços',
                s1title: 'Conexão Wi-Fi',
                s1desc: 'Conexão para todos os hóspedes em nossos chalés.',
                s2title: 'Estacionamento',
                s2desc: 'Vagas para todos os nossos hóspedes.',
                s3title: 'Aluguel de Bugues',
                s3desc: 'Aluguel para o uso de bugues durante a estadia.',
                s4title: 'Escola de KiteSurf',
                s4desc: 'Convênio para lições de KiteSurf para iniciantes.'
              },
              visit: 'Faça-nos uma visita',
              gallery: {
                head: 'Nossa Galeria de Fotos',
                bbutton: 'Ver mais fotos'
              },
              footer: {
                head: 'Onde nos encontrar',
                avenue: 'Avenida dos Coqueiros, 405'
              }
            }
          },
          //ESPANHOL
          es: {
            translation: {
              introDiv: {
                head: 'Posada Cumbuco KiteSurf',
                desc: 'Conoce a nuestro posada',
                button: 'Tienes um tour'
              },              
              menu: {
                title: 'Menú Principal',
                home: 'Inicio',
                about: 'Sobre Nosotros',
                services: 'Servicios',
                gallery: 'Galería',
                language: 'Cambiar el idioma',
                contact: 'Contacto',
                langEng: 'Inglés',
                langPt: 'Portugués',
                langEs: 'Español'
              },
              about: {
                head: 'Conoce a nuestro Posada',
                text: 'La posada Cumbuco KiteSurf tiene 8 cabañas, todas con balcón privado, TV, nevera, armario, ventilador, conexión Wi-Fi, aparcamiento y desayuno. Se encuentra a 50 metros de la playa de Cumbuco, donde encontramos restaurantes y tiendas de playa. También tenemos acuerdos con renta de autos, buggies y escuela de kitesurf.'
              },
              services: {
                head: 'Algunos de Nuestros Servicios',
                s1title: 'Conexión Wi-Fi',
                s1desc: 'Conexión para todos los huéspedes en nuestras cabañas.',
                s2title: 'Aparcamiento',
                s2desc: 'Plazas de aparcamiento para todos nuestros huéspedes.',
                s3title: 'Alquiler de Buggies',
                s3desc: 'Alquiler para el uso de buggies durante la estancia.',
                s4title: 'Escuela de KiteSurf',
                s4desc: 'Acuerdos para lecciones de Kitesurf para principiantes.'
              },
              visit: 'Haznos una visita',
              gallery: {
                head: 'Nuestra Galería de Fotos',
                bbutton: 'Ver más fotos'
              },
              footer: {
                head: 'Dónde encontrarnos',
                avenue: 'Avenida de los Coqueiros, 405'
              }
            }
          }
        }
      }, function(err, t) {
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        i18nextJquery.init(i18next, $);

        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        //$('.nav').localize();
        $('body').localize();
      });