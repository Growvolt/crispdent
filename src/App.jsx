import React, { useState, useEffect } from 'react';
import { Plus, Leaf, X, Clock, MapPin, Phone, Calendar, Users, Star, Utensils, Heart, Truck, ChevronDown, Pizza, ShoppingBag } from 'lucide-react';

// --- TRANSLATION DICTIONARY ---
const dict = {
  de: {
    nav: {
      home: "Startseite",
      menu: "Speisekarte",
      reservations: "Reservieren",
      about: "Über uns",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Ein gemütlicher Ort für türkischen Geschmack",
      title1: "Döner & Pizza.",
      title2: "Weilheims Beste.",
      subtitle: "Türkische Aromen, jeden Tag frisch — vor Ort genießen, mitnehmen oder direkt an die Tür liefern lassen.",
      btnPrimary: "Online Bestellen",
      btnSecondary: "Speisekarte",
      hours: "Geöffnet Mo–Sa 10:30 – 21:30 · So 11:00 – 21:00 · Brunnenstraße 1, Weilheim"
    },
    whatWeDo: {
      kebabTitle: "Döner & Kebap",
      kebabDesc: "Saftiges Fleisch vom Drehspieß, hausgemachte Saucen, genau nach deinem Geschmack zubereitet.",
      pizzaTitle: "Handgemachte Pizza",
      pizzaDesc: "29cm im Steinofen gebackene Pizzen. Klassisch, kreativ oder mit extra viel Dönerfleisch — du entscheidest.",
      saladsTitle: "Frische Salate & Beilagen",
      saladsDesc: "Knackig und frisch zubereitet. Denn gutes Essen verdient eine gute Beilage."
    },
    aboutSnippet: {
      title1: "Mehr als nur eine Mahlzeit.",
      title2: "Eine Gewohnheit.",
      p1: "Wir versorgen Weilheim schon seit Jahren mit richtig gutem Essen — und wir hören nicht auf. Im Star Kebap & Pizza Haus wird jeder Teller mit Sorgfalt zubereitet, jeder Kunde wie ein Stammgast behandelt und jeder Besuch lässt dich darüber nachdenken, wann du wiederkommst.",
      p2: "Lässige Atmosphäre. Gemütlicher Raum. Freundliche Gesichter. Und Essen, das tatsächlich so schmeckt, als hätte es jemand extra für dich gemacht — weil es genau so ist.",
      btn: "Unsere Geschichte"
    },
    featured: {
      eyebrow: "Empfohlen",
      title: "Die Publikumslieblinge",
      btn: "Komplette Speisekarte",
      item1Desc: "Zartes Drehspießfleisch auf Brot, übergossen mit Tomatensauce und kühlem Joghurt. Ein türkischer Klassiker, perfekt zubereitet.",
      item2Desc: "Drehspießfleisch, Paprika, Tomaten auf einem knusprigen Boden. Unser Hausstolz in jedem Bissen.",
      item3Desc: "Geschmolzener Käse, cremige Sauce, Tomaten. Der Döner, auf einem neuen Level."
    },
    reviews: {
      title: "Verlass dich nicht nur auf unser Wort",
      subtitle: "4,8 von 5 Sternen basierend auf über 385 Google-Bewertungen"
    },
    orderOptions: {
      title: "Genieße es auf deine Art",
      dineInTitle: "Vor Ort Essen",
      dineInDesc: "Entspann dich und bleib eine Weile. Familientische, Hochstühle, gute Stimmung.",
      dineInBtn: "Tisch buchen",
      takeawayTitle: "Mitnehmen",
      takeawayDesc: "Vorbestellen oder einfach vorbeikommen. Bereit, wenn du es bist.",
      takeawayBtn: "Telefonisch bestellen",
      deliveryTitle: "Lieferung",
      deliveryDesc: "Bestelle online über Lieferando — direkt an deine Tür.",
      deliveryBtn: "Jetzt Bestellen"
    },
    homeFaq: {
      eyebrow: "Antworten",
      title: "Häufig gestellte Fragen",
      q1: "Was sind Ihre Öffnungszeiten?",
      a1: "Wir sind Montag bis Freitag von 10:30 bis 21:30 Uhr geöffnet, und samstags, sonntags sowie an Feiertagen von 11:00 bis 21:00 Uhr. An Feiertagen oder während saisonaler Pausen können die Öffnungszeiten gelegentlich abweichen — rufen Sie uns gerne an, um sicherzugehen.",
      q2: "Bieten Sie Abholung und Lieferung an?",
      a2: "Ja! Sie können Ihr Essen direkt bei uns im Restaurant abholen. Außerdem bieten wir Lieferung über Lieferando an. Bestellen Sie einfach online oder rufen Sie uns unter +49 7023 9424183 an.",
      q3: "Wo befinden Sie sich und gibt es Parkmöglichkeiten?",
      a3: "Sie finden uns in der Brunnenstraße 1, 73235 Weilheim an der Teck. In der Nähe stehen kostenlose Parkplätze zur Verfügung, sodass Sie jederzeit bequem bei uns vorbeikommen können.",
      q4: "Kann ich mich auf die Qualität verlassen — was sagen Ihre Kunden?",
      a4: "Wir sind stolz auf eine Bewertung von 4,9 Sternen auf Google Maps, basierend auf über 385 Bewertungen. Unsere Gäste loben regelmäßig die Frische der Zutaten, die großzügigen Portionen und den freundlichen Service — auf Deutsch und auf Englisch. Unser Essen und unsere Kunden sprechen für sich.",
      q5: "Haben Sie vegetarische Optionen?",
      a5: "Selbstverständlich! Unsere Speisekarte umfasst eine eigene vegetarische Auswahl mit Falafel-Box, Veggie-Döner und frisch zubereiteten gemischten Salaten — bereits ab 5,50 €. Teilen Sie unserem Team einfach Ihre Wünsche mit, und wir kümmern uns um den Rest."
    },
    menu: {
      eyebrow: "Unser Angebot",
      title: "Die komplette Speisekarte",
      categories: "Entdecke unsere Kategorien",
      items: "Artikel"
    },
    aboutFull: {
      eyebrow: "Über uns",
      title: "Unsere Geschichte",
      intro1: "Wir sind ein türkisches Kebap- und Pizzahaus an der Brunnenstraße in Weilheim an der Teck.",
      intro2: "Döner, Pide, Lahmacun, Pizza — täglich frisch zubereitet. Bei uns essen, mitnehmen oder liefern lassen. Ganz einfach.",
      section2Title: "Das Essen steht im Mittelpunkt.",
      section2p1: "Döner frisch vom Drehspieß geschnitten. Pizza von Hand geformt. Vegetarische Optionen, die tatsächlich gut schmecken. Für jeden etwas dabei — auch für die Kinder.",
      section2p2: "Jeden Tag ab 10:30 Uhr geöffnet. Auch spät abends noch für dich da. Wenn du Hunger hast, haben wir wahrscheinlich geöffnet.",
      section3Title: "Du kommst vorbei?",
      section3p1: "Kein Stress. Lockere Atmosphäre, gemütliches Ambiente, Tischservice. Bring die Familie mit — wir haben Hochstühle und ein Kindermenü. Kommst du mit einer Gruppe? Kein Problem. Alleine zum Mittagessen? Auch super.",
      section3p2: "Rollstuhlgerechter Eingang, Sitzplätze und Toilette. Reservierungen werden gerne angenommen. Kartenzahlung willkommen — Kredit- und EC-Karten funktionieren.",
      section3p3: "Bring den Hund mit. Er darf gerne mit dir draußen sitzen.",
      section3p4: "Kostenlose Parkplätze direkt vor der Tür — Parkplatz und Straße sind beide kostenlos.",
      howToGet: "So kommst du an dein Essen:",
      dineInDesc: "Setz dich, lass dich bedienen, lass dir Zeit.",
      takeawayDesc: "Bestelle vor oder komm einfach vorbei.",
      deliveryDesc: "Bestelle über Lieferando, direkt an deine Tür.",
      hoursLocationTitle: "Öffnungszeiten & Standort",
      hoursLabel: "Öffnungszeiten",
      locationLabel: "Standort & Kontakt"
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Kontaktiere uns",
      location: "Standort",
      phone: "Telefon",
      hours: "Öffnungszeiten",
      hoursText: "Mo - Sa: 10:30 – 21:30 Uhr\nSo: 11:00 – 21:00 Uhr",
      faqTitle: "Häufige Fragen (FAQ)",
      formTitle: "Schreibe uns eine Nachricht",
      lblName: "Name",
      lblEmail: "E-Mail",
      lblMessage: "Nachricht",
      plName: "Dein vollständiger Name",
      plEmail: "deine@email.com",
      plMessage: "Wie können wir dir helfen?",
      btnSubmit: "Nachricht senden"
    },
    reservation: {
      eyebrow: "Reservieren",
      title: "Tisch buchen",
      subtitle: "Planst du einen Besuch? Lass uns wissen, wann du kommst, und wir halten einen gemütlichen Platz für dich bereit.",
      lblDate: "Datum",
      lblTime: "Uhrzeit",
      lblGuests: "Anzahl der Gäste",
      optPerson: "Person",
      optPeople: "Personen",
      lblName: "Name",
      lblPhone: "Telefon",
      lblEmail: "E-Mail (Optional)",
      lblRequests: "Besondere Wünsche (Optional)",
      plRequests: "Hochstuhl benötigt, Allergien, usw.",
      btnSubmit: "Reservierung anfragen",
      note: "Wir werden deine Reservierung in Kürze per Telefon oder E-Mail bestätigen."
    },
    footer: {
      locatedAt: "Standort",
      openInMaps: "In Maps öffnen",
      social: "Social Media",
      navigation: "Navigation",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      reservations: "Reservations",
      about: "About Us",
      contact: "Contact"
    },
    hero: {
      eyebrow: "A cozy corner for Turkish taste",
      title1: "Döner & Pizza.",
      title2: "Weilheim's Finest.",
      subtitle: "Turkish flavours, fresh every day — dine in, take away, or get it delivered to your door.",
      btnPrimary: "Order Online",
      btnSecondary: "View Menu",
      hours: "Open Mon–Sat 10:30 – 21:30 · Sun 11:00 – 21:00 · Brunnenstraße 1, Weilheim"
    },
    whatWeDo: {
      kebabTitle: "Döner & Kebap",
      kebabDesc: "Juicy rotisserie meat, handmade sauces, wrapped just the way you like it.",
      pizzaTitle: "Handmade Pizza",
      pizzaDesc: "29cm stone-baked pizzas. Classic, creative, or loaded with döner — your call.",
      saladsTitle: "Fresh Salads & Sides",
      saladsDesc: "Crisp, made-to-order. Because good food deserves a good side."
    },
    aboutSnippet: {
      title1: "More Than a Meal.",
      title2: "It's a Habit.",
      p1: "We've been feeding Weilheim the good stuff for years — and we're not stopping. At Star Kebap & Pizza Haus, every plate is made with care, every customer treated like a regular, and every visit leaves you thinking about when you're coming back.",
      p2: "Casual vibes. Cozy space. Friendly faces. And food that actually tastes like someone made it for you — because they did.",
      btn: "Our Story"
    },
    featured: {
      eyebrow: "Featured",
      title: "The Crowd Favourites",
      btn: "See Full Menu",
      item1Desc: "Tender rotisserie meat over bread, drenched in tomato sauce and cool yogurt. A Turkish classic, done right.",
      item2Desc: "Rotisserie meat, peppers, tomatoes on a crispy base. Our house pride in every bite.",
      item3Desc: "Melted cheese, creamy sauce, tomato. The döner, elevated."
    },
    reviews: {
      title: "Don't Just Take Our Word For It",
      subtitle: "4.9 out of 5 stars based on 385+ Google Reviews"
    },
    orderOptions: {
      title: "Get It Your Way",
      dineInTitle: "Dine In",
      dineInDesc: "Relax, stay a while. Family tables, high chairs, good vibes.",
      dineInBtn: "Book a table",
      takeawayTitle: "Takeaway",
      takeawayDesc: "Order ahead or walk in. Ready when you are.",
      takeawayBtn: "Call to order",
      deliveryTitle: "Delivery",
      deliveryDesc: "Order online via Lieferando — straight to your door.",
      deliveryBtn: "Order Now"
    },
    homeFaq: {
      eyebrow: "Answers",
      title: "Frequently Asked Questions",
      q1: "What are your opening hours?",
      a1: "We are open Monday to Friday from 10:30 AM to 9:30 PM, and on Saturdays, Sundays, and public holidays from 11:00 AM to 9:00 PM. Hours may occasionally vary during public holidays or seasonal breaks — feel free to call us to confirm.",
      q2: "Do you offer takeaway and delivery?",
      a2: "Yes! We offer takeaway directly from our restaurant. You can also order online for delivery through Lieferando. Simply visit our website or call us at +49 7023 9424183 to place your order.",
      q3: "Where are you located and is parking available?",
      a3: "You'll find us at Brunnenstraße 1, 73235 Weilheim an der Teck, Germany. Free parking is available nearby, making it easy to stop by for a quick meal or takeaway at any time.",
      q4: "Can I trust the quality — what do your customers say?",
      a4: "We hold a 4.9-star rating on Google Maps based on over 385 reviews. Our guests consistently praise the freshness of our ingredients, generous portions, and warm service — available in both German and English. We let our food and our customers speak for themselves.",
      q5: "Do you serve vegetarian options?",
      a5: "Absolutely! Our menu includes a dedicated vegetarian selection featuring Falafel Box, Veggie Döner, and freshly prepared mixed salads — all starting from €5.50. Just let our team know your preference and we'll take care of the rest."
    },
    menu: {
      eyebrow: "Our Offerings",
      title: "The Full Menu",
      categories: "Explore Categories",
      items: "Items"
    },
    aboutFull: {
      eyebrow: "About Us",
      title: "Our Story",
      intro1: "We're a Turkish kebap and pizza place on Brunnenstraße, Weilheim an der Teck.",
      intro2: "Döner, pide, lahmacun, pizza — made fresh daily. You eat here, take it away, or get it delivered. Simple.",
      section2Title: "The food is the point.",
      section2p1: "Döner carved off the rotisserie. Pizza stretched by hand. Vegetarian options that actually taste good. Something for everyone — including the kids.",
      section2p2: "Open from 10:30 every day. Late-night food available. If you're hungry, we're probably open.",
      section3Title: "Coming in?",
      section3p1: "No stress. Casual place, cozy feel, table service. Bring the family — we've got high chairs and a kids' menu. Coming with a group? No problem. Solo lunch? Also fine.",
      section3p2: "Wheelchair-accessible entrance, seating, and toilet. Reservations accepted. Cards welcome — credit and debit both work.",
      section3p3: "Bring the dog. They can sit outside with you.",
      section3p4: "Free parking right outside — lot and street both free.",
      howToGet: "How to get your food:",
      dineInDesc: "Sit down, get served, take your time.",
      takeawayDesc: "Order ahead or walk in.",
      deliveryDesc: "Order via Lieferando, straight to your door.",
      hoursLocationTitle: "Hours & Location",
      hoursLabel: "Hours",
      locationLabel: "Location & Contact"
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Contact Us",
      location: "Location",
      phone: "Phone",
      hours: "Hours",
      hoursText: "Mon - Sat: 10:30 am – 9:30 pm\nSun: 11:00 am – 9:00 pm",
      faqTitle: "Quick FAQ",
      formTitle: "Send us a message",
      lblName: "Name",
      lblEmail: "Email",
      lblMessage: "Message",
      plName: "Your full name",
      plEmail: "your@email.com",
      plMessage: "How can we help you?",
      btnSubmit: "Send Message"
    },
    reservation: {
      eyebrow: "Reserve",
      title: "Book a table",
      subtitle: "Planning a visit? Let us know when you're coming and we'll have a cozy spot ready for you.",
      lblDate: "Date",
      lblTime: "Time",
      lblGuests: "Number of Guests",
      optPerson: "Person",
      optPeople: "People",
      lblName: "Name",
      lblPhone: "Phone",
      lblEmail: "Email (Optional)",
      lblRequests: "Special Requests (Optional)",
      plRequests: "High chair needed, allergies, etc.",
      btnSubmit: "Request Reservation",
      note: "We will confirm your reservation via phone or email shortly."
    },
    footer: {
      locatedAt: "Located at",
      openInMaps: "Open in Maps",
      social: "Social",
      navigation: "Navigation",
      rights: "All rights reserved."
    }
  }
};

// --- DATA FROM RESEARCH REPORT (BILINGUAL) ---
const getMenuData = (lang) => {
  return {
    [lang === 'de' ? "SALATE" : "SALADS"]: [
      { name: 'Salat Tonno', desc: lang === 'de' ? 'Mit Thunfisch' : 'With tuna', price: '7.50 €', isVeg: false },
      { name: 'Gemischter Salat', desc: lang === 'de' ? 'Mit Sauce' : 'With house dressing', price: '6.50 €', isVeg: true },
      { name: 'Krautsalat', desc: lang === 'de' ? 'Weiß- und Rotkraut' : 'Red and white cabbage', price: '5.50 €', isVeg: true },
    ],
    "PIZZA (Ø 29cm)": [
      { name: 'Pizza Star', desc: lang === 'de' ? 'Mit Drehspießfleisch, Paprika und Tomaten' : 'With rotisserie meat, peppers, and tomatoes', price: '12.00 €', isVeg: false },
      { name: 'Pizza Döner Scheibenfleisch', desc: lang === 'de' ? 'Mit zartem Scheibenfleisch' : 'With tender sliced beef', price: '12.50 €', isVeg: false },
      { name: 'Pizza Döner Hackspießfleisch', desc: lang === 'de' ? 'Mit Hackspießfleisch' : 'With minced rotisserie meat', price: '12.00 €', isVeg: false },
      { name: 'Pizza Sucuk', desc: lang === 'de' ? 'Mit türkischer Knoblauchwurst' : 'With Turkish garlic sausage', price: '12.00 €', isVeg: false },
      { name: 'Pizza Neu', desc: lang === 'de' ? 'Mit Eiern und türkischer Knoblauchwurst' : 'With eggs and Turkish garlic sausage', price: '12.00 €', isVeg: false },
      { name: 'Pizza Gemischt', desc: lang === 'de' ? 'Mit Putenschinken, Rindersalami, Champignons und Paprika' : 'With turkey ham, beef salami, mushrooms, and peppers', price: '12.00 €', isVeg: false },
      { name: 'Pizza Hawaii', desc: lang === 'de' ? 'Mit Ananas und Putenschinken' : 'With pineapple and turkey ham', price: '11.50 €', isVeg: false },
      { name: 'Pizza Tonno', desc: lang === 'de' ? 'Mit Thunfisch und Zwiebeln' : 'With tuna and onions', price: '11.50 €', isVeg: false },
      { name: 'Pizza Milano', desc: lang === 'de' ? 'Mit Spinat und Weichkäse' : 'With spinach and soft cheese', price: '11.50 €', isVeg: true },
      { name: 'Pizza Vegetarisch', desc: lang === 'de' ? 'Mit Spinat, Champignons, Tomaten und Paprika' : 'With spinach, mushrooms, tomatoes, and peppers', price: '11.00 €', isVeg: true },
      { name: 'Pizza Rindersalami und Putenschinken', desc: lang === 'de' ? 'Mit Rindersalami und Putenschinken' : 'With beef salami and turkey ham', price: '11.00 €', isVeg: false },
      { name: 'Pizza 3 Käse', desc: lang === 'de' ? 'Mit Weichkäse und Mozzarella' : 'With soft cheese and mozzarella', price: '11.50 €', isVeg: true },
      { name: 'Pizza Artischocken', desc: lang === 'de' ? 'Mit Artischocken' : 'With artichokes', price: '11.50 €', isVeg: true },
      { name: 'Pizza Funghi', desc: lang === 'de' ? 'Mit frischen Champignons' : 'With fresh mushrooms', price: '10.50 €', isVeg: true },
      { name: 'Pizza Peperoni', desc: lang === 'de' ? 'Mit Peperoni' : 'With pepperoni', price: '10.50 €', isVeg: true },
      { name: 'Pizza Zwiebeln', desc: lang === 'de' ? 'Mit Zwiebeln' : 'With onions', price: '10.50 €', isVeg: true },
      { name: 'Pizza Oliven', desc: lang === 'de' ? 'Mit Oliven' : 'With olives', price: '10.50 €', isVeg: true },
      { name: 'Pizza Mais', desc: lang === 'de' ? 'Mit Mais' : 'With corn', price: '10.50 €', isVeg: true },
      { name: 'Pizza Rindersalami', desc: lang === 'de' ? 'Mit Rindersalami' : 'With beef salami', price: '10.50 €', isVeg: false },
      { name: 'Pizza Putenschinken', desc: lang === 'de' ? 'Mit Putenschinken' : 'With turkey ham', price: '10.50 €', isVeg: false },
      { name: 'Pizza Paprika', desc: lang === 'de' ? 'Mit frischer Paprika' : 'With fresh bell peppers', price: '10.50 €', isVeg: true },
      { name: 'Pizza Margherita', desc: lang === 'de' ? 'Klassisch mit Tomatensauce und Käse' : 'Classic with tomato sauce and cheese', price: '9.50 €', isVeg: true },
    ],
    "CALZONE": [
      { name: 'Calzone Star', desc: lang === 'de' ? 'Mit Dönerfleisch, Paprika und Tomaten' : 'With döner meat, peppers, and tomatoes', price: '11.50 €', isVeg: false },
      { name: 'Calzone Döner Scheibenfleisch', desc: lang === 'de' ? 'Mit Rind-Scheibenfleisch' : 'With sliced beef', price: '11.50 €', isVeg: false },
      { name: 'Calzone 3 Käse', desc: lang === 'de' ? 'Mit Käse, Weichkäse und Mozzarella' : 'With cheese, soft cheese, and mozzarella', price: '11.50 €', isVeg: true },
      { name: 'Calzone Veggi', desc: lang === 'de' ? 'Mit Spinat, Tomaten, Champignons und Paprika' : 'With spinach, tomatoes, mushrooms, and peppers', price: '11.50 €', isVeg: true },
      { name: 'Calzone mit Hackspießfleisch', desc: lang === 'de' ? 'Mit Döner-Hackspießfleisch' : 'With minced döner meat', price: '10.50 €', isVeg: false },
      { name: 'Calzone mit Spinat und Tomaten', desc: lang === 'de' ? 'Mit Spinat und Tomaten' : 'With spinach and tomatoes', price: '10.00 €', isVeg: true },
      { name: 'Calzone mit Weichkäse und Oliven', desc: lang === 'de' ? 'Mit Weichkäse und Oliven' : 'With soft cheese and olives', price: '10.00 €', isVeg: true },
      { name: 'Calzone mit Rindersalami', desc: lang === 'de' ? 'Mit Rindersalami' : 'With beef salami', price: '10.00 €', isVeg: false },
    ],
    "PIDE": [
      { name: 'Pide Star', desc: lang === 'de' ? 'Mit Dönerfleisch, Paprika und Tomaten' : 'With döner meat, peppers, and tomatoes', price: '12.00 €', isVeg: false },
      { name: 'Pide Döner Scheibenfleisch', desc: lang === 'de' ? 'Mit Rind-Scheibenfleisch' : 'With sliced beef', price: '12.00 €', isVeg: false },
      { name: 'Pide Veggi', desc: lang === 'de' ? 'Mit Spinat, Tomaten, Paprika und Champignons' : 'With spinach, tomatoes, peppers, and mushrooms', price: '12.00 €', isVeg: true },
      { name: 'Pide mit Hackfleisch, Käse und Ei', desc: lang === 'de' ? 'Mit Hackfleisch, Käse und Ei' : 'With minced meat, cheese, and egg', price: '11.00 €', isVeg: false },
      { name: 'Pide mit Sucuk', desc: lang === 'de' ? 'Mit türkischer Knoblauchwurst' : 'With Turkish garlic sausage', price: '11.00 €', isVeg: false },
      { name: 'Pide Döner Hackspießfleisch', desc: lang === 'de' ? 'Mit Döner-Hackspießfleisch' : 'With minced döner meat', price: '11.00 €', isVeg: false },
      { name: 'Pide mit Spinat, Käse und Ei', desc: lang === 'de' ? 'Mit Spinat, Käse und Ei' : 'With spinach, cheese, and egg', price: '11.00 €', isVeg: true },
      { name: 'Pide 3 Käse', desc: lang === 'de' ? 'Mit Käse, Weichkäse und Mozzarella' : 'With cheese, soft cheese, and mozzarella', price: '11.00 €', isVeg: true },
      { name: 'Pide mit Hackfleisch und Käse', desc: lang === 'de' ? 'Mit Hackfleisch und Käse' : 'With minced meat and cheese', price: '10.50 €', isVeg: false },
      { name: 'Pide mit Spinat und Käse', desc: lang === 'de' ? 'Mit Spinat und Käse' : 'With spinach and cheese', price: '10.50 €', isVeg: true },
      { name: 'Pide mit Käse und Weichkäse', desc: lang === 'de' ? 'Mit Käse und Weichkäse' : 'With cheese and soft cheese', price: '9.50 €', isVeg: true },
      { name: 'Pide mit Hackfleisch', desc: lang === 'de' ? 'Mit Hackfleisch' : 'With minced meat', price: '9.50 €', isVeg: false },
    ],
    [lang === 'de' ? "DÖNER KEBAP (HACKSPIEß)" : "DÖNER KEBAP (MINCED)"]: [
      { name: 'Döner Teller Hackspießfleisch', desc: lang === 'de' ? 'Mit Salat, Sauce und einer Beilage nach Wahl' : 'With salad, sauce, and a side of choice', price: '14.00 €', isVeg: false },
      { name: 'Iskender Kebap Hackspießfleisch', desc: lang === 'de' ? 'Mit Brotstücken, Tomatensauce und Joghurtsauce' : 'With bread pieces, tomato sauce, and yogurt sauce', price: '14.00 €', isVeg: false },
      { name: 'Döner überbacken Tomatensauce', desc: lang === 'de' ? 'Mit Sahne, Champignons, Paprika und Käse überbacken' : 'Baked with cream, mushrooms, peppers, and cheese', price: '14.00 €', isVeg: false },
      { name: 'Döner überbacken Hackspießfleisch', desc: lang === 'de' ? 'Mit Käse, Tomatensauce und Sahne überbacken' : 'Baked with cheese, tomato sauce, and cream', price: '13.00 €', isVeg: false },
      { name: 'Döner Box Hackspießfleisch', desc: lang === 'de' ? 'Mit Sauce und einer Beilage nach Wahl' : 'With sauce and a side of choice', price: '9.00 €', isVeg: false },
      { name: 'Yufka Döner Hackspießfleisch', desc: lang === 'de' ? 'Gerollt im dünnen Teig' : 'Rolled in thin dough', price: '9.00 €', isVeg: false },
      { name: 'Döner Kebap Hackspießfleisch', desc: lang === 'de' ? 'Klassisch im Fladenbrot' : 'Classic in flatbread', price: '8.00 €', isVeg: false },
      { name: 'Döner 1/2 Hackspießfleisch', desc: lang === 'de' ? 'Kleiner Döner im Fladenbrot' : 'Small döner in flatbread', price: '6.00 €', isVeg: false },
    ],
    [lang === 'de' ? "DÖNER KEBAP (SCHEIBENFLEISCH)" : "DÖNER KEBAP (SLICED BEEF)"]: [
      { name: 'Dönerteller Scheibenfleisch', desc: lang === 'de' ? 'Mit Salat, Sauce und einer Beilage' : 'With salad, sauce, and a side', price: '15.00 €', isVeg: false },
      { name: 'Iskender vom Scheibenfleisch', desc: lang === 'de' ? 'Mit Tomatensauce, Joghurtsauce und Brotstücken' : 'With tomato sauce, yogurt sauce, and bread pieces', price: '15.00 €', isVeg: false },
      { name: 'Döner Überbacken', desc: lang === 'de' ? 'Mit Käse, Champignons und Paprika überbacken' : 'Baked with cheese, mushrooms, and peppers', price: '15.00 €', isVeg: false },
      { name: 'Yufka Scheibenfleisch', desc: lang === 'de' ? 'Gerollt im dünnen Teig' : 'Rolled in thin dough', price: '10.00 €', isVeg: false },
      { name: 'Dönerbox Scheibenfleisch', desc: lang === 'de' ? 'Mit Sauce und einer Beilage nach Wahl' : 'With sauce and a side of choice', price: '9.50 €', isVeg: false },
      { name: 'Döner Scheibenfleisch', desc: lang === 'de' ? 'Im Fladenbrot' : 'In flatbread', price: '9.00 €', isVeg: false },
      { name: 'Döner Klein Scheibenfleisch', desc: lang === 'de' ? 'Kleiner Döner' : 'Small döner', price: '7.00 €', isVeg: false },
    ],
    [lang === 'de' ? "FALAFEL & VEGETARISCH" : "FALAFEL & VEGETARIAN"]: [
      { name: 'Falafel Teller', desc: lang === 'de' ? 'Mit Salat und einer Beilage nach Wahl' : 'With salad and a side of choice', price: '11.00 €', isVeg: true },
      { name: 'Falafel Box', desc: lang === 'de' ? 'Mit einer Beilage nach Wahl' : 'With a side of choice', price: '7.50 €', isVeg: true },
      { name: 'Falafel im Yufka', desc: lang === 'de' ? 'Knusprige Falafel gerollt im Yufka' : 'Crispy falafel rolled in yufka', price: '7.50 €', isVeg: true },
      { name: 'Yufka (vegetarisch)', desc: lang === 'de' ? 'Vegetarisch gerollt im Yufka' : 'Vegetarian rolled in yufka', price: '7.50 €', isVeg: true },
      { name: 'Falafel im Fladenbrot', desc: lang === 'de' ? 'Knusprige Falafel im Fladenbrot' : 'Crispy falafel in flatbread', price: '6.50 €', isVeg: true },
      { name: 'Döner (vegetarisch)', desc: lang === 'de' ? 'Vegetarischer Döner im Fladenbrot' : 'Vegetarian döner in flatbread', price: '6.50 €', isVeg: true },
    ],
    "LAHMACUN": [
      { name: 'Lahmacun Teller Scheibenfleisch', desc: lang === 'de' ? 'Mit Salat, Sauce und Scheibenfleisch' : 'With salad, sauce, and sliced beef', price: '13.00 €', isVeg: false },
      { name: 'Lahmacun Teller Hackspießfleisch', desc: lang === 'de' ? 'Mit Salat, Sauce und Hackspießfleisch' : 'With salad, sauce, and minced meat', price: '12.00 €', isVeg: false },
      { name: 'Lahmacun Spezial Scheibenfleisch', desc: lang === 'de' ? 'Mit Salat, Sauce und Scheibenfleisch gerollt' : 'Rolled with salad, sauce, and sliced beef', price: '11.00 €', isVeg: false },
      { name: 'Lahmacun Spezial Hackspießfleisch', desc: lang === 'de' ? 'Mit Salat, Sauce und Hackspießfleisch gerollt' : 'Rolled with salad, sauce, and minced meat', price: '10.00 €', isVeg: false },
      { name: 'Lahmacun mit Salat', desc: lang === 'de' ? 'Mit frischem Salat gerollt' : 'Rolled with fresh salad', price: '8.00 €', isVeg: true },
      { name: 'Lahmacun', desc: lang === 'de' ? 'Türkische Pizza (ohne extra Belag)' : 'Turkish Pizza (no extra toppings)', price: '5.50 €', isVeg: false },
    ],
    "FAST FOOD": [
      { name: 'Putenschnitzel Teller', desc: lang === 'de' ? 'Mit Pommes frites, Salat und Sauce' : 'With french fries, salad, and sauce', price: '12.00 €', isVeg: false },
      { name: 'Nuggets Yufka', desc: lang === 'de' ? 'Mit Salat und Pommes frites im Yufka gerollt' : 'With salad and french fries rolled in yufka', price: '8.50 €', isVeg: false },
      { name: 'Chicken Nuggets (6 Stück)', desc: lang === 'de' ? 'Mit Pommes frites' : 'With french fries', price: '7.00 €', isVeg: false },
      { name: 'Pommes frites', desc: lang === 'de' ? 'Mit Sauce nach Wahl' : 'With sauce of choice', price: '4.50 €', isVeg: true },
    ],
    [lang === 'de' ? "GETRÄNKE" : "DRINKS"]: [
      { name: 'Uludag Gazoz (0,5l)', desc: lang === 'de' ? 'Erfrischende türkische Limonade (EINWEG)' : 'Refreshing Turkish lemonade', price: '3.50 €', isVeg: true },
      { name: 'Red Bull (0,25l)', desc: lang === 'de' ? 'Energy Drink (EINWEG)' : 'Energy Drink', price: '3.50 €', isVeg: true },
      { name: 'Coca-Cola / Fanta / Sprite / Mezzo Mix (0,5l)', desc: lang === 'de' ? 'PET Flasche (EINWEG)' : 'PET Bottle', price: '3.50 €', isVeg: true },
      { name: 'Coca-Cola / Fanta / Sprite / Mezzo Mix (0,33l)', desc: lang === 'de' ? 'Dose (EINWEG)' : 'Can', price: '3.00 €', isVeg: true },
      { name: 'Fresh Ayran (0,25l)', desc: lang === 'de' ? 'Türkisches Joghurtgetränk' : 'Turkish yogurt drink', price: '2.50 €', isVeg: true },
      { name: 'ViO spritzig / Christel Wasser still (0,5l)', desc: lang === 'de' ? 'Mineralwasser (EINWEG)' : 'Mineral water', price: '2.50 €', isVeg: true },
      { name: 'Wizzi Drinks (0,5l)', desc: lang === 'de' ? 'Exotic, Pfirsich, Kaktusfeige, Lemon, Kirsche-Zitrone, Granatapfel, Wassermelone' : 'Exotic, Peach, Cactus Fig, Lemon, Cherry-Lime, Pomegranate, Watermelon', price: '2.50 €', isVeg: true },
    ]
  };
};

const getCustomerReviews = (lang) => {
  return [
    { id: 1, name: "David", rating: 5, date: "Google Review", text: lang === 'de' ? "Sauber, hochwertiges Essen und exzellenter Kundenservice. Tolle Preise. Ein großartiger Ort für ein legeres Essen. Sehr empfehlenswert." : "Pride of ownership is the watchword here. Clean, high quality food with excellent customer service. Great prices. This is a great place to eat a casual meal. Highly recommended.", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Nick Weessies", rating: 5, date: "Google Review", text: lang === 'de' ? "Leckerer Kebab, frischer Salat, knusprige Pommes und vor allem: super freundliche Mitarbeiter. Ich würde diesen Ort absolut empfehlen." : "Delicious kebab, fresh salad, crispy pommes frites and most importantly; super friendly employees. I would absolutely recommend this place.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Senkotenkoo", rating: 5, date: "Google Review", text: lang === 'de' ? "Bester Kebab der Stadt. Die Jungs sind immer nett und lächeln. Sie machen köstliche Pide und alles von der Karte 😊" : "Best kebap in city, The guys are so kind and smiling everytime. They are making delicious pide and everything from menu 😊", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "S Harmsen", rating: 4, date: "Google Review", text: lang === 'de' ? "Günstig und lecker. Hat neben Falafel auch noch andere vegetarische Optionen." : "Cheap and tasty. Also has vegetarian options other than falafel.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "tom darrohn", rating: 5, date: "Google Review", text: lang === 'de' ? "Köstliches und frisches Essen, freundlicher Service!" : "Delicious and fresh food, friendly service!", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Catherine L", rating: 4, date: "Google Review", text: lang === 'de' ? "Guter Döner zu einem fairen Preis." : "Good Döner with reasonable price.", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Milusic Dalibor", rating: 4, date: "Google Review", text: "Ok", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Tomas Mitura", rating: 5, date: "Google Review", text: lang === 'de' ? "Bester Kebab" : "Best kebab", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Arete MassageSpa", rating: 5, date: "Google Review", text: lang === 'de' ? "Mein erstes Mal Kebab in Weilheim. Das Essen war sehr lecker und frisch, und alles wurde mit großer Sorgfalt zubereitet. Der Ort war sehr sauber und die Atmosphäre einladend." : "It was my first time trying kebab in Weilheim The food was very tasty and fresh, and everything was prepared with great care. The place was very clean and the atmosphere was welcoming.", image: "https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "N “Mr Writer” Sb", rating: 5, date: "Google Review", text: lang === 'de' ? "Unglaublich freundliches Personal – der Kunde ist hier wirklich König! Exzellentes Preis-Leistungs-Verhältnis, aber vor allem: absolut köstlich." : "Incredibly friendly staff – the customer is truly king here! Excellent value for money, but most importantly: absolutely delicious.", image: "https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Justin Olnhoff", rating: 5, date: "Google Review", text: lang === 'de' ? "Unrealistisch gut und ziemlich günstig. 100% empfehlenswert." : "Unreal good, and quite cheap. Amazing service in English. 100% recommend" },
    { id: 12, name: "Robert Dall Osteria", rating: 5, date: "Google Review", text: "Service: 5/5" },
    { id: 13, name: "Anette Sen", rating: 5, date: "Google Review", text: lang === 'de' ? "Ich komme aus Aschaffenburg und wann immer ich dort bin, esse ich sofort einen Döner. Den besten Döner gibt es hier im Star Kebap Haus, mit sehr freundlichem Personal." : "I come from Aschaffenburg and whenever I'm there I always go for a doner kebab at once, and only the best doner kebab can be found here at Star Kebap Haus, with very friendly staff." },
    { id: 14, name: "Codrut Calinoiu", rating: 5, date: "Google Review", text: lang === 'de' ? "Lecker" : "delicious" },
    { id: 15, name: "Benjamin Z", rating: 5, date: "Google Review", text: "Super" },
  ];
};

const App = () => {
  const [lang, setLang] = useState('de'); // Default language is German
  const [scrollProgress, setScrollProgress] = useState(0); // Progress bar state
  const t = dict[lang];

  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Derived state based on language
  const menuData = getMenuData(lang);
  const reviews = getCustomerReviews(lang);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentPage]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // --- PAGE COMPONENTS ---

  const HomeFAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqsList = [
      { q: t.homeFaq.q1, a: t.homeFaq.a1 },
      { q: t.homeFaq.q2, a: t.homeFaq.a2 },
      { q: t.homeFaq.q3, a: t.homeFaq.a3 },
      { q: t.homeFaq.q4, a: t.homeFaq.a4 },
      { q: t.homeFaq.q5, a: t.homeFaq.a5 },
    ];

    return (
      <section className="py-8 md:py-12 max-w-3xl mx-auto w-full mt-4">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-2">{t.homeFaq.eyebrow}</p>
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-[3.5rem] font-semibold tracking-[-0.04em] text-[#111111] leading-[1.1]">
            {t.homeFaq.title}
          </h2>
        </div>

        <div className="bg-[#F2F1EC] rounded-2xl md:rounded-[2rem] overflow-hidden text-left border border-[#E8E7E2]">
          {faqsList.map((faq, index) => (
            <div 
              key={index} 
              className={`border-[#E5E5E5] ${index !== faqsList.length - 1 ? 'border-b' : ''}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 md:p-6 hover:bg-[#ebeae5] transition-colors active:bg-[#e4e3de]"
              >
                <span className="font-outfit text-base md:text-lg font-medium pr-4 text-left">{faq.q}</span>
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A] shadow-sm border border-[#E5E5E5]'}`}>
                  <Plus size={16} strokeWidth={2} className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`} />
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 md:px-6 pb-6 text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed pr-10 md:pr-16 whitespace-pre-line">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const HomePage = () => (
    <>
      {/* SECTION 1 - HERO */}
      <section className="pt-4 md:pt-6 pb-10 md:pb-16 flex flex-col items-center text-center">
        <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-3 md:mb-4">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-outfit text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-[-0.03em] mb-4 md:mb-5 max-w-4xl mx-auto text-[#111111]">
          {t.hero.title1} <br className="hidden sm:block" /> {t.hero.title2}
        </h1>
        <p className="text-[#5A5A5A] text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed font-light px-2">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-4 mb-6 w-full px-2 sm:px-0 max-w-sm mx-auto sm:max-w-none">
          <a href="https://www.lieferando.de" target="_blank" rel="noreferrer" className="w-full sm:w-auto text-center bg-[#FFCBA4] hover:bg-[#ffbd8f] text-[#1A1A1A] px-5 md:px-8 py-3.5 rounded-full font-medium text-sm md:text-base transition-all active:scale-95 shadow-sm whitespace-nowrap">
            {t.hero.btnPrimary}
          </a>
          <button onClick={() => navigateTo('menu')} className="w-full sm:w-auto text-center bg-transparent border border-[#E8E7E2] hover:border-[#B26941] text-[#B26941] px-5 md:px-8 py-3.5 rounded-full font-medium text-sm md:text-base transition-all active:scale-95 whitespace-nowrap">
            {t.hero.btnSecondary}
          </button>
        </div>
        <p className="text-[#7A7A7A] text-[11px] md:text-sm font-medium tracking-wide mb-6 md:mb-8 px-4">
          {t.hero.hours}
        </p>
        <div className="w-full">
          <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-sm border border-[#F0F0F0]">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Delicious Turkish Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHAT WE DO */}
      <section className="my-8 md:my-12 bg-[#F2F1EC] rounded-2xl md:rounded-[2.5rem] px-5 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] text-[#FFCBA4] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Utensils className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A] mb-2">{t.whatWeDo.kebabTitle}</h3>
            <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed">
              {t.whatWeDo.kebabDesc}
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] text-[#FFCBA4] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Pizza className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A] mb-2">{t.whatWeDo.pizzaTitle}</h3>
            <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed">
              {t.whatWeDo.pizzaDesc}
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1A1A1A] text-[#FFCBA4] rounded-full flex items-center justify-center mb-3 md:mb-4">
              <Leaf className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A] mb-2">{t.whatWeDo.saladsTitle}</h3>
            <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed">
              {t.whatWeDo.saladsDesc}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ABOUT US */}
      <section className="py-8 md:py-12 border-t border-[#F0F0F0]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-outfit text-3xl md:text-4xl lg:text-[3.5rem] font-semibold tracking-[-0.04em] mb-4 leading-[1.1] text-[#111111]">
              {t.aboutSnippet.title1} <br className="hidden md:block"/> {t.aboutSnippet.title2}
            </h2>
            <p className="text-[#5A5A5A] text-sm md:text-lg mb-3 md:mb-4 font-light leading-relaxed">
              {t.aboutSnippet.p1}
            </p>
            <p className="text-[#5A5A5A] text-sm md:text-lg mb-5 md:mb-6 font-light leading-relaxed">
              {t.aboutSnippet.p2}
            </p>
            <button onClick={() => navigateTo('about')} className="text-[#B26941] text-sm md:text-base font-medium border-b border-[#B26941] pb-0.5 md:pb-1 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors inline-block">
              {t.aboutSnippet.btn}
            </button>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[350px] lg:h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden">
            <img src="1000178837.jpg" alt="Star Kebap Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4 - MENU HIGHLIGHT */}
      <section className="py-8 md:py-12 border-t border-[#F0F0F0]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 md:mb-6 gap-3">
          <div>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-1.5">{t.featured.eyebrow}</p>
            <h2 className="font-outfit text-3xl md:text-4xl lg:text-[3.5rem] font-semibold tracking-[-0.04em] text-[#111111] leading-[1.1]">
              {t.featured.title}
            </h2>
          </div>
          <button onClick={() => navigateTo('menu')} className="text-[#B26941] text-sm md:text-base font-medium border-b border-[#B26941] pb-0.5 hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors">
            {t.featured.btn}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl md:rounded-[1.5rem] border border-[#F0F0F0] overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Iskender Kebap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A]">Iskender Kebap</h3>
                <span className="font-medium text-[#1A1A1A] text-sm md:text-base">14.00 €</span>
              </div>
              <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed mb-3 flex-grow">{t.featured.item1Desc}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-[1.5rem] border border-[#F0F0F0] overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pizza Star" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A]">Pizza Star</h3>
                <span className="font-medium text-[#1A1A1A] text-sm md:text-base">12.00 €</span>
              </div>
              <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed mb-3 flex-grow">{t.featured.item2Desc}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-[1.5rem] border border-[#F0F0F0] overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Döner Überbacken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A]">Döner Überbacken</h3>
                <span className="font-medium text-[#1A1A1A] text-sm md:text-base">13.00 €</span>
              </div>
              <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed mb-3 flex-grow">{t.featured.item3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - SOCIAL PROOF (Reviews) */}
      <section className="py-8 md:py-12 border-t border-[#F0F0F0] overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-8">
          <div className="flex gap-1 text-[#FFCBA4] mb-2">
            <Star fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" />
            <Star fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" />
            <Star fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" />
            <Star fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" />
            <Star fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-[3.5rem] font-semibold tracking-[-0.04em] mb-2 text-[#111111]">
            {t.reviews.title}
          </h2>
          <p className="text-[#5A5A5A] text-sm md:text-base font-light">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 md:pb-6 hide-scrollbar snap-x snap-mandatory px-4 md:px-0">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="snap-start shrink-0 w-[250px] md:w-[320px] bg-white rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 border border-[#F0F0F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex gap-1 mb-3 md:mb-4 text-[#FFCBA4]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < review.rating ? "currentColor" : "none"} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] font-light leading-relaxed mb-4 text-sm md:text-base">"{review.text}"</p>
              </div>
              <div>
                {review.image && (
                  <div className="w-full h-28 md:h-32 rounded-xl overflow-hidden mb-3 md:mb-4">
                    <img src={review.image} className="w-full h-full object-cover" alt="Review photo" />
                  </div>
                )}
                <div className="flex justify-between items-center text-xs md:text-sm border-t border-[#F0F0F0] pt-3">
                  <span className="font-medium text-[#1A1A1A]">{review.name}</span>
                  <span className="text-[#7A7A7A]">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 - ORDER OPTIONS */}
      <section className="py-10 md:py-16 border-t border-[#F0F0F0]">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-2">
            {lang === 'de' ? 'Deine Wahl' : 'Your Choice'}
          </p>
          <h2 className="font-outfit text-3xl md:text-4xl lg:text-[3.5rem] font-semibold tracking-[-0.04em] text-[#111111] leading-[1.1]">
            {t.orderOptions.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* CARD 1: DINE IN (Clean White) */}
          <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-[#E8E7E2] text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F9F8F6] group-hover:bg-[#FFCBA4] text-[#B26941] group-hover:text-[#1A1A1A] rounded-full flex items-center justify-center mb-4 transition-colors duration-300">
              <Users className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A] mb-2">{t.orderOptions.dineInTitle}</h3>
            <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed mb-5 flex-grow">{t.orderOptions.dineInDesc}</p>
            <button onClick={() => navigateTo('reservation')} className="text-[#1A1A1A] text-xs md:text-sm font-medium border-b-2 border-[#E8E7E2] hover:border-[#B26941] pb-1 transition-colors uppercase tracking-wide">
              {t.orderOptions.dineInBtn}
            </button>
          </div>
          
          {/* CARD 2: TAKEAWAY (Soft Beige) */}
          <div className="bg-[#F2F1EC] p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-transparent text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white group-hover:bg-[#FFCBA4] text-[#B26941] group-hover:text-[#1A1A1A] rounded-full flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
              <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="font-outfit text-lg md:text-xl font-medium text-[#1A1A1A] mb-2">{t.orderOptions.takeawayTitle}</h3>
            <p className="text-[#5A5A5A] text-sm md:text-base font-light leading-relaxed mb-5 flex-grow">{t.orderOptions.takeawayDesc}</p>
            <a href="tel:+4970239424183" className="text-[#1A1A1A] text-xs md:text-sm font-medium border-b-2 border-[#dcdad1] hover:border-[#B26941] pb-1 transition-colors uppercase tracking-wide">
              {t.orderOptions.takeawayBtn}
            </a>
          </div>

          {/* CARD 3: DELIVERY (Dark Charcoal Accent) */}
          <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-[#1A1A1A] text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#B26941] rounded-full blur-[50px] md:blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2A2A2A] text-[#FFCBA4] rounded-full flex items-center justify-center mb-4 shadow-inner relative z-10 transition-transform duration-300 group-hover:scale-110">
              <Truck className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="font-outfit text-lg md:text-xl font-medium text-white mb-2 relative z-10">{t.orderOptions.deliveryTitle}</h3>
            <p className="text-[#A0A0A0] text-sm md:text-base font-light leading-relaxed mb-5 flex-grow relative z-10">{t.orderOptions.deliveryDesc}</p>
            <a href="https://www.lieferando.de" target="_blank" rel="noreferrer" className="w-full text-center bg-[#FFCBA4] hover:bg-white text-[#1A1A1A] py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold transition-colors relative z-10 tracking-wide active:scale-95 shadow-md">
              {t.orderOptions.deliveryBtn}
            </a>
          </div>
        </div>
      </section>
    </>
  );

  const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState(Object.keys(menuData)[0]);
    
    // Ensure active category updates if language changes
    useEffect(() => {
      setActiveCategory(Object.keys(menuData)[0]);
    }, [lang]);

    return (
      <section className="py-6 md:py-12 max-w-6xl mx-auto">
        
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-2">{t.menu.eyebrow}</p>
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] text-[#111111]">{t.menu.title}</h1>
        </div>

        {/* --- CATEGORY OVERVIEW (PILL CLOUD LAYOUT) --- */}
        <div className="mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-4 px-2">
            <h2 className="font-outfit text-lg md:text-xl font-medium text-[#7A7A7A]">{t.menu.categories}</h2>
            <ChevronDown size={16} className="text-[#B26941]" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {Object.keys(menuData).map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-center transition-all active:scale-95 flex items-center justify-center ${
                  activeCategory === cat 
                    ? 'bg-[#FFCBA4] border-[#FFCBA4] text-[#1A1A1A] shadow-sm font-semibold' 
                    : 'bg-white border-[#E8E7E2] text-[#5A5A5A] hover:border-[#B26941] hover:text-[#1A1A1A] font-medium'
                }`}
              >
                <h3 className="font-outfit text-[13px] md:text-sm tracking-tight">{cat}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* --- ACTIVE CATEGORY ITEMS --- */}
        <div className="bg-white rounded-3xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-sm border border-[#F0F0F0]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#F0F0F0] pb-3 md:pb-4 mb-4 md:mb-6 gap-2">
            <h2 className="font-outfit text-2xl md:text-3xl font-semibold text-[#1A1A1A]">{activeCategory}</h2>
            <span className="text-[#7A7A7A] text-xs md:text-sm font-medium bg-[#F9F8F6] px-3 py-1 rounded-full w-max">{menuData[activeCategory]?.length || 0} {t.menu.items}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-8">
            {menuData[activeCategory] && menuData[activeCategory].map((item, index) => (
              <div key={index} className="flex justify-between items-start gap-3 group">
                <div className="flex-1">
                  <h3 className="font-outfit text-base md:text-lg font-medium text-[#1A1A1A] group-hover:text-[#B26941] transition-colors pr-2 leading-snug">{item.name}</h3>
                  {item.desc && (
                    <p className="text-[#7A7A7A] text-[13px] md:text-sm mt-1 font-light leading-relaxed pr-2">{item.desc}</p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="font-outfit text-base md:text-lg font-medium text-[#1A1A1A]">{item.price}</span>
                  {item.isVeg && (
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#E8F3EA] text-[#4CAF50] flex items-center justify-center" title="Vegetarian">
                      <Leaf size={10} className="md:w-[12px] md:h-[12px]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    );
  };

  const AboutPage = () => (
    <section className="py-6 md:py-12 max-w-4xl mx-auto">
      <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-2 md:mb-4 text-center">{t.aboutFull.eyebrow}</p>
      <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] mb-6 md:mb-8 text-[#111111] text-center">{t.aboutFull.title}</h1>
      
      <div className="w-full aspect-[16/9] rounded-2xl md:rounded-[2rem] overflow-hidden mb-8 md:mb-10 shadow-sm border border-[#F0F0F0]">
        <img src="1000178837.jpg" alt="Restaurant Team" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-sm md:prose-lg text-[#5A5A5A] font-light leading-relaxed max-w-none space-y-8 md:space-y-10 px-2 md:px-0">
        
        {/* Section 1 */}
        <div>
          <h2 className="text-xl md:text-2xl text-[#1A1A1A] font-medium leading-snug mb-2 md:mb-3">
            {t.aboutFull.intro1}
          </h2>
          <p className="text-sm md:text-base">{t.aboutFull.intro2}</p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl md:text-2xl text-[#1A1A1A] font-medium leading-snug mb-2 md:mb-3">
            {t.aboutFull.section2Title}
          </h2>
          <p className="text-sm md:text-base mb-2 md:mb-3">{t.aboutFull.section2p1}</p>
          <p className="text-sm md:text-base">{t.aboutFull.section2p2}</p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl md:text-2xl text-[#1A1A1A] font-medium leading-snug mb-2 md:mb-3">
            {t.aboutFull.section3Title}
          </h2>
          <p className="text-sm md:text-base mb-2 md:mb-3">{t.aboutFull.section3p1}</p>
          <p className="text-sm md:text-base mb-2 md:mb-3">{t.aboutFull.section3p2}</p>
          <p className="text-sm md:text-base mb-2 md:mb-3">{t.aboutFull.section3p3}</p>
          <p className="text-sm md:text-base">{t.aboutFull.section3p4}</p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl md:text-2xl text-[#1A1A1A] font-medium leading-snug mb-4 md:mb-5">
            {t.aboutFull.howToGet}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            <div className="bg-white p-5 rounded-2xl md:rounded-[1.5rem] border border-[#E8E7E2] text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F9F8F6] text-[#B26941] rounded-full flex items-center justify-center mx-auto mb-3"><Utensils size={18} /></div>
              <h3 className="font-outfit text-base md:text-lg font-medium text-[#1A1A1A] mb-1.5">{t.orderOptions.dineInTitle}</h3>
              <p className="text-xs md:text-sm text-[#5A5A5A]">{t.aboutFull.dineInDesc}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl md:rounded-[1.5rem] border border-[#E8E7E2] text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F9F8F6] text-[#B26941] rounded-full flex items-center justify-center mx-auto mb-3"><ShoppingBag size={18} /></div>
              <h3 className="font-outfit text-base md:text-lg font-medium text-[#1A1A1A] mb-1.5">{t.orderOptions.takeawayTitle}</h3>
              <p className="text-xs md:text-sm text-[#5A5A5A]">{t.aboutFull.takeawayDesc}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl md:rounded-[1.5rem] border border-[#E8E7E2] text-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F9F8F6] text-[#B26941] rounded-full flex items-center justify-center mx-auto mb-3"><Truck size={18} /></div>
              <h3 className="font-outfit text-base md:text-lg font-medium text-[#1A1A1A] mb-1.5">{t.orderOptions.deliveryTitle}</h3>
              <p className="text-xs md:text-sm text-[#5A5A5A]">{t.aboutFull.deliveryDesc}</p>
            </div>
          </div>
        </div>

        {/* Hours & Contact Block (Pre-Map) */}
        <div className="bg-[#F2F1EC] p-6 md:p-8 rounded-3xl md:rounded-[2rem] mt-6 md:mt-10 text-center border border-[#E8E7E2]">
          <h2 className="font-outfit text-lg md:text-2xl text-[#1A1A1A] font-medium mb-4 md:mb-5">{t.aboutFull.hoursLocationTitle}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6 md:mb-6 text-[#5A5A5A] text-sm md:text-base">
            <div>
              <p className="font-medium text-[#1A1A1A] mb-1">{t.aboutFull.hoursLabel}</p>
              <p>Mo–Sa: 10:30 – 21:30</p>
              <p>So: 11:00 – 21:00</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#E5E5E5]"></div>
            <div>
              <p className="font-medium text-[#1A1A1A] mb-1">{t.aboutFull.locationLabel}</p>
              <p>Brunnenstraße 1, 73235 Weilheim an der Teck</p>
              <a href="tel:+4970239424183" className="hover:text-[#B26941] transition-colors">+49 7023 9424183</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-sm mx-auto">
            <button onClick={() => navigateTo('menu')} className="bg-white border border-[#E8E7E2] hover:border-[#B26941] text-[#B26941] px-5 py-3 rounded-full font-medium text-sm transition-all active:scale-95 w-full">
              {t.hero.btnSecondary}
            </button>
            <a href="https://www.lieferando.de" target="_blank" rel="noreferrer" className="bg-[#FFCBA4] hover:bg-[#ffbd8f] text-[#1A1A1A] px-5 py-3 rounded-full font-medium text-sm transition-all active:scale-95 shadow-sm w-full">
              {t.hero.btnPrimary}
            </a>
          </div>
        </div>

      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="py-6 md:py-12 max-w-6xl mx-auto">
      <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-2 md:mb-4 text-center">{t.contact.eyebrow}</p>
      <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] mb-6 md:mb-10 text-[#111111] text-center">{t.contact.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start px-2 md:px-0">
        
        {/* Contact Details & FAQ snippet */}
        <div className="space-y-5 md:space-y-8">
          <div className="bg-white p-5 md:p-8 rounded-3xl md:rounded-[2rem] shadow-sm border border-[#E8E7E2] space-y-4 md:space-y-6">
            <div className="flex items-start gap-3 md:gap-4">
              <MapPin className="text-[#B26941] shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
              <div>
                <h3 className="font-outfit font-medium text-base md:text-lg text-[#1A1A1A] mb-0.5">{t.contact.location}</h3>
                <p className="text-[#5A5A5A] text-sm md:text-base font-light">Brunnenstraße 1<br/>73235 Weilheim an der Teck<br/>Germany</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <Phone className="text-[#B26941] shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
              <div>
                <h3 className="font-outfit font-medium text-base md:text-lg text-[#1A1A1A] mb-0.5">{t.contact.phone}</h3>
                <a href="tel:+4970239424183" className="text-[#5A5A5A] text-sm md:text-base font-light hover:text-[#B26941] transition-colors">+49 7023 9424183</a>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <Clock className="text-[#B26941] shrink-0 mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6" />
              <div>
                <h3 className="font-outfit font-medium text-base md:text-lg text-[#1A1A1A] mb-0.5">{t.contact.hours}</h3>
                <p className="text-[#5A5A5A] text-sm md:text-base font-light whitespace-pre-line">{t.contact.hoursText}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F1EC] p-5 md:p-8 rounded-3xl md:rounded-[2rem] border border-[#E8E7E2]">
            <h3 className="font-outfit font-medium text-lg md:text-xl text-[#1A1A1A] mb-3 md:mb-4">{t.contact.faqTitle}</h3>
            <div className="space-y-3 md:space-y-4">
              {faqs.slice(0,2).map((faq, i) => (
                <div key={i}>
                  <h4 className="font-medium text-[#1A1A1A] text-sm md:text-base mb-1">{faq.question}</h4>
                  <p className="text-[#5A5A5A] font-light text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-5 md:p-8 rounded-3xl md:rounded-[2rem] shadow-sm border border-[#E8E7E2]">
          <h2 className="font-outfit text-xl md:text-2xl font-medium mb-4 md:mb-5 text-[#1A1A1A]">{t.contact.formTitle}</h2>
          <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.contact.lblName}</label>
              {/* text-base to prevent iOS Safari auto-zoom on input focus */}
              <input type="text" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors" placeholder={t.contact.plName} />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.contact.lblEmail}</label>
              <input type="email" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors" placeholder={t.contact.plEmail} />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.contact.lblMessage}</label>
              <textarea rows="4" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-2xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors resize-none" placeholder={t.contact.plMessage}></textarea>
            </div>
            <button className="w-full bg-[#FFCBA4] hover:bg-[#ffbd8f] text-[#1A1A1A] px-4 py-3 md:py-3.5 rounded-full font-medium text-sm md:text-base transition-all active:scale-95 mt-1">
              {t.contact.btnSubmit}
            </button>
          </form>
        </div>

      </div>
    </section>
  );

  const ReservationPage = () => (
    <section className="py-6 md:py-12 max-w-3xl mx-auto">
      <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#B26941] mb-2 md:mb-4 text-center">{t.reservation.eyebrow}</p>
      <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] mb-3 md:mb-4 text-[#111111] text-center">{t.reservation.title}</h1>
      <p className="text-[#5A5A5A] text-sm md:text-base mb-5 md:mb-8 font-light text-center max-w-lg mx-auto px-4">
        {t.reservation.subtitle}
      </p>

      <div className="bg-white p-5 md:p-8 rounded-3xl md:rounded-[2rem] shadow-sm border border-[#E8E7E2] mx-2 md:mx-0">
        <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblDate}</label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A0A0A0]" size={16} />
                <input type="date" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl pl-10 pr-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors text-[#1A1A1A]" />
              </div>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblTime}</label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A0A0A0]" size={16} />
                <input type="time" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl pl-10 pr-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors text-[#1A1A1A]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblGuests}</label>
              <div className="relative">
                <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A0A0A0]" size={16} />
                <select className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl pl-10 pr-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors text-[#1A1A1A] appearance-none">
                  {[1,2,3,4,5,6,7,8,"8+"].map(n => <option key={n} value={n}>{n} {n === 1 ? t.reservation.optPerson : t.reservation.optPeople}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblName}</label>
              <input type="text" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors text-[#1A1A1A]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblPhone}</label>
              <input type="tel" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors text-[#1A1A1A]" placeholder="+49 " />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblEmail}</label>
              <input type="email" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors text-[#1A1A1A]" placeholder="" />
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-[#7A7A7A] mb-1 px-1.5">{t.reservation.lblRequests}</label>
            <textarea rows="3" className="w-full bg-[#F9F8F6] border border-[#E8E7E2] rounded-2xl px-4 py-3 text-base outline-none focus:border-[#B26941] focus:bg-white transition-colors resize-none text-[#1A1A1A]" placeholder={t.reservation.plRequests}></textarea>
          </div>

          <button className="w-full bg-[#1A1A1A] hover:bg-black text-white px-5 md:px-8 py-3.5 rounded-full font-medium text-sm md:text-base transition-all active:scale-95 mt-1 shadow-md">
            {t.reservation.btnSubmit}
          </button>
          <p className="text-center text-[10px] md:text-xs text-[#7A7A7A] mt-2">{t.reservation.note}</p>
        </form>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#FFCBA4] selection:text-[#1A1A1A] overflow-x-hidden flex flex-col relative">
      
      {/* INJECTING PREMIUM FONT & STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}} />

      {/* --- SCROLL PROGRESS BAR (TOP LINE) --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-black/5">
        <div 
          className="h-full bg-[#B26941] origin-left transition-transform duration-100 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* --- MINIMAL LANGUAGE TOGGLE (FLOATING BOTTOM RIGHT) --- */}
      <div className="fixed bottom-4 md:bottom-5 right-4 md:right-5 z-50 bg-white/90 backdrop-blur-md p-1 md:p-1.5 rounded-full shadow-lg border border-[#E5E5E5] flex items-center gap-1">
        <button 
          onClick={() => setLang('de')}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-colors ${lang === 'de' ? 'bg-[#1A1A1A] text-white' : 'text-[#7A7A7A] hover:text-[#1A1A1A]'}`}
        >
          DE
        </button>
        <button 
          onClick={() => setLang('en')}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold transition-colors ${lang === 'en' ? 'bg-[#1A1A1A] text-white' : 'text-[#7A7A7A] hover:text-[#1A1A1A]'}`}
        >
          EN
        </button>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-3 md:py-5 max-w-7xl mx-auto w-full relative z-40 mt-1">
        <button onClick={() => navigateTo('home')} className="flex-shrink-0 transition-transform active:scale-95">
          <img 
            src="final logo.png" 
            alt="Star Kebap Logo" 
            className="h-8 md:h-12 w-auto object-contain rounded-xl"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/120x40/000000/FFFFFF?text=STAR+KEBAP";
            }}
          />
        </button>
        <div className="hidden md:flex gap-6 lg:gap-8 items-center font-medium text-[#5A5A5A] text-sm lg:text-base">
            <button onClick={() => navigateTo('menu')} className={`hover:text-[#1A1A1A] transition-colors ${currentPage === 'menu' && 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'}`}>{t.nav.menu}</button>
            <button onClick={() => navigateTo('about')} className={`hover:text-[#1A1A1A] transition-colors ${currentPage === 'about' && 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'}`}>{t.nav.about}</button>
            <button onClick={() => navigateTo('contact')} className={`hover:text-[#1A1A1A] transition-colors ${currentPage === 'contact' && 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'}`}>{t.nav.contact}</button>
            <button onClick={() => navigateTo('reservation')} className="bg-[#1A1A1A] text-white px-4 lg:px-5 py-2 rounded-full hover:bg-black transition-colors">{t.nav.reservations}</button>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-black/5 rounded-full transition-all active:scale-90 md:hidden"
        >
          <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
            {isMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Plus size={26} strokeWidth={1.5} />}
          </div>
        </button>
      </nav>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#F9F8F6] z-50 flex flex-col items-center justify-center text-2xl font-outfit font-medium tracking-tight md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-100'
        }`}
      >
        <div className={`flex flex-col items-center space-y-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'translate-y-0 scale-100 opacity-100 delay-100' : 'translate-y-12 scale-95 opacity-0'
        }`}>
          <button onClick={() => { setIsMenuOpen(false); navigateTo('home'); }} className="hover:text-[#A9623F] transition-colors active:scale-95">{t.nav.home}</button>
          <button onClick={() => { setIsMenuOpen(false); navigateTo('menu'); }} className="hover:text-[#A9623F] transition-colors active:scale-95">{t.nav.menu}</button>
          <button onClick={() => { setIsMenuOpen(false); navigateTo('reservation'); }} className="hover:text-[#A9623F] transition-colors active:scale-95">{t.nav.reservations}</button>
          <button onClick={() => { setIsMenuOpen(false); navigateTo('about'); }} className="hover:text-[#A9623F] transition-colors active:scale-95">{t.nav.about}</button>
          <button onClick={() => { setIsMenuOpen(false); navigateTo('contact'); }} className="hover:text-[#A9623F] transition-colors active:scale-95">{t.nav.contact}</button>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA (ROUTING) --- */}
      <main className="w-full flex-grow px-4 md:px-8 max-w-7xl mx-auto">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'menu' && <MenuPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'reservation' && <ReservationPage />}

        {/* --- GLOBAL LIVE LOCATION SECTION (Rendered on Home, About, Contact) --- */}
        {/* SECTION 7 - MAP INTEGRATION */}
        {['home', 'about', 'contact'].includes(currentPage) && (
          <section className="py-8 md:py-12 text-center w-full">
            <div className="relative w-full h-[350px] md:h-[550px] rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#e5e3df] shadow-sm border border-[#F0F0F0]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.483168864947!2d9.535899912061405!3d48.61462007119044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47999553b3b4f9db%3A0xc3fec3f0f7cf14e7!2sBrunnenstra%C3%9Fe%201%2C%2073235%20Weilheim%20an%20der%20Teck%2C%20Germany!5e0!3m2!1sen!2sus!4v1714480000000!5m2!1sen!2sus" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full object-cover grayscale-[20%] opacity-90"
              ></iframe>
              
              <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-white/95 backdrop-blur-md rounded-2xl md:rounded-[2rem] p-4 md:px-10 md:py-6 text-center shadow-xl border border-white/50">
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-[#5A5A5A] mb-1">{t.footer.locatedAt}</p>
                <p className="font-outfit text-base md:text-xl font-medium mb-3 text-[#111111]">Brunnenstraße 1, Weilheim</p>
                <a href="https://maps.google.com/?q=Brunnenstraße+1,+73235+Weilheim+an+der+Teck" target="_blank" rel="noreferrer" className="inline-block border border-[#E5E5E5] hover:border-[#B26941] text-[#B26941] px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors active:scale-95">
                  {t.footer.openInMaps}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* --- HOMEPAGE FAQ SECTION (Rendered only on Home, under the map) --- */}
        {currentPage === 'home' && <HomeFAQSection />}
      </main>

      {/* --- ELEGANT DARK FOOTER --- */}
      {/* SECTION 8 - FOOTER */}
      <footer className="mt-auto bg-[#141414] text-[#F9F8F6] pt-10 md:pt-16 pb-6 md:pb-8 px-4 md:px-8 rounded-t-3xl md:rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 px-2 md:px-0">
          
          <div className="md:col-span-6 flex flex-col items-start">
             <img 
               src="final logo.png" 
               alt="Star Kebap Logo" 
               className="h-10 md:h-14 w-auto object-contain mb-5 md:mb-6 rounded-2xl"
               onError={(e) => {
                 e.target.onerror = null; 
                 e.target.src = "https://placehold.co/200x60/141414/FFFFFF?text=STAR+KEBAP";
               }}
             />
            <div className="text-sm md:text-lg font-light space-y-3 md:space-y-4 text-[#A0A0A0]">
              <p className="hover:text-white transition-colors cursor-default">Brunnenstraße 1, 73235 Weilheim an der Teck</p>
              <div>
                <p>Mo–Sa: 10:30–21:30</p>
                <p className="text-[#FFCBA4]">So: 11:00–21:00</p>
              </div>
              <a href="tel:+4970239424183" className="block font-medium text-white hover:text-[#FFCBA4] transition-colors">
                +49 7023 9424183
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-[#6A6A6A] mb-3 md:mb-5">{t.footer.social}</p>
            <ul className="space-y-2 text-sm md:text-base font-light text-[#A0A0A0]">
              <li><a href="https://www.facebook.com/p/Star-Kebap-und-Pizzahaus-100064926242909/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/starkebappizzahaus/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-[#6A6A6A] mb-3 md:mb-5">{t.footer.navigation}</p>
            <ul className="space-y-2 text-sm md:text-base font-light text-[#A0A0A0]">
              <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => navigateTo('menu')} className="hover:text-white transition-colors">{t.nav.menu}</button></li>
              <li><button onClick={() => navigateTo('reservation')} className="hover:text-white transition-colors">{t.nav.reservations}</button></li>
              <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">{t.nav.about}</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">{t.nav.contact}</button></li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-8 md:mt-12 pt-4 md:pt-5 border-t border-white/10 text-center text-[#6A6A6A] text-[10px] md:text-xs">
          <p>© {new Date().getFullYear()} Star Kebap & Pizza Haus. Inhaber: Mehmet Korkmaz. {t.footer.rights}</p>
        </div>
      </footer>

    </div>
  );
};

export default App;