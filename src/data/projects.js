const projects = [
  {
    id: 1,

    slug: "intek-network",

    title: "Conception, réalisation et configuration d'un réseau d'entreprise",

    category: "Projet académique",

    image: "/images/projects/intek/intek-network.jpg",

    description:
      "Conception et implémentation d'une infrastructure réseau d'entreprise intégrant la segmentation VLAN, le routage inter-VLAN, les ACL, le DHCP, le DNS, la QoS et un VPN sécurisé.",

    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "Inter-VLAN Routing",
      "ACL",
      "DHCP",
      "DNS",
      "QoS",
      "VPN"
    ],

    documentation: "/documents/cahier de charge_conception&implémentation_réseau.pdf",

    sections: [

      {
        title: "Présentation",

        content:
          "Présentation générale du projet, de ses objectifs, du contexte et des contraintes.",

        galleries: [

          {
            title: "Présentation",

            items: [

              {
                type: "image",

                title: "Vue générale",

                description:
                  "Présentation générale du projet.",

                image: "/images/projects/intek/intek-network.jpg"
              }

            ]
          }

        ]

      },

      {
        title: "tables d'adressages du réseau",

        content:
          "adresses ip reseau, masques, passerelles, et toutes les configuration ip du réseau",

        galleries: [

          {

            title: "TABLES D'ADRESSAGES",

            items: [

              {

                type: "image",

                title: "Adresse réseau siège",

                description:
                  "adressage des hotes par site",

                image:
                  "/images/projects/intek/adresseip/@ip-siege.png"

              },

              {

                type: "image",

                title: "Autres sites",

                description:
                  "table d'adressage des autres sites",

                image:
                "/images/projects/intek/adresseip/@ip-autres.png"

              },
              {

                type: "image",

                title: "adressage du DATACENTER",

                description:
                  "table d'adressage du DataCENTER",

                image:
                "/images/projects/intek/adresseip/@ip-datacenter.png"

              },

              {

                type: "image",

                title: "adressage de la DMZ",

                description:
                  "table d'adressage de la DMZ",

                image:
                "/images/projects/intek/adresseip/@ip-dmz.png"

              }

            ]

          },

          {

            title: "Vérification",

            items: [

              {

                type: "image",

                title: "Show VLAN",

                description:
                  "Vérification des VLAN.",

                image:
                  "/images/projects/intek/vlan/show-vlan.png"

              },

            ]

          }

        ]

      },

      {
        title: "Configuration des VLAN",

        content:
          "Création des VLAN et segmentation logique du réseau.",

        galleries: [

          {

            title: "Configuration",

            items: [

              {

                type: "image",

                title: "Configuration Switch ",

                description:
                  "Création des VLAN.",

                image:
                  "/images/projects/intek/vlan/creation-vlan.png"

              },

            ]

          },

          {

            title: "Vérification",

            items: [

              {

                type: "image",

                title: "Show VLAN",

                description:
                  "Vérification des VLAN.",

                image:
                  "/images/projects/intek/vlan/show-vlan.png"

              },

              {

                type: "image",

                title: "Trunk",

                description:
                  "Vérification des trunks.",

                image:
                  "/images/projects/intek/vlan/trunk.png"

              }

            ]

          }

        ]

      },

      {
        title: "Routage Inter-VLAN",

        content:
          "Configuration du routage entre les différents VLAN.",

        galleries: [

          {

            title: "Configuration",

            items: [

              {

                type: "image",

                title: "Configuration Routeur",

                description:
                  "Configuration du Router-on-a-Stick.",

                image:
                  "/images/projects/intek/intervlan/routage-inter-vlan.png"

              }

            ]

          },

          {

            title: "Tests",

            items: [

              {

                type: "image",

                title: "Ping",

                description:
                  "Validation de la communication.",

                image:
                  "/images/projects/intek/intervlan/ping.png"

              }

            ]

          }

        ]

      },

      {
        title: "Configuration des ACL",

        content:
          "Sécurisation des communications à l'aide des ACL.",

        galleries: [

          {

            title: "Configuration",

            items: [

              {

                type: "image",

                title: "ACL Standard",

                description:
                  "Configuration des ACL : premiere restriction.",

                image:
                  "/images/projects/intek/acl/standard.png"

              },

              {

                type: "image",

                title: "ACL Étendue",

                description:
                  "Configuration des ACL: deuxieme restriction.",

                image:
                  "/images/projects/intek/acl/extended.png"

              },

              {

                type: "image",

                title: "Show ACL",

                description:
                  "Commande show access-lists.",

                image:
                  "/images/projects/intek/acl/show-acl.png"

              }

            ]

          },

          {

            title: "Tests",

            items: [

              {

                type: "image",

                title: "FTP autorisé",

                description:
                  "Communication avec le serveur de fichier autorisée.",

                image:
                  "/images/projects/intek/acl/ftp-ok.png"

              },

              {

                type: "image",

                title: "FTP refusé",

                description:
                  "Communication avec le serveur de fichier bloquée.",

                image:
                  "/images/projects/intek/acl/ftp-denied.png"

              },

              {

                type: "image",

                title: "HTTP autorisé",

                description:
                  "Accès HTTP autorisé.",

                image:
                  "/images/projects/intek/acl/http-ok.png"

              },

              {

                type: "image",

                title: "HTTP refusé",

                description:
                  "Accès HTTP refusé.",

                image:
                  "/images/projects/intek/acl/http-denied.png"

              }

            ]

          }

        ]

      },

      {
        title: "DHCP",

        content:
          "Déploiement du service DHCP.",

        galleries: []
        

      },

      {
        title: "DNS",

        content:
          "Déploiement du service DNS.",

        galleries: []

      },

      {
        title: "QoS",

        content:
          "Mise en œuvre de la qualité de service.",

        galleries: []

      },

      {
        title: "VPN",

        content:
          "Connexion sécurisée entre les différents sites.",

        galleries: []

      },

      {
        title: "Tests finaux",

        content:
          "Validation complète du fonctionnement de l'infrastructure.",

        galleries: []

      }

    ]

  },

  {
    id: 2,

    slug: "network-design",

    title: "Conception d'une architecture réseau",

    category: "Architecture",

    image: "/images/projects/network-design.png",

    description:
      "Conception d'une architecture réseau réalisée avec Draw.io.",

    technologies: [
      "Draw.io",
      "Documentation"
    ],

    documentation: "",

    sections: []

  },

  {
    id: 3,

    slug: "virtualbox-lab",

    title: "Laboratoires VirtualBox",

    category: "Laboratoire",

    image: "/images/projects/virtualbox-lab.png",

    description:
      "Création de laboratoires virtualisés sous VirtualBox.",

    technologies: [
      "VirtualBox",
      "Windows",
      "Linux"
    ],

    documentation: "",

    sections: []

  }

];

export default projects;