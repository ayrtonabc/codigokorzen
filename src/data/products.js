export const products = [
  // Kitchen Wood - Cutting Boards
  {
    id: 'kb-001',
    name: 'Deska Szefa Kuchni "Dąb Królewski"',
    category: 'kitchen-wood',
    subcategory: 'cutting-boards',
    price: 180,
    tags: ['bestseller', 'handmade', 'limited', 'gift-for-him', 'wedding', 'gift-for-dad', 'autumn'],
    image: '/img/tabla cocina.jpg',
    gallery: [
      '/img/tabla cocina.jpg', 
      '/img/tablas cocina.jpg', 
      '/img/decoracion.jpg',
      '/img/bandejadecorativa.jpg', // Placeholder for "in use"
      '/img/bandejadecoracion.jpg'  // Placeholder for "detail"
    ],
    description: 'Solidna, ręcznie wykonana deska dębowa idealna do krojenia mięs i warzyw. Impregnowana naturalnym olejem. Każda sztuka ma unikalne usłojenie.',
    longDescription: `
      <p class="mb-4"><strong>Serce Twojej Kuchni</strong></p>
      <p class="mb-4">Deska "Dąb Królewski" to nie tylko narzędzie, to inwestycja w jakość Twojego gotowania. Stworzona z myślą o pasjonatach, którzy nie uznają kompromisów. Wykonana z jednego kawałka litego dębu, sezonowanego przez minimum 5 lat, co gwarantuje jej stabilność i odporność na pękanie.</p>
      
      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Dlaczego warto wybrać dąb?</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Naturalna antybakteryjność:</strong> Dąb zawiera garbniki, które naturalnie zwalczają bakterie, czyniąc tę deskę bezpieczniejszą niż plastikowe odpowiedniki.</li>
        <li><strong>Ochrona Twoich noży:</strong> Twardość dębu jest idealnie zbalansowana – wystarczająco twarda, by nie powstawały głębokie nacięcia, ale na tyle elastyczna, by nie tępić drogich noży kuchennych.</li>
        <li><strong>Samo-regeneracja:</strong> Drobne nacięcia na powierzchni drewna "zamykają się" pod wpływem wilgoci i regularnego olejowania.</li>
      </ul>

      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Idealna do serwowania</h3>
      <p class="mb-4">Dzięki swojej imponującej grubości (4 cm) i pięknej barwie, deska świetnie sprawdza się również na stole. Zaserwujesz na niej deskę serów, wędlin czy pieczone mięsa prosto z piekarnika. Jej ciężar (ok. 3kg) sprawia, że nie przesuwa się po blacie podczas intensywnego siekania.</p>

      <p class="text-sm italic text-gray-500 mt-8">Każdy egzemplarz jest unikatowy. Układ słojów i odcień drewna mogą się nieznacznie różnić od prezentowanego na zdjęciu, co jest gwarancją naturalnego pochodzenia materiału.</p>
    `,
    salesStats: {
      count: 14,
      period: 'w tym tygodniu'
    },
    features: [
      { title: 'Dąb Sezonowany', desc: 'Twarde drewno odporne na zużycie i wilgoć.' },
      { title: 'Antybakteryjna', desc: 'Naturalne garbniki w dębie zwalczają bakterie.' },
      { title: '100% Eco', desc: 'Impregnowana wyłącznie naturalnymi olejami roślinnymi.' }
    ],
    reviews: [
      { user: 'Marek K.', rating: 5, text: 'Najlepsza deska jaką miałem. Ciężka, solidna, po miesiącu wygląda jak nowa. Warta każdej złotówki.', date: '2 tyg. temu' },
      { user: 'Anna W.', rating: 5, text: 'Kupiłam na prezent dla męża kucharza. Jest zachwycony jakością wykonania i grawerem. Polecam!', date: '1 mies. temu' },
      { user: 'Piotr', rating: 4, text: 'Świetna jakość, choć trzeba pamiętać o regularnym olejowaniu, żeby nie szarzała.', date: '2 mies. temu' },
      { user: 'Kasia L.', rating: 5, text: 'Piękna ozdoba kuchni. Używam jej codziennie i wciąż pachnie drewnem.', date: '3 mies. temu' },
      { user: 'Tomasz', rating: 5, text: 'Solidny kawał drewna. Nie ślizga się po blacie, co jest dla mnie najważniejsze.', date: '3 mies. temu' }
    ],
    details: {
      material: 'Lite drewno dębowe, sezonowane, klasa A',
      dimensions: 'Dostępne różne rozmiary (grubość ok. 4cm)',
      care: 'Myć ręcznie, nie moczyć długo w wodzie. Raz na miesiąc olejować olejem jadalnym (np. lnianym).',
      shipping: 'Wysyłka w 24h. Bezpieczne opakowanie eco-friendly bez plastiku.',
      origin: 'Wyprodukowano w Polsce (Małopolska)'
    },
    customizable: true,
    options: {
      sizes: [
        { label: 'Standard (30x40cm)', priceMod: 0 },
        { label: 'Duża (40x50cm)', priceMod: 60 },
        { label: 'XXL (50x60cm)', priceMod: 120 }
      ]
    }
  },
  {
    id: 'kb-002',
    name: 'Zestaw Desek "Rustykalna Uczta"',
    category: 'kitchen-wood',
    subcategory: 'serving',
    price: 220,
    tags: ['set', 'gift-idea', 'live-edge', 'wedding', 'new-home', 'gift-for-couple'],
    image: '/img/tablas cocina.jpg',
    gallery: [
        '/img/tablas cocina.jpg', 
        '/img/tabla cocina.jpg', 
        '/img/decoracion.jpg', 
        '/img/bandejadecorativa.jpg',
        '/img/bandejadecoracion.jpg'
    ],
    description: 'Komplet desek o nieregularnym kształcie zachowujący naturalną krawędź drewna. Idealne do serwowania serów i wędlin.',
    longDescription: `
      <p class="mb-4"><strong>Sztuka Natury na Twoim Stole</strong></p>
      <p class="mb-4">Zestaw "Rustykalna Uczta" to prawdziwy hołd dla surowego piękna przyrody. Każda deska w tym komplecie jest unikalna – zachowaliśmy naturalną krawędź drewna (tzw. live edge), usuwając jedynie korę i dokładnie szlifując powierzchnię. To sprawia, że nikt na świecie nie będzie miał identycznego zestawu jak Ty.</p>
      
      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Dlaczego "Live Edge"?</h3>
      <p class="mb-4">Styl Live Edge to esencja nowoczesnego designu rustykalnego. Nieregularne kształty wprowadzają do wnętrza organiczną energię i łamią surowość nowoczesnych kuchni. To deski, które opowiadają historię drzewa, z którego powstały.</p>

      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Idealne do serwowania (Tapas, Sery, Wędliny)</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Efekt WOW:</strong> Zaskocz gości podając przystawki w sposób, jakiego nie powstydziłaby się najlepsza restauracja. Ciemne drewno dębu stanowi idealny kontrast dla jasnych serów, czerwonych wędlin i zielonych winogron.</li>
        <li><strong>Ergonomia:</strong> Różne rozmiary w zestawie pozwalają na elastyczne aranżowanie stołu. Mała deska na cytryny, średnia na sery, duża na główne danie.</li>
        <li><strong>Trwałość:</strong> Mimo dekoracyjnego charakteru, są to w pełni funkcjonalne deski do krojenia, zaimpregnowane bezpiecznym dla żywności olejem.</li>
      </ul>

      <p class="text-sm italic text-gray-500 mt-8">Zestaw pakowany jest w estetyczne pudełko z wypełnieniem z wełny drzewnej – gotowy prezent na parapetówkę czy ślub.</p>
    `,
    salesStats: {
        count: 8,
        period: 'w tym miesiącu'
    },
    features: [
        { title: 'Live Edge', desc: 'Naturalna, zachowana krawędź boczna drewna.' },
        { title: 'Unikalny Kształt', desc: 'Każda deska ma niepowtarzalną formę.' },
        { title: 'Gotowe na Prezent', desc: 'Estetyczne opakowanie w cenie.' }
    ],
    details: {
        material: 'Dąb dziki, olejowany, krawędź naturalna',
        dimensions: 'Zestaw zawiera różne formaty (dł. 25-45cm)',
        care: 'Przecierać wilgotną szmatką. Nie myć w zmywarce.',
        shipping: 'Wysyłka w 48h (wymaga starannego pakowania).',
        origin: 'Polska manufaktura'
    },
    customizable: true,
    options: {
      sizes: [
        { label: 'Zestaw 2 szt. (S+M)', priceMod: 0 },
        { label: 'Zestaw 3 szt. (S+M+L)', priceMod: 80 }
      ]
    },
    reviews: [
      { user: 'Magda', rating: 5, text: 'Wyglądają obłędnie! Każda impreza zaczyna się od pytań o te deski. Są po prostu piękne.', date: '1 tydz. temu' },
      { user: 'Robert', rating: 5, text: 'Solidne i piękne. Naturalna krawędź robi robotę. Kupiłem żonie, jest zachwycona.', date: '1 mies. temu' },
      { user: 'Karolina D.', rating: 4, text: 'Bardzo ładne, choć trzeba uważać na krawędzie przy myciu.', date: '2 mies. temu' },
      { user: 'Piotr', rating: 5, text: 'Idealne na prezent ślubny. Wyglądają na dużo droższe niż są.', date: '3 mies. temu' }
    ]
  },
  {
    id: 'kb-003',
    name: 'Deska Grill Master z Rowkiem',
    category: 'kitchen-wood',
    subcategory: 'grill',
    price: 150,
    tags: ['summer-essential', 'for-him', 'durable', 'gift-for-dad', 'gift-for-him'],
    image: '/img/tabla cocina.jpg',
    gallery: [
        '/img/tabla cocina.jpg', 
        '/img/decoracion.jpg', 
        '/img/tablas cocina.jpg',
        '/img/bandejadecorativa.jpg',
        '/img/bandejadecoracion.jpg'
    ],
    description: 'Specjalistyczna deska z głębokim rowkiem na soki. Niezbędna dla każdego miłośnika grillowania i soczystych pieczeni.',
    longDescription: `
      <p class="mb-4"><strong>Niezbędnik Prawdziwego Grill Mastera</strong></p>
      <p class="mb-4">Znasz ten ból, gdy kroisz idealnie wysmażony stek lub soczystą pieczeń, a soki zalewają cały stół i obrus? Deska "Grill Master" rozwiązuje ten problem raz na zawsze. To profesjonalne narzędzie zaprojektowane z myślą o komforcie i czystości pracy.</p>
      
      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Inżynieria w Drewnie</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Głęboki Rowek (Juice Groove):</strong> Precyzyjnie wyfrezowany kanał dookoła deski zbiera nadmiar płynów (nawet do 150ml!), chroniąc Twój blat przed zabrudzeniem.</li>
        <li><strong>Stabilność XXL:</strong> Dzięki dużej wadze i opcjonalnym nóżkom antypoślizgowym, deska leży jak przyklejona, nawet gdy kroisz twarde mięso.</li>
        <li><strong>Nie tępi noży:</strong> Używamy dębu o optymalnej gęstości, który jest łaskawy dla ostrzy Twoich drogich noży do steków.</li>
      </ul>

      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Od Kuchni do Ogrodu</h3>
      <p class="mb-4">Ta deska to król letnich przyjęć w ogrodzie. Wygląda tak dobrze, że możesz serwować na niej burgery i steki prosto z rusztu. Dąb świetnie trzyma ciepło, dzięki czemu mięso dłużej pozostaje gorące.</p>
    `,
    salesStats: {
        count: 24,
        period: 'w sezonie letnim'
    },
    features: [
        { title: 'System Odpływu', desc: 'Głęboki rowek zatrzymujący soki z mięsa.' },
        { title: 'Duża Powierzchnia', desc: 'Mieści całego kurczaka lub dużą pieczeń.' },
        { title: 'Łatwe Czyszczenie', desc: 'Gładka powierzchnia, łatwa do przetarcia.' }
    ],
    details: {
        material: 'Dąb sezonowany, impregnowany głęboko',
        dimensions: '35x45cm lub 40x50cm',
        care: 'Myć pod bieżącą wodą, wycierać do sucha. Olejować co 3-4 użycia przy intensywnym grillowaniu.',
        shipping: 'Wysyłka 24h.',
        origin: 'Polska'
    },
    customizable: true,
    options: {
      sizes: [
        { label: 'Standard (35x45cm)', priceMod: 0 },
        { label: 'Duża (40x50cm)', priceMod: 50 }
      ]
    },
    reviews: [
      { user: 'Adam', rating: 5, text: 'W końcu czysty stół podczas krojenia karkówki. Rowek jest wystarczająco głęboki. Polecam każdemu fanowi BBQ.', date: '2 tyg. temu' },
      { user: 'Krzysztof', rating: 4, text: 'Bardzo dobra deska, choć dość ciężka, co w sumie jest zaletą przy krojeniu.', date: '3 mies. temu' },
      { user: 'Janusz', rating: 5, text: 'Dostałem na urodziny. Najlepszy prezent. Steki smakują lepiej ;)', date: '1 mies. temu' },
      { user: 'Ewa', rating: 5, text: 'Mąż zachwycony, ja też bo mniej sprzątania po obiedzie.', date: '2 tyg. temu' }
    ]
  },

  // Kitchen Wood - Trays & Decor
  {
    id: 'kt-001',
    name: 'Taca Dekoracyjna "Elegancja"',
    category: 'decor',
    subcategory: 'trays',
    price: 145,
    tags: ['interior-design', 'versatile', 'lightweight', 'gift-for-her', 'new-home', 'autumn', 'winter'],
    image: '/img/bandejadecorativa.jpg',
    gallery: [
        '/img/bandejadecorativa.jpg', 
        '/img/bandejadecoracion.jpg', 
        '/img/decoracion.jpg',
        '/img/tabla cocina.jpg',
        '/img/tablas cocina.jpg'
    ],
    description: 'Elegancka taca drewniana, idealna jako podstawa do dekoracji lub serwowania śniadań. Minimalistyczny design pasujący do każdego wnętrza.',
    longDescription: `
      <p class="mb-4"><strong>Codzienna Dawka Luksusu</strong></p>
      <p class="mb-4">Taca "Elegancja" to dowód na to, że przedmioty codziennego użytku mogą być dziełami sztuki. Zaprojektowana z myślą o wielofunkcyjności – rano posłuży do podania śniadania do łóżka, po południu stanie się elegancką podstawą pod świece, wazon z kwiatami czy ulubione czasopisma w salonie.</p>
      
      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Detale, które robią różnicę</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Podwyższone Ranty:</strong> Subtelnie wyprofilowane brzegi zapobiegają zsuwaniu się naczyń, dając Ci pewność podczas przenoszenia gorącej kawy.</li>
        <li><strong>Aksamitne Wykończenie:</strong> Drewno jest szlifowane wieloetapowo, aż do uzyskania idealnie gładkiej, przyjemnej w dotyku powierzchni.</li>
        <li><strong>Lekkość:</strong> Mimo solidnego wyglądu, taca jest zaskakująco lekka, co ułatwia jej codzienne użytkowanie.</li>
      </ul>

      <p class="mb-4">Dostępna w kilku odcieniach, aby idealnie dopasować się do kolorystyki Twojego wnętrza – od jasnego naturalnego dębu po głęboki orzech.</p>
    `,
    salesStats: {
        count: 12,
        period: 'w tym miesiącu'
    },
    features: [
        { title: 'Wielofunkcyjna', desc: 'Do serwowania i dekoracji.' },
        { title: 'Bezpieczne Ranty', desc: 'Chroni przed rozlaniem.' },
        { title: 'Lekka Konstrukcja', desc: 'Łatwa do przenoszenia.' }
    ],
    details: {
        material: 'Sklejka liściasta fornirowana dębem / lite drewno (brzegi)',
        dimensions: '30x40cm',
        care: 'Przecierać suchą lub lekko wilgotną szmatką. Unikać bezpośredniego kontaktu z wodą.',
        shipping: 'Wysyłka 24h.',
        origin: 'Polska'
    },
    customizable: true,
    options: {
        sizes: [
            { label: 'Naturalny Dąb', priceMod: 0 },
            { label: 'Ciemny Orzech', priceMod: 20 }
        ]
    },
    reviews: [
        { user: 'Patrycja', rating: 5, text: 'Piękna taca! Idealnie pasuje na mój stolik kawowy. Jakość wykonania 10/10.', date: '1 mies. temu' },
        { user: 'Monika', rating: 4, text: 'Bardzo ładna, choć myślałam że będzie nieco większa. Ale wykonanie super.', date: '2 mies. temu' },
        { user: 'Klaudia', rating: 5, text: 'Uwielbiam ją. Używam do zdjęć na Instagram i do serwowania herbaty.', date: '3 tyg. temu' }
    ]
  },
  {
    id: 'dc-003',
    name: 'Taca Ozdobna z Uchwytami',
    category: 'decor',
    subcategory: 'trays',
    price: 160,
    tags: ['rustic', 'sturdy', 'handles', 'gift-for-mom', 'gift-for-couple'],
    image: '/img/bandejadecoracion.jpg',
    gallery: [
        '/img/bandejadecoracion.jpg', 
        '/img/bandejadecorativa.jpg', 
        '/img/decoracion.jpg',
        '/img/tablas cocina.jpg',
        '/img/tabla cocina.jpg'
    ],
    description: 'Rustykalna taca z solidnymi, metalowymi uchwytami. Połączenie surowego drewna i industrialnych akcentów.',
    longDescription: `
      <p class="mb-4"><strong>Charakter i Funkcjonalność</strong></p>
      <p class="mb-4">Jeśli szukasz dodatku, który nada wnętrzu charakteru, ta taca jest dla Ciebie. Połączenie ciepłego, naturalnego drewna z surowymi, czarnymi metalowymi uchwytami tworzy idealną harmonię w stylu loftowym lub farmhouse.</p>
      
      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Stworzona do przenoszenia</h3>
      <p class="mb-4">To nie jest tylko ozdoba. Solidne, przykręcane uchwyty gwarantują pewny chwyt, nawet gdy taca jest pełna ciężkiej zastawy. Idealna na letnie przyjęcia w ogrodzie, gdzie musisz przenieść napoje i przekąski z kuchni na taras.</p>

      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Solidna Konstrukcja:</strong> Grube dno tacy nie ugina się pod ciężarem.</li>
        <li><strong>Design:</strong> Widoczne słoje i sęki są celowo eksponowane, aby podkreślić naturalne pochodzenie materiału.</li>
        <li><strong>Ochrona mebli:</strong> Od spodu podklejona filcem, aby nie rysować Twojego stołu.</li>
      </ul>
    `,
    salesStats: {
        count: 5,
        period: 'w tym tygodniu'
    },
    features: [
        { title: 'Mocne Uchwyty', desc: 'Metalowe, malowane proszkowo.' },
        { title: 'Styl Loft', desc: 'Idealna do nowoczesnych wnętrz.' },
        { title: 'Ochrona Blatu', desc: 'Filcowe podkładki od spodu.' }
    ],
    details: {
        material: 'Drewno sosnowe szczotkowane, metal',
        dimensions: '35x50cm',
        care: 'Czyścić wilgotną szmatką. Uchwyty można przecierać na mokro.',
        shipping: 'Wysyłka 48h.',
        origin: 'Polska'
    },
    customizable: false,
    options: null,
    reviews: [
        { user: 'Tomek', rating: 5, text: 'Solidna robota. Uchwyty bardzo wygodne. Super wygląda w salonie.', date: '2 tyg. temu' },
        { user: 'Alicja', rating: 5, text: 'Idealna na prezent. Kupiłam mamie i jest zachwycona.', date: '1 mies. temu' },
        { user: 'Marta', rating: 4, text: 'Trochę ciężka, ale przez to stabilna. Bardzo ładny kolor drewna.', date: '3 mies. temu' }
    ]
  },

  // Kids Category
  {
    id: 'kd-001',
    name: 'Skarbonka Dinozaur',
    category: 'kids',
    subcategory: 'money-banks',
    price: 95,
    tags: ['gift-for-kids', 'handmade', 'educational', 'bestseller'],
    image: '/img/alcancianiños.jpg',
    gallery: [
      '/img/alcancianiños.jpg',
      '/img/repisaniños.jpg',
      '/img/cartelito.jpg'
    ],
    description: 'Urocza skarbonka w kształcie dinozaura z przezroczystym brzuchem. Motywuje dzieci do oszczędzania i stanowi piękną dekorację pokoju.',
    longDescription: `
      <p class="mb-4"><strong>Nauka Oszczędzania przez Zabawę</strong></p>
      <p class="mb-4">Skarbonka Dinozaur to nie tylko pojemnik na monety, to pierwszy krok Twojego dziecka w świat finansów. Dzięki przezroczystej szybce z pleksi, maluch widzi, jak rośnie jego "fortuna", co jest ogromną motywacją do wrzucania kolejnych monet.</p>
      
      <h3 class="text-xl font-serif font-bold mt-6 mb-3">Bezpieczna i Trwała</h3>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><strong>Eko Materiały:</strong> Wykonana z naturalnej sklejki brzozowej, malowana bezpiecznymi farbami z atestem dla zabawek.</li>
        <li><strong>Nietłukąca szybka:</strong> Zamiast szkła użyliśmy bezpiecznej pleksi, więc nie musisz się martwić, że się stłucze przy upadku.</li>
        <li><strong>Łatwe otwieranie:</strong> Gdy cel zostanie osiągnięty, skarbonkę można łatwo otworzyć odkręcając kilka śrubek – bez konieczności rozbijania!</li>
      </ul>
    `,
    salesStats: { count: 32, period: 'w tym miesiącu' },
    features: [
      { title: 'Widoczny Cel', desc: 'Przezroczysty front motywuje do zbierania.' },
      { title: 'Bezpieczna', desc: 'Zaokrąglone krawędzie i bezpieczne farby.' },
      { title: 'Wielorazowa', desc: 'Możliwość otwarcia i ponownego użycia.' }
    ],
    details: {
      material: 'Sklejka brzozowa, pleksi',
      dimensions: 'ok. 25x20cm',
      care: 'Przecierać suchą szmatką.',
      shipping: 'Wysyłka 24h.',
      origin: 'Polska'
    },
    customizable: true,
    options: {
      sizes: [
        { label: 'Standard', priceMod: 0 },
        { label: 'Z Grawerem Imienia', priceMod: 20 }
      ]
    },
    reviews: [
      { user: 'Anna', rating: 5, text: 'Synek zachwycony! Codziennie wrzuca pieniążki.', date: '1 tydz. temu' },
      { user: 'Kasia', rating: 5, text: 'Bardzo staranne wykonanie. Piękna ozdoba pokoju.', date: '3 tyg. temu' }
    ]
  },
  {
    id: 'kd-002',
    name: 'Półka Samolot',
    category: 'kids',
    subcategory: 'shelves',
    price: 120,
    tags: ['decor', 'kids-room', 'gift-for-kids'],
    image: '/img/repisaniños.jpg',
    gallery: ['/img/repisaniños.jpg', '/img/alcancianiños.jpg'],
    description: 'Drewniana półka w kształcie samolotu. Idealna na małe resoraki lub figurki. Marzenie każdego małego pilota.',
    longDescription: 'Półka Samolot to idealny sposób na wyeksponowanie kolekcji ulubionych figurek lub autek...',
    salesStats: { count: 10, period: 'w tym miesiącu' },
    features: [
      { title: 'Design', desc: 'Kształt dwupłatowca.' },
      { title: 'Pojemna', desc: 'Mieści ok. 10-15 resoraków.' },
      { title: 'Łatwy Montaż', desc: 'Gotowa do powieszenia.' }
    ],
    details: { material: 'Drewno sosnowe', dimensions: '40x20x15cm', care: 'Czyścić na sucho', shipping: '48h', origin: 'Polska' },
    customizable: false,
    options: null,
    reviews: []
  },

  // Candles & Glass
  {
    id: 'cw-001',
    name: 'Świeca Sojowa "Leśny Poranek"',
    category: 'candles',
    subcategory: 'scented',
    price: 45,
    tags: ['scented', 'gift-for-her', 'relaxation', 'vegan', 'autumn', 'winter', 'christmas'],
    image: '/img/velas.jpg',
    gallery: ['/img/velas.jpg', '/img/velas2.jpg'],
    description: 'Naturalna świeca sojowa o zapachu mchu, żywicy i porannej rosy. Czas palenia: 40h.',
    longDescription: 'Zanurz się w zapachu lasu o poranku...',
    salesStats: { count: 45, period: 'w tym miesiącu' },
    features: [
      { title: '100% Soja', desc: 'Wosk sojowy wolny od GMO.' },
      { title: 'Naturalne Olejki', desc: 'Tylko certyfikowane kompozycje.' },
      { title: 'Długie Palenie', desc: 'Do 40 godzin relaksu.' }
    ],
    details: { material: 'Wosk sojowy, szkło brązowe', dimensions: '180ml', care: 'Przycinaj knot do 5mm', shipping: '24h', origin: 'Polska' },
    customizable: false,
    options: null,
    reviews: [
      { user: 'Marta', rating: 5, text: 'Pachnie obłędnie! Jak prawdziwy las.', date: '2 dni temu' }
    ]
  },
  {
    id: 'cw-002',
    name: 'Świeca w Szkle z Recyklingu',
    category: 'candles',
    subcategory: 'upcycling',
    price: 55,
    tags: ['upcycling', 'eco-friendly', 'gift-idea', 'gift-for-her', 'christmas', 'winter'],
    image: '/img/velas2.jpg',
    gallery: ['/img/velas2.jpg', '/img/velas.jpg', '/img/upcycling.jpg'],
    description: 'Unikalna świeca zalana w ręcznie przyciętej butelce po winie. Zero waste w najpiękniejszym wydaniu.',
    longDescription: 'Każda świeca to uratowana butelka, która zyskała drugie życie...',
    salesStats: { count: 18, period: 'w tym miesiącu' },
    features: [
      { title: 'Upcycling', desc: 'Szkło z butelek po winie.' },
      { title: 'Handmade', desc: 'Ręcznie szlifowane krawędzie.' },
      { title: 'Eko Wosk', desc: 'Naturalny wosk sojowy.' }
    ],
    details: { material: 'Szkło upcycling, wosk sojowy', dimensions: '250ml', care: 'Palić min. 2h jednorazowo', shipping: '48h', origin: 'Polska' },
    customizable: false,
    options: null,
    reviews: []
  }
];