// src/lib/copy.js
// Celý textový obsah pristávacej stránky je tu. Komponenty ho iba čítajú.
// Jazyk: Slovenčina (sk-SK) - Transkreácia v štýle direct marketingu.

export const copy = {
  // Pridané texty zo zadania (reklamy a doplnkové ponuky/upselly)
  campaign: {
    adText: {
      headline: "Odhaľte tajomstvo 🔓",
      body: "💫 Domáci píling s profesionálnymi výsledkami!\nPoznáte ten lesk a zamatovo hebkú pleť, ktorá vyzerá ako po návšteve estetickej kliniky? 😍 Môžete to dosiahnuť aj vy doma a vyjde vás to len na pár centov!\nTento domáci píling:\n✨ Sťahuje póry\n✨ Kontroluje mastnotu\n✨ Zosvetľuje pigmentové škvrny\n✨ Stimuluje tvorbu kolagénu\n✨ Zanechá vašu pleť žiarivú, rozjasnenú a omladenú\n👉 Kliknite na „Zistiť viac“ nižšie a zistite, ako získať bezchybnú pleť bez toho, aby ste utratili majland."
    },
    upsells: [
      {
        title: "👁️ Zmizík na tmavé kruhy: Tajný trik na vačky a vrásky",
        description: "Výborná voľba! Píling na obnovu pleti už máte, ale... pokožka okolo očí je naň príliš tenká a citlivá. Dokonalá pleť vám nepomôže, ak vám tmavé kruhy pridávajú 10 rokov navyše. Pridajte si tohto tajného sprievodcu s 15 mikro-receptami s liftingovým efektom, ktoré redukujú vačky, zosvetľujú tmavé kruhy a vyhladzujú vrásky okolo očí len za 5 minút. Omlaďte svoj pohľad okamžite a bez akýchkoľvek injekcií!"
      },
      {
        title: "💆‍♀️ Efekt „Lifting“: 5-minútová spevňujúca samomasáž",
        description: "Vaša pleť získa ten neuveriteľný jas ako z kliniky, ale... píling zlepšuje iba textúru, nespevňuje uvoľnené svaly a neodstraňuje dvojitú bradu. Nedovoľte gravitácii zničiť váš vzhľad. Pridajte si tohto vizuálneho sprievodcu s tajnými ázijskými technikami lymfatickej drenáže a masáže tváre, ktoré spevňujú svalstvo a tvarujú kontúry sánky. Dosiahnite vizuálny efekt faceliftingu bez toho, aby ste niekedy vôbec vkročili na sálu!"
      },
      {
        title: "💧 Prírodný „Botox“: Sérum na vyplnenie hlbokých vrások",
        description: "Už máte recept na stiahnutie pórov a zosvetlenie povrchových škvŕn, ale... čo s tými hlbokými mimickými vráskami na čele a okolo úst? Píling pleť obnovuje, ale nevyplňuje. Pridajte si tento tajný recept na ultra-koncentrované domáce sérum, ktoré napodobňuje vypĺňajúci efekt kyseliny hyalurónovej. Vyplňte vrásky zvnútra von a uzamknite vlhkosť vo vašej novej pleti!"
      },
      {
        title: "✋ Stroj času: Tajný protokol na krk a ruky",
        description: "Píling zmení vašu tvár, ale... 95 % žien robí jednu fatálnu chybu: zabúdajú na krk a ruky – dve oblasti, ktoré okamžite prezradia váš skutočný vek. Nedovoľte, aby vaša tvár vyzerala na 30 a ruky na 50. Pridajte si túto špeciálne vyvinutú receptúru, ktorá zahusťuje, spevňuje a odstraňuje pigmentáciu z jemnej pokožky dekoltu a hornej časti rúk. Omlaďte svoj celkový vzhľad!"
      }
    ]
  },

  hero: {
    banner: "EXKLUZÍVNE PRE ŽENY, KTORÉ CHCÚ OBNOVIŤ KOLAGÉN VO SVOJEJ PLETI",
    timerLabels: { days: "Dni", hours: "Hodiny", minutes: "Minúty", seconds: "Sekundy" },
    timerNote: "Ponuka vyprší o",
    eyebrow: "DOMÁCI ANTI-AGE PÍLING",
    headline: {
      line1: "Domáci píling s",
      highlight: "profesionálnymi výsledkami",
      line2: "z pohodlia vášho domova.",
    },
    subheadline:
      "Ušetrite čas a peniaze vďaka overenému a úplne bezpečnému receptu. Obnovená, pevná a žiarivá pleť do 28 dní — už od prvého nanesenia.",
    bullets: [
      "Aplikuje sa ľahko za menej ako 20 minút",
      "Využíva dostupné a úplne bezpečné ingrediencie",
      "Zaručuje viditeľné výsledky už v prvom týždni",
    ],
    cta: "ÁNO, CHCEM OBNOVIŤ SVOJ KOLAGÉN",
    secondaryNote: "14-dňová bezpodmienečná záruka",
    imageAlt: "Mockup kurzu Domáci Anti-age Píling",
  },

  story: {
    eyebrow: "ČO PRED VAMI TAJA",
    headline: "Dermatológovia nechcú, aby ste poznali toto tajomstvo.",
    paragraphs: [
      "Účinná látka, za ktorú si estetické kliniky účtujú stovky eur, je tá istá, ktorú si môžete pripraviť doma za pár minút a bude vás stáť doslova len pár drobných.",
      "Patrí do rodiny kyseliny salicylovej — s dokázanou účinnosťou pri obnove buniek, stimulácii kolagénu a vyhladzovaní vrások, redukcii pigmentových škvŕn a spevnení ochabnutej pleti.",
      "Preto tento recept nekoluje na YouTube ani na sociálnych sieťach. Kozmetický priemysel chce, aby ste naďalej každý mesiac platili za predražené konzultácie."
    ],
    highlights: [
      { value: "Menej ako 1 €", label: "za domácu procedúru" },
      { value: "28 dní", label: "na úplnú transformáciu pleti" },
      { value: "1. sedenie", label: "aby ste pocítili, že je vaša pleť hladšia" },
    ],
    cta: "CHCEM SVOJ PÍLING EŠTE DNES",
    industryImageAlt: "Tajomstvo kozmetického priemyslu odhalené",
    scienceImageAlt: "Vedecky podložené účinky pílingu s kyselinou salicylovou",
  },

  benefits: {
    eyebrow: "ČO ZAŽIJE VAŠA PLEŤ",
    headline: "Výsledky, ktoré hneď uvidíte v zrkadle.",
    subheadline:
      "Jednoduchá rutina vytvorená pre ženy, ktoré chcú zdravý a krásny vzhľad bez závislosti na drahých procedúrach.",
    items: [
      {
        title: "Vyhladzuje jemné aj hlboké vrásky",
        desc: "Stimuluje prirodzenú tvorbu kolagénu pre vyplnenie nedokonalostí.",
      },
      {
        title: "Spevňuje pleť a vracia jej jas",
        desc: "Komplexne omladzuje vzhľad a zanecháva pleť zamatovo hebkú a žiarivú.",
      },
      {
        title: "Zosvetľuje pigmentové škvrny",
        desc: "Urýchľuje obnovu buniek a zjednocuje tón vašej pleti.",
      },
      {
        title: "Viditeľne sťahuje rozšírené póry",
        desc: "Zanecháva pleť dokonale hladkú na dotyk s jemnou a čistou textúrou.",
      },
    ],
  },

  features: {
    eyebrow: "ČO SA NAUČÍTE",
    headline: "6 modulov, ktoré premenia vašu pleť za 28 dní.",
    subheadline: "Konkrétne a praktické informácie bez zbytočných omáčok. Pozriete si, aplikujete a vidíte výsledok.",
    items: [
      {
        n: "01",
        title: "Tajomstvo žien, ktoré nestarnú",
        desc: "Nastavenie mysle, návyky a rutina žien, ktoré starnú s noblesou a gráciou.",
      },
      {
        n: "02",
        title: "Profesionálny píling za pár centov",
        desc: "Tajná receptúra z 3 dostupných ingrediencií: aspirín, ocot a prírodný olej.",
      },
      {
        n: "03",
        title: "Anti-age shot pre koňskú dávku kolagénu",
        desc: "Recept na detox, ktorý nakopne tvorbu kolagénu zvnútra von.",
      },
      {
        n: "04",
        title: "Protokol „Dračia krv“",
        desc: "Ako využiť túto silnú živicu na rýchlu regeneráciu pleti po pílingu.",
      },
      {
        n: "05",
        title: "Profesionálne techniky nanášania",
        desc: "Krok za krokom: ako pripraviť a aplikovať píling pomocou sterilnej gázy.",
      },
      {
        n: "06",
        title: "Viditeľné výsledky a bezpečnosť",
        desc: "Plán aplikácie: hladšia pleť za 7 dní, úplná transformácia za 28 dní.",
      },
    ],
  },

  targetAudience: {
    eyebrow: "TENTO KURZ JE PRE VÁS, AK...",
    headline: "Spoznávate sa v niektorej z týchto situácií?",
    items: [
      {
        title: "Vaša pleť je zvädnutá, drsná a bez života",
        desc: "Dokonca aj pri používaní drahých krémov vyzerá vaša tvár unavene a mdlo.",
        imageAlt: "Žena so zvädnutou a unavenou pleťou",
      },
      {
        title: "Vaše vrásky sú čoraz hlbšie",
        desc: "Mimické vrásky sa začínajú prehlbovať, čo vám uberá na sebavedomí.",
        imageAlt: "Pleť s hlbokými vráskami",
      },
      {
        title: "Po 35-ke ochabli kontúry vašej tváre",
        desc: "Pevnosť je preč a gravitácia si začala vyberať svoju daň.",
        imageAlt: "Ochabnutá pleť na tvári",
      },
      {
        title: "Drahá kozmetika jednoducho nefunguje",
        desc: "Už ste vyhodili stovky eur za produkty, ktoré sľubujú zázraky, no nerobia vôbec nič.",
        imageAlt: "Drahé, no neefektívne kozmetické produkty",
      },
    ],
  },

  howItWorks: {
    eyebrow: "KROK ZA KROKOM",
    headline: "Jednoduchá a bezpečná domáca aplikácia.",
    subheadline:
      "Potrebujete len 20 minút a tri prísady, ktoré už pravdepodobne máte vo svojej kuchynskej skrinke.",
    steps: [
      {
        n: "01",
        title: "Pripravte si receptúru",
        desc: "Zmiešajte ingrediencie v presných pomeroch uvedených vo videu. Všetko je domáce a dostupné.",
      },
      {
        n: "02",
        title: "Naneste pomocou sterilnej gázy",
        desc: "Krúživými a jemnými pohybmi prejdite po tvári podľa profesionálnej techniky. Bez bolesti a štípania.",
      },
      {
        n: "03",
        title: "Užite si výsledky",
        desc: "Hladšia pleť už za 7 dní. A po 28 dňoch – kompletná premena: sviežosť, pevnosť a žiarivosť.",
      },
    ],
    leftImageAlt: "Žena nanáša domáci píling s gázou",
    rightImageAlt: "Výsledok pred a po domácom pílingu",
  },

  carouselSection: {
    eyebrow: "SKUTOČNÉ VÝSLEDKY",
    headline: "Skutočné ženy. Skutočné premeny.",
    subheadline: "Pozrite si fotky „pred a po“ žien, ktoré aplikovali tento protokol doma.",
    cta: "CHCEM TIETO VÝSLEDKY",
  },

  bonuses: {
    badge: "VŠETKO ZAHRNUTÉ V CENE",
    headline: "Čo získate, ak si objednáte ešte dnes",
    subheadline: "Doživotný prístup k celému kurzu + exkluzívne bonusy.",
    items: [
      {
        title: "Prístup do platformy ES Video",
        desc: "Najväčšia platforma pre zdravie a estetiku – zahrnutá v cene.",
      },
      {
        title: "Video s tajným receptom na píling",
        desc: "Kompletný postup s presnými pomermi a praktickou ukážkou.",
      },
      {
        title: "Anti-age shot na doplnenie kolagénu",
        desc: "Recept na detoxikačný nápoj, ktorý umocňuje účinok zvnútra.",
      },
      {
        title: "Protokol „Dračia krv“",
        desc: "Video sprievodca krok za krokom na regeneráciu po pílingu s využitím silnej živice.",
      },
      {
        title: "Príručka krok za krokom (PDF)",
        desc: "Praktický PDF materiál na vytlačenie, aby ste každú aplikáciu zvládli úplne bezpečne.",
      },
    ],
  },

  testimonials: {
    eyebrow: "HODNOTENIA",
    headline: "Nemusíte veriť mne. Uverte týmto ženám.",
    items: [
      {
        name: "Mária",
        role: "Bratislava",
        quote:
          "Bála som sa ošetrovať si tvár sama doma. Ale postupovala som podľa krokov a rozdiel bol viditeľný už v prvom týždni. Dnes, keď sa pozriem do zrkadla, som ako úplne nový človek.",
      },
      {
        name: "Lenka",
        role: "Košice",
        quote:
          "Vyhadzovala som nekresťanské peniaze po klinikách a už som si to jednoducho nemohla dovoliť. Doma to robím v pokoji, bez bolesti a cena je v porovnaní s výsledkami priam smiešna.",
      },
      {
        name: "Silvia",
        role: "Žilina",
        quote:
          "Kamarátky sa ma pýtajú, čo som so sebou urobila. Fliačiky vybledli a moja pleť je hladká ako hodváb. Odporúčam všetkými desiatimi.",
      },
    ],
    socialBadge: "REÁLNE OHLASY ZO SIETÍ",
    socialHeadline: "Skutočné komentáre od našich študentiek",
    socialAlt: "Hodnotenia od študentiek na Instagrame",
  },

  finalCta: {
    badge: "ČASOVO OBMEDZENÁ PONUKA",
    headline: "Začnite už dnes. 14-dňová záruka.",
    guaranteeText:
      "Ak si do 14 dní výsledky nezamilujete, vrátime vám 100 % sumy späť. Bez zbytočných otázok, bez byrokracie. Celé riziko beriem na seba.",
    bundleHeadline: "Čo všetko získate, keď kliknete hneď teraz",
    bundleList: [
      "Kompletný kurz Domáci Anti-age Píling",
      "Anti-age shot pre koňskú dávku kolagénu",
      "Regeneračný protokol „Dračia krv“",
      "Príručka krok za krokom vo formáte PDF",
      "Doživotný prístup do platformy ES Video",
    ],
    regularPriceLabel: "Pôvodne",
    regularPrice: "19,90 €",
    offerLabel: "Len za",
    offerPrice: "8,90 €",
    installments: "Jednorazová platba",
    economy: "Ušetríte viac ako 50 %",
    urgencyText: "Táto ponuka platí len dnes",
    button: "CHCEM OBNOVIŤ SVOJ KOLAGÉN HNEĎ TERAZ",
    secureNote: "100% bezpečná platba · Spracováva OrioPay",
    imageAlt: "Mockup kurzu Domáci Anti-age Píling",
    guaranteeImageAlt: "Pečať 14-dňovej záruky",
  },

  about: {
    eyebrow: "KTO ZA TÝM STOJÍ",
    title: "Odborníčka na krásu celebrít",
    name: "Petra Kováčová",
    paragraphs: [
      "Petra Kováčová je národnou expertkou v oblasti tvárovej estetiky a starostlivosti o pleť. Vyvinula prírodné protokoly na odstránenie pigmentových škvŕn, melazmy, akné a vypadávania vlasov, ktoré už pomohli tisíckam žien získať späť stratené sebavedomie.",
      "Je zakladateľkou vlastnej kliniky a značky dermokozmetiky. Spravuje najväčší YouTube kanál o zdraví a kráse na Slovensku s miliónmi sledovateľov.",
      "Jej filozofia je jednoduchá: skutočné výsledky, s veľkou starostlivosťou a na základe vedy — bez toho, aby ste boli závislí na horibilne drahých procedúrach či dovážaných produktoch.",
    ],
    stats: [
      { value: "7,68M", label: "Odberateľov na YouTube" },
      { value: "+1 000", label: "Spokojných klientok" },
      { value: "Slovensko", label: "Líder v starostlivosti o pleť" },
    ],
    photoAlt: "Petra Kováčová, popredná estetická expertka na Slovensku",
  },

  faq: {
    eyebrow: "ČASTO KLADENÉ OTÁZKY",
    headline: "Všetko, čo potrebujete vedieť pred objednávkou.",
    items: [
      {
        q: "Čo presne kupujem?",
        a: "Kupujete si digitálny mini-kurz „Domáci Anti-age Píling“ s prístupom do platformy ES Video. Obsah vás naučí presný recept, správnu aplikáciu, recept na anti-age shot a bezpečnostný protokol.",
      },
      {
        q: "Čo všetko je zahrnuté v cene?",
        a: "Video s tajnou receptúrou, podrobná PDF príručka a prístup na platformu ES Video s ďalšími kurzami a materiálmi.",
      },
      {
        q: "Ako získam prístup k obsahu?",
        a: "Ihneď po úspešnej platbe vám príde e-mail s odkazom na platformu, kde nájdete video a PDF príručku. Nezabudnite si skontrolovať aj priečinok Spam (Nevyžiadaná pošta). Doručenie zvyčajne trvá len niekoľko minút.",
      },
      {
        q: "Za ako dlho po zakúpení dostanem prístup?",
        a: "Doručenie je automatické a okamžité po schválení platby — zvyčajne do jednej minúty.",
      },
      {
        q: "Pre koho je tento domáci píling vhodný?",
        a: "Je ideálny pre ženy aj mužov nad 35 rokov, ktorí chcú stimulovať tvorbu kolagénu, zredukovať vrásky, pigmentové škvrny a vrátiť pleti jas. Neodporúča sa ľuďom s alergiou na aspirín, s extrémne citlivou pleťou alebo otvorenými ranami. Pred prvým nanesením je povinné vykonať test na alergiu.",
      },
      {
        q: "Naozaj to funguje?",
        a: "Áno. Účinná látka (kyselina acetylsalicylová) patrí do rovnakej rodiny kyselín, aké používajú na klinikách na obnovu buniek: odstraňuje vrstvu odumretých buniek a stimuluje kolagén. Výsledok je porovnateľný s povrchovým chemickým pílingom, ale za absolútne minimálnu cenu.",
      },
      {
        q: "V akej forme sú lekcie podávané?",
        a: "Prostredníctvom video lekcií v kombinácii s informatívnymi textami, a to vo veľmi ľahko zrozumiteľnom a pútavom formáte.",
      },
      {
        q: "Existuje záruka vrátenia peňazí?",
        a: "Áno. Máte plných 14 dní na otestovanie metódy. Ak nebudete spokojní, stačí kontaktovať náš tím podpory a my vám vrátime 100 % sumy späť bez akýchkoľvek zbytočných otázok.",
      },
    ],
  },

  closing: {
    eyebrow: "ČASOVO OBMEDZENÁ PONUKA",
    headline: "Vaša pleť môže už o 28 dní vyzerať úplne inak.",
    body: "Výber je jednoduchý: môžete naďalej míňať peniaze na krémy, ktoré nefungujú, alebo jednorazovo investovať do prírodnej, praktickej metódy s bezpodmienečnou zárukou.",
    cta: "CHCEM ZAČAŤ HNEĎ TERAZ",
    timerNote: "Ponuka vyprší o",
    timerLabels: { days: "Dni", hours: "Hodiny", minutes: "Minúty", seconds: "Sekundy" },
  },

  footer: {
    brand: "Petra Kováčová",
    tagline: "Krása tvorená vedou a starostlivosťou.",
    rights: "Všetky práva vyhradené.",
    legalLinks: [
      { label: "Zásady ochrany osobných údajov", href: "#" },
      { label: "Obchodné podmienky", href: "#" },
    ],
    disclaimer:
      "Táto stránka nie je prepojená so sieťou Facebook ani so spoločnosťou Meta. Výsledky sa môžu u každého jednotlivca líšiť.",
  },

  pixel: {
    id: "2099946003917342",
  },

  a11y: {
    skipToContent: "Prejsť na hlavný obsah",
    faqExpand: "Zobraziť odpoveď",
    faqCollapse: "Skryť odpoveď",
    carouselPrev: "Predchádzajúca fotka",
    carouselNext: "Ďalšia fotka",
  },

  metadata: {
    title: "Domáci Anti-age Píling | Petra Kováčová",
    description:
      "Zistite, ako si urobiť domáci píling s profesionálnymi výsledkami. Obnovená, pevná a žiarivá pleť do 28 dní. 14-dňová záruka.",
  },
};