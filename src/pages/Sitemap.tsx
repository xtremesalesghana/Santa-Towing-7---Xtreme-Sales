import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { Map } from 'lucide-react';

const sitemapData = [
  {
    "title": "Main Pages",
    "links": [
      {
        "label": "404 – Page Not Found",
        "path": "/404"
      },
      {
        "label": "Careers",
        "path": "/careers"
      },
      {
        "label": "Gallery",
        "path": "/gallery"
      },
      {
        "label": "Home",
        "path": "/"
      },
      {
        "label": "Search",
        "path": "/search"
      },
      {
        "label": "Sitemap",
        "path": "/sitemap"
      }
    ]
  },
  {
    "title": "Towing Services",
    "links": [
      {
        "label": "Book a Service",
        "path": "/booking"
      },
      {
        "label": "Towing Services Overview",
        "path": "/towing"
      }
    ]
  },
  {
    "title": "Other Services",
    "links": [
      {
        "label": "All Services Overview",
        "path": "/services"
      },
      {
        "label": "Auto Body Works",
        "path": "/body-works"
      },
      {
        "label": "Auto Parts Catalog",
        "path": "/parts"
      },
      {
        "label": "Auto Repairs",
        "path": "/repairs"
      },
      {
        "label": "Car Rental",
        "path": "/rental"
      },
      {
        "label": "Fleet Services",
        "path": "/fleet"
      },
      {
        "label": "Vehicle Sales",
        "path": "/sales"
      }
    ]
  },
  {
    "title": "Legal & Policies",
    "links": [
      {
        "label": "Accessibility Statement",
        "path": "/accessibility-statement"
      },
      {
        "label": "Cancellation & Refund Policy",
        "path": "/cancellation-refund-policy"
      },
      {
        "label": "Complaints Policy",
        "path": "/complaints-policy"
      },
      {
        "label": "Cookie Policy",
        "path": "/cookie-policy"
      },
      {
        "label": "Disclaimer",
        "path": "/disclaimer"
      },
      {
        "label": "Emergency Service Policy",
        "path": "/emergency-service-policy"
      },
      {
        "label": "Pricing & Payment Policy",
        "path": "/pricing-payment-policy"
      },
      {
        "label": "Privacy Policy",
        "path": "/privacy-policy"
      },
      {
        "label": "Service Area Policy",
        "path": "/service-area-policy"
      },
      {
        "label": "Terms & Conditions",
        "path": "/terms-conditions"
      },
      {
        "label": "Towing Service Terms",
        "path": "/towing-service-terms"
      },
      {
        "label": "Vehicle Damage & Liability Policy",
        "path": "/vehicle-damage-liability-policy"
      }
    ]
  },
  {
    "title": "Blog & Resources",
    "links": [
      {
        "label": "Automotive Guides",
        "path": "/blog?category=Automotive%20Guides"
      },
      {
        "label": "Blog Overview",
        "path": "/blog"
      },
      {
        "label": "Company News",
        "path": "/blog?category=Company%20News"
      },
      {
        "label": "Contact Us",
        "path": "/contact"
      },
      {
        "label": "Emergency Assistance",
        "path": "/blog?category=Emergency%20Assistance"
      },
      {
        "label": "Frequently Asked Questions",
        "path": "/faqs"
      },
      {
        "label": "Roadside Safety",
        "path": "/blog?category=Roadside%20Safety"
      },
      {
        "label": "Towing Tips",
        "path": "/blog?category=Towing%20Tips"
      },
      {
        "label": "Vehicle Care",
        "path": "/blog?category=Vehicle%20Care"
      },
      {
        "label": "Vehicle Recovery",
        "path": "/blog?category=Vehicle%20Recovery"
      }
    ]
  },
  {
    "title": "Service Areas",
    "links": [
      {
        "path": "/service-areas/abeka",
        "label": "Abeka"
      },
      {
        "path": "/service-areas/abuakwa-to-accra",
        "label": "Abuakwa to Accra"
      },
      {
        "path": "/service-areas/aburi-to-accra",
        "label": "Aburi to Accra"
      },
      {
        "path": "/service-areas/accra",
        "label": "Accra"
      },
      {
        "path": "/service-areas/accra-to-abuakwa",
        "label": "Accra to Abuakwa"
      },
      {
        "path": "/service-areas/accra-to-aburi",
        "label": "Accra to Aburi"
      },
      {
        "path": "/service-areas/accra-to-aflao",
        "label": "Accra to Aflao"
      },
      {
        "path": "/service-areas/accra-to-agona",
        "label": "Accra to Agona"
      },
      {
        "path": "/service-areas/accra-to-agona-nkwanta",
        "label": "Accra to Agona Nkwanta"
      },
      {
        "path": "/service-areas/accra-to-akontombra",
        "label": "Accra to Akontombra"
      },
      {
        "path": "/service-areas/accra-to-akropong",
        "label": "Accra to Akropong"
      },
      {
        "path": "/service-areas/accra-to-akwatia",
        "label": "Accra to Akwatia"
      },
      {
        "path": "/service-areas/accra-to-akyem-oda",
        "label": "Accra to Akyem Oda"
      },
      {
        "path": "/service-areas/accra-to-apam",
        "label": "Accra to Apam"
      },
      {
        "path": "/service-areas/accra-to-asamankese",
        "label": "Accra to Asamankese"
      },
      {
        "path": "/service-areas/accra-to-asankragwa",
        "label": "Accra to Asankragwa"
      },
      {
        "path": "/service-areas/accra-to-asante-akim",
        "label": "Accra to Asante Akim"
      },
      {
        "path": "/service-areas/accra-to-assin-fosu",
        "label": "Accra to Assin Fosu"
      },
      {
        "path": "/service-areas/accra-to-atebubu",
        "label": "Accra to Atebubu"
      },
      {
        "path": "/service-areas/accra-to-atonsu",
        "label": "Accra to Atonsu"
      },
      {
        "path": "/service-areas/accra-to-axim",
        "label": "Accra to Axim"
      },
      {
        "path": "/service-areas/accra-to-bawdie",
        "label": "Accra to Bawdie"
      },
      {
        "path": "/service-areas/accra-to-bawku",
        "label": "Accra to Bawku"
      },
      {
        "path": "/service-areas/accra-to-bechem",
        "label": "Accra to Bechem"
      },
      {
        "path": "/service-areas/accra-to-begoro",
        "label": "Accra to Begoro"
      },
      {
        "path": "/service-areas/accra-to-bekwai",
        "label": "Accra to Bekwai"
      },
      {
        "path": "/service-areas/accra-to-berekum",
        "label": "Accra to Berekum"
      },
      {
        "path": "/service-areas/accra-to-bibiani",
        "label": "Accra to Bibiani"
      },
      {
        "path": "/service-areas/accra-to-bodi",
        "label": "Accra to Bodi"
      },
      {
        "path": "/service-areas/accra-to-bogoso",
        "label": "Accra to Bogoso"
      },
      {
        "path": "/service-areas/accra-to-bole",
        "label": "Accra to Bole"
      },
      {
        "path": "/service-areas/accra-to-bolgatanga",
        "label": "Accra to Bolgatanga"
      },
      {
        "path": "/service-areas/accra-to-buipe",
        "label": "Accra to Buipe"
      },
      {
        "path": "/service-areas/accra-to-cape-coast",
        "label": "Accra to Cape Coast"
      },
      {
        "path": "/service-areas/accra-to-daboase",
        "label": "Accra to Daboase"
      },
      {
        "path": "/service-areas/accra-to-daboya",
        "label": "Accra to Daboya"
      },
      {
        "path": "/service-areas/accra-to-dadieso",
        "label": "Accra to Dadieso"
      },
      {
        "path": "/service-areas/accra-to-dambai",
        "label": "Accra to Dambai"
      },
      {
        "path": "/service-areas/accra-to-damongo",
        "label": "Accra to Damongo"
      },
      {
        "path": "/service-areas/accra-to-donkorkrom",
        "label": "Accra to Donkorkrom"
      },
      {
        "path": "/service-areas/accra-to-dormaa-ahenkro",
        "label": "Accra to Dormaa Ahenkro"
      },
      {
        "path": "/service-areas/accra-to-duayaw-nkwanta",
        "label": "Accra to Duayaw Nkwanta"
      },
      {
        "path": "/service-areas/accra-to-dunkwa-on-offin",
        "label": "Accra to Dunkwa-on-Offin"
      },
      {
        "path": "/service-areas/accra-to-ejisu",
        "label": "Accra to Ejisu"
      },
      {
        "path": "/service-areas/accra-to-elmina",
        "label": "Accra to Elmina"
      },
      {
        "path": "/service-areas/accra-to-elubo",
        "label": "Accra to Elubo"
      },
      {
        "path": "/service-areas/accra-to-enchi",
        "label": "Accra to Enchi"
      },
      {
        "path": "/service-areas/accra-to-fomena",
        "label": "Accra to Fomena"
      },
      {
        "path": "/service-areas/accra-to-fumbisi",
        "label": "Accra to Fumbisi"
      },
      {
        "path": "/service-areas/accra-to-gambaga",
        "label": "Accra to Gambaga"
      },
      {
        "path": "/service-areas/accra-to-goaso",
        "label": "Accra to Goaso"
      },
      {
        "path": "/service-areas/accra-to-half-assini",
        "label": "Accra to Half Assini"
      },
      {
        "path": "/service-areas/accra-to-hamile",
        "label": "Accra to Hamile"
      },
      {
        "path": "/service-areas/accra-to-ho",
        "label": "Accra to Ho"
      },
      {
        "path": "/service-areas/accra-to-hohoe",
        "label": "Accra to Hohoe"
      },
      {
        "path": "/service-areas/accra-to-hwidiem",
        "label": "Accra to Hwidiem"
      },
      {
        "path": "/service-areas/accra-to-jasikan",
        "label": "Accra to Jasikan"
      },
      {
        "path": "/service-areas/accra-to-jirapa",
        "label": "Accra to Jirapa"
      },
      {
        "path": "/service-areas/accra-to-juaben",
        "label": "Accra to Juaben"
      },
      {
        "path": "/service-areas/accra-to-juaboso",
        "label": "Accra to Juaboso"
      },
      {
        "path": "/service-areas/accra-to-kadjebi",
        "label": "Accra to Kadjebi"
      },
      {
        "path": "/service-areas/accra-to-karaga",
        "label": "Accra to Karaga"
      },
      {
        "path": "/service-areas/accra-to-kenyasi",
        "label": "Accra to Kenyasi"
      },
      {
        "path": "/service-areas/accra-to-keta",
        "label": "Accra to Keta"
      },
      {
        "path": "/service-areas/accra-to-kete-krachi",
        "label": "Accra to Kete Krachi"
      },
      {
        "path": "/service-areas/accra-to-kintampo",
        "label": "Accra to Kintampo"
      },
      {
        "path": "/service-areas/accra-to-koforidua",
        "label": "Accra to Koforidua"
      },
      {
        "path": "/service-areas/accra-to-konongo",
        "label": "Accra to Konongo"
      },
      {
        "path": "/service-areas/accra-to-kumasi",
        "label": "Accra to Kumasi"
      },
      {
        "path": "/service-areas/accra-to-kwame-danso",
        "label": "Accra to Kwame Danso"
      },
      {
        "path": "/service-areas/accra-to-lawra",
        "label": "Accra to Lawra"
      },
      {
        "path": "/service-areas/accra-to-mampong",
        "label": "Accra to Mampong"
      },
      {
        "path": "/service-areas/accra-to-mankessim",
        "label": "Accra to Mankessim"
      },
      {
        "path": "/service-areas/accra-to-mim",
        "label": "Accra to Mim"
      },
      {
        "path": "/service-areas/accra-to-mpohor",
        "label": "Accra to Mpohor"
      },
      {
        "path": "/service-areas/accra-to-nalerigu",
        "label": "Accra to Nalerigu"
      },
      {
        "path": "/service-areas/accra-to-nandom",
        "label": "Accra to Nandom"
      },
      {
        "path": "/service-areas/accra-to-navrongo",
        "label": "Accra to Navrongo"
      },
      {
        "path": "/service-areas/accra-to-nkawie",
        "label": "Accra to Nkawie"
      },
      {
        "path": "/service-areas/accra-to-nkawkaw",
        "label": "Accra to Nkawkaw"
      },
      {
        "path": "/service-areas/accra-to-nkoranza",
        "label": "Accra to Nkoranza"
      },
      {
        "path": "/service-areas/accra-to-nkwanta",
        "label": "Accra to Nkwanta"
      },
      {
        "path": "/service-areas/accra-to-nkwanta-south",
        "label": "Accra to Nkwanta South"
      },
      {
        "path": "/service-areas/accra-to-nsawam",
        "label": "Accra to Nsawam"
      },
      {
        "path": "/service-areas/accra-to-obuasi",
        "label": "Accra to Obuasi"
      },
      {
        "path": "/service-areas/accra-to-odumase-krobo",
        "label": "Accra to Odumase-Krobo"
      },
      {
        "path": "/service-areas/accra-to-offinso",
        "label": "Accra to Offinso"
      },
      {
        "path": "/service-areas/accra-to-paga",
        "label": "Accra to Paga"
      },
      {
        "path": "/service-areas/accra-to-prang",
        "label": "Accra to Prang"
      },
      {
        "path": "/service-areas/accra-to-prestea",
        "label": "Accra to Prestea"
      },
      {
        "path": "/service-areas/accra-to-salaga",
        "label": "Accra to Salaga"
      },
      {
        "path": "/service-areas/accra-to-samreboi",
        "label": "Accra to Samreboi"
      },
      {
        "path": "/service-areas/accra-to-sandema",
        "label": "Accra to Sandema"
      },
      {
        "path": "/service-areas/accra-to-savelugu",
        "label": "Accra to Savelugu"
      },
      {
        "path": "/service-areas/accra-to-sefwi-bekwai",
        "label": "Accra to Sefwi Bekwai"
      },
      {
        "path": "/service-areas/accra-to-sefwi-wiawso",
        "label": "Accra to Sefwi Wiawso"
      },
      {
        "path": "/service-areas/accra-to-sekondi",
        "label": "Accra to Sekondi"
      },
      {
        "path": "/service-areas/accra-to-shama",
        "label": "Accra to Shama"
      },
      {
        "path": "/service-areas/accra-to-sogakope",
        "label": "Accra to Sogakope"
      },
      {
        "path": "/service-areas/accra-to-somanya",
        "label": "Accra to Somanya"
      },
      {
        "path": "/service-areas/accra-to-suhum",
        "label": "Accra to Suhum"
      },
      {
        "path": "/service-areas/accra-to-sunyani",
        "label": "Accra to Sunyani"
      },
      {
        "path": "/service-areas/accra-to-takoradi",
        "label": "Accra to Takoradi"
      },
      {
        "path": "/service-areas/accra-to-tamale",
        "label": "Accra to Tamale"
      },
      {
        "path": "/service-areas/accra-to-tarkwa",
        "label": "Accra to Tarkwa"
      },
      {
        "path": "/service-areas/accra-to-techiman",
        "label": "Accra to Techiman"
      },
      {
        "path": "/service-areas/accra-to-tepa",
        "label": "Accra to Tepa"
      },
      {
        "path": "/service-areas/accra-to-tolon",
        "label": "Accra to Tolon"
      },
      {
        "path": "/service-areas/accra-to-tumu",
        "label": "Accra to Tumu"
      },
      {
        "path": "/service-areas/accra-to-wa",
        "label": "Accra to Wa"
      },
      {
        "path": "/service-areas/accra-to-walewale",
        "label": "Accra to Walewale"
      },
      {
        "path": "/service-areas/accra-to-wassa-akropong",
        "label": "Accra to Wassa Akropong"
      },
      {
        "path": "/service-areas/accra-to-wenchi",
        "label": "Accra to Wenchi"
      },
      {
        "path": "/service-areas/accra-to-winneba",
        "label": "Accra to Winneba"
      },
      {
        "path": "/service-areas/accra-to-yeji",
        "label": "Accra to Yeji"
      },
      {
        "path": "/service-areas/accra-to-yendi",
        "label": "Accra to Yendi"
      },
      {
        "path": "/service-areas/accra-to-zebilla",
        "label": "Accra to Zebilla"
      },
      {
        "path": "/service-areas/achimota",
        "label": "Achimota"
      },
      {
        "path": "/service-areas/adenta",
        "label": "Adenta"
      },
      {
        "path": "/service-areas/aflao-to-accra",
        "label": "Aflao to Accra"
      },
      {
        "path": "/service-areas/agona-nkwanta-to-accra",
        "label": "Agona Nkwanta to Accra"
      },
      {
        "path": "/service-areas/agona-to-accra",
        "label": "Agona to Accra"
      },
      {
        "path": "/service-areas/airport-residential",
        "label": "Airport Residential"
      },
      {
        "path": "/service-areas/akontombra-to-accra",
        "label": "Akontombra to Accra"
      },
      {
        "path": "/service-areas/akropong-to-accra",
        "label": "Akropong to Accra"
      },
      {
        "path": "/service-areas/akwatia-to-accra",
        "label": "Akwatia to Accra"
      },
      {
        "path": "/service-areas/akyem-oda-to-accra",
        "label": "Akyem Oda to Accra"
      },
      {
        "path": "/service-areas/amasaman",
        "label": "Amasaman"
      },
      {
        "path": "/service-areas/apam-to-accra",
        "label": "Apam to Accra"
      },
      {
        "path": "/service-areas/asamankese-to-accra",
        "label": "Asamankese to Accra"
      },
      {
        "path": "/service-areas/asankragwa-to-accra",
        "label": "Asankragwa to Accra"
      },
      {
        "path": "/service-areas/asante-akim-to-accra",
        "label": "Asante Akim to Accra"
      },
      {
        "path": "/service-areas/ashaiman",
        "label": "Ashaiman"
      },
      {
        "path": "/service-areas/assin-fosu-to-accra",
        "label": "Assin Fosu to Accra"
      },
      {
        "path": "/service-areas/atebubu-to-accra",
        "label": "Atebubu to Accra"
      },
      {
        "path": "/service-areas/atonsu-to-accra",
        "label": "Atonsu to Accra"
      },
      {
        "path": "/service-areas/axim-to-accra",
        "label": "Axim to Accra"
      },
      {
        "path": "/service-areas/ayawaso",
        "label": "Ayawaso"
      },
      {
        "path": "/service-areas/bawdie-to-accra",
        "label": "Bawdie to Accra"
      },
      {
        "path": "/service-areas/bawku-to-accra",
        "label": "Bawku to Accra"
      },
      {
        "path": "/service-areas/bechem-to-accra",
        "label": "Bechem to Accra"
      },
      {
        "path": "/service-areas/begoro-to-accra",
        "label": "Begoro to Accra"
      },
      {
        "path": "/service-areas/bekwai-to-accra",
        "label": "Bekwai to Accra"
      },
      {
        "path": "/service-areas/berekum-to-accra",
        "label": "Berekum to Accra"
      },
      {
        "path": "/service-areas/bibiani-to-accra",
        "label": "Bibiani to Accra"
      },
      {
        "path": "/service-areas/bodi-to-accra",
        "label": "Bodi to Accra"
      },
      {
        "path": "/service-areas/bogoso-to-accra",
        "label": "Bogoso to Accra"
      },
      {
        "path": "/service-areas/bolgatanga-to-accra",
        "label": "Bolgatanga to Accra"
      },
      {
        "path": "/service-areas/buipe-to-accra",
        "label": "Buipe to Accra"
      },
      {
        "path": "/service-areas/burma-camp",
        "label": "Burma Camp"
      },
      {
        "path": "/service-areas/cape-coast-to-accra",
        "label": "Cape Coast to Accra"
      },
      {
        "path": "/service-areas/circle",
        "label": "Circle"
      },
      {
        "path": "/service-areas/daboase-to-accra",
        "label": "Daboase to Accra"
      },
      {
        "path": "/service-areas/daboya-to-accra",
        "label": "Daboya to Accra"
      },
      {
        "path": "/service-areas/dadieso-to-accra",
        "label": "Dadieso to Accra"
      },
      {
        "path": "/service-areas/dambai-to-accra",
        "label": "Dambai to Accra"
      },
      {
        "path": "/service-areas/damongo-to-accra",
        "label": "Damongo to Accra"
      },
      {
        "path": "/service-areas/dansoman",
        "label": "Dansoman"
      },
      {
        "path": "/service-areas/dawhenya",
        "label": "Dawhenya"
      },
      {
        "path": "/service-areas/dodowa",
        "label": "Dodowa"
      },
      {
        "path": "/service-areas/donkorkrom-to-accra",
        "label": "Donkorkrom to Accra"
      },
      {
        "path": "/service-areas/dormaa-ahenkro-to-accra",
        "label": "Dormaa Ahenkro to Accra"
      },
      {
        "path": "/service-areas/duayaw-nkwanta-to-accra",
        "label": "Duayaw Nkwanta to Accra"
      },
      {
        "path": "/service-areas/dunkwa-on-offin-to-accra",
        "label": "Dunkwa-on-Offin to Accra"
      },
      {
        "path": "/service-areas/dzorwulu",
        "label": "Dzorwulu"
      },
      {
        "path": "/service-areas/east-legon",
        "label": "East Legon"
      },
      {
        "path": "/service-areas/ejisu-to-accra",
        "label": "Ejisu to Accra"
      },
      {
        "path": "/service-areas/elmina-to-accra",
        "label": "Elmina to Accra"
      },
      {
        "path": "/service-areas/elubo-to-accra",
        "label": "Elubo to Accra"
      },
      {
        "path": "/service-areas/enchi-to-accra",
        "label": "Enchi to Accra"
      },
      {
        "path": "/service-areas/fomena-to-accra",
        "label": "Fomena to Accra"
      },
      {
        "path": "/service-areas/fumbisi-to-accra",
        "label": "Fumbisi to Accra"
      },
      {
        "path": "/service-areas/gambaga-to-accra",
        "label": "Gambaga to Accra"
      },
      {
        "path": "/service-areas/goaso-to-accra",
        "label": "Goaso to Accra"
      },
      {
        "path": "/service-areas/gushegu-to-accra",
        "label": "Gushegu to Accra"
      },
      {
        "path": "/service-areas/half-assini-to-accra",
        "label": "Half Assini to Accra"
      },
      {
        "path": "/service-areas/hamile-to-accra",
        "label": "Hamile to Accra"
      },
      {
        "path": "/service-areas/ho-to-accra",
        "label": "Ho to Accra"
      },
      {
        "path": "/service-areas/hohoe-to-accra",
        "label": "Hohoe to Accra"
      },
      {
        "path": "/service-areas/hwidiem-to-accra",
        "label": "Hwidiem to Accra"
      },
      {
        "path": "/service-areas/jasikan-to-accra",
        "label": "Jasikan to Accra"
      },
      {
        "path": "/service-areas/jirapa-to-accra",
        "label": "Jirapa to Accra"
      },
      {
        "path": "/service-areas/juaben-to-accra",
        "label": "Juaben to Accra"
      },
      {
        "path": "/service-areas/juaboso-to-accra",
        "label": "Juaboso to Accra"
      },
      {
        "path": "/service-areas/kadjebi-to-accra",
        "label": "Kadjebi to Accra"
      },
      {
        "path": "/service-areas/kaneshie",
        "label": "Kaneshie"
      },
      {
        "path": "/service-areas/karaga-to-accra",
        "label": "Karaga to Accra"
      },
      {
        "path": "/service-areas/kasoa",
        "label": "Kasoa"
      },
      {
        "path": "/service-areas/kenyasi-to-accra",
        "label": "Kenyasi to Accra"
      },
      {
        "path": "/service-areas/keta-to-accra",
        "label": "Keta to Accra"
      },
      {
        "path": "/service-areas/kete-krachi-to-accra",
        "label": "Kete Krachi to Accra"
      },
      {
        "path": "/service-areas/kintampo-to-accra",
        "label": "Kintampo to Accra"
      },
      {
        "path": "/service-areas/koforidua-to-accra",
        "label": "Koforidua to Accra"
      },
      {
        "path": "/service-areas/konongo-to-accra",
        "label": "Konongo to Accra"
      },
      {
        "path": "/service-areas/korle-klottey",
        "label": "Korle Klottey"
      },
      {
        "path": "/service-areas/kpone",
        "label": "Kpone"
      },
      {
        "path": "/service-areas/kumasi-to-accra",
        "label": "Kumasi to Accra"
      },
      {
        "path": "/service-areas/kwame-danso-to-accra",
        "label": "Kwame Danso to Accra"
      },
      {
        "path": "/service-areas/kwashieman",
        "label": "Kwashieman"
      },
      {
        "path": "/service-areas/la",
        "label": "La"
      },
      {
        "path": "/service-areas/labadi",
        "label": "Labadi"
      },
      {
        "path": "/service-areas/lakeside",
        "label": "Lakeside"
      },
      {
        "path": "/service-areas/lawra-to-accra",
        "label": "Lawra to Accra"
      },
      {
        "path": "/service-areas/madina",
        "label": "Madina"
      },
      {
        "path": "/service-areas/mampong-to-accra",
        "label": "Mampong to Accra"
      },
      {
        "path": "/service-areas/mankessim-to-accra",
        "label": "Mankessim to Accra"
      },
      {
        "path": "/service-areas/mim-to-accra",
        "label": "Mim to Accra"
      },
      {
        "path": "/service-areas/mpohor-to-accra",
        "label": "Mpohor to Accra"
      },
      {
        "path": "/service-areas/nalerigu-to-accra",
        "label": "Nalerigu to Accra"
      },
      {
        "path": "/service-areas/nandom-to-accra",
        "label": "Nandom to Accra"
      },
      {
        "path": "/service-areas/navrongo-to-accra",
        "label": "Navrongo to Accra"
      },
      {
        "path": "/service-areas/nima",
        "label": "Nima"
      },
      {
        "path": "/service-areas/ningo-prampram",
        "label": "Ningo-Prampram"
      },
      {
        "path": "/service-areas/nkawie-to-accra",
        "label": "Nkawie to Accra"
      },
      {
        "path": "/service-areas/nkawkaw-to-accra",
        "label": "Nkawkaw to Accra"
      },
      {
        "path": "/service-areas/nkoranza-to-accra",
        "label": "Nkoranza to Accra"
      },
      {
        "path": "/service-areas/nkwanta-south-to-accra",
        "label": "Nkwanta South to Accra"
      },
      {
        "path": "/service-areas/nkwanta-to-accra",
        "label": "Nkwanta to Accra"
      },
      {
        "path": "/service-areas/nsawam-to-accra",
        "label": "Nsawam to Accra"
      },
      {
        "path": "/service-areas/nungua",
        "label": "Nungua"
      },
      {
        "path": "/service-areas/obuasi-to-accra",
        "label": "Obuasi to Accra"
      },
      {
        "path": "/service-areas/odumase-krobo-to-accra",
        "label": "Odumase-Krobo to Accra"
      },
      {
        "path": "/service-areas/offinso-to-accra",
        "label": "Offinso to Accra"
      },
      {
        "path": "/service-areas/osu",
        "label": "Osu"
      },
      {
        "path": "/service-areas/paga-to-accra",
        "label": "Paga to Accra"
      },
      {
        "path": "/service-areas/pokuase",
        "label": "Pokuase"
      },
      {
        "path": "/service-areas/prampram",
        "label": "Prampram"
      },
      {
        "path": "/service-areas/prang-to-accra",
        "label": "Prang to Accra"
      },
      {
        "path": "/service-areas/prestea-to-accra",
        "label": "Prestea to Accra"
      },
      {
        "path": "/service-areas/salaga-to-accra",
        "label": "Salaga to Accra"
      },
      {
        "path": "/service-areas/samreboi-to-accra",
        "label": "Samreboi to Accra"
      },
      {
        "path": "/service-areas/sandema-to-accra",
        "label": "Sandema to Accra"
      },
      {
        "path": "/service-areas/savelugu-to-accra",
        "label": "Savelugu to Accra"
      },
      {
        "path": "/service-areas/sefwi-bekwai-to-accra",
        "label": "Sefwi Bekwai to Accra"
      },
      {
        "path": "/service-areas/sefwi-wiawso-to-accra",
        "label": "Sefwi Wiawso to Accra"
      },
      {
        "path": "/service-areas/sekondi-to-accra",
        "label": "Sekondi to Accra"
      },
      {
        "path": "/service-areas/shama-to-accra",
        "label": "Shama to Accra"
      },
      {
        "path": "/service-areas/sogakope-to-accra",
        "label": "Sogakope to Accra"
      },
      {
        "path": "/service-areas/somanya-to-accra",
        "label": "Somanya to Accra"
      },
      {
        "path": "/service-areas/spintex",
        "label": "Spintex"
      },
      {
        "path": "/service-areas/suhum-to-accra",
        "label": "Suhum to Accra"
      },
      {
        "path": "/service-areas/sunyani-to-accra",
        "label": "Sunyani to Accra"
      },
      {
        "path": "/service-areas/takoradi-to-accra",
        "label": "Takoradi to Accra"
      },
      {
        "path": "/service-areas/tamale-to-accra",
        "label": "Tamale to Accra"
      },
      {
        "path": "/service-areas/tarkwa-to-accra",
        "label": "Tarkwa to Accra"
      },
      {
        "path": "/service-areas/techiman-to-accra",
        "label": "Techiman to Accra"
      },
      {
        "path": "/service-areas/tema",
        "label": "Tema"
      },
      {
        "path": "/service-areas/tepa-to-accra",
        "label": "Tepa to Accra"
      },
      {
        "path": "/service-areas/tesano",
        "label": "Tesano"
      },
      {
        "path": "/service-areas/teshie",
        "label": "Teshie"
      },
      {
        "path": "/service-areas/tolon-to-accra",
        "label": "Tolon to Accra"
      },
      {
        "path": "/service-areas/tumu-to-accra",
        "label": "Tumu to Accra"
      },
      {
        "path": "/service-areas/wa-to-accra",
        "label": "Wa to Accra"
      },
      {
        "path": "/service-areas/walewale-to-accra",
        "label": "Walewale to Accra"
      },
      {
        "path": "/service-areas/wassa-akropong-to-accra",
        "label": "Wassa Akropong to Accra"
      },
      {
        "path": "/service-areas/weija-gbawe",
        "label": "Weija-Gbawe"
      },
      {
        "path": "/service-areas/wenchi-to-accra",
        "label": "Wenchi to Accra"
      },
      {
        "path": "/service-areas/winneba-to-accra",
        "label": "Winneba to Accra"
      },
      {
        "path": "/service-areas/yeji-to-accra",
        "label": "Yeji to Accra"
      },
      {
        "path": "/service-areas/yendi-to-accra",
        "label": "Yendi to Accra"
      },
      {
        "path": "/service-areas/zebilla-to-accra",
        "label": "Zebilla to Accra"
      }
    ]
  }
];

export default function Sitemap() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  let globalCounter = 1;
  const getNextNumber = () => String(globalCounter++).padStart(3, '0');

  return (
    <div className="pt-24 pb-16 md:pb-20 bg-slate-50 min-h-screen">
      <SEO 
        title="Website Sitemap | Santa Towing" 
        description="Navigate our website easily with our complete sitemap directory for towing, repairs, rentals, and service areas." 
        canonical="/sitemap" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <Breadcrumbs items={[{ label: 'Sitemap' }]} />
          
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Map className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-1">Website Sitemap</h1>
              <p className="text-lg text-dark/70">
                A complete directory of all pages on our website.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {sitemapData.map((category) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-dark/10 shadow-sm self-start"
            >
              <h2 className="text-xl font-bold text-dark mb-6 pb-4 border-b border-dark/10">
                {category.title}
              </h2>
              <ul className={`grid grid-cols-1 ${category.links.length > 20 ? 'sm:grid-cols-2' : ''} gap-x-8 gap-y-4`}>
                {category.links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link 
                      to={link.path} 
                      className="text-dark/80 hover:text-primary font-medium transition-colors flex items-start gap-3 group"
                    >
                      <span className="text-dark/40 font-mono text-sm mt-0.5 group-hover:text-primary transition-colors shrink-0">
                        {getNextNumber()}.
                      </span>
                      <span className="leading-snug">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
