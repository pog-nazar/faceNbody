/* ── I18N ────────────────────────────────────
   Ukrainian is the text already in index.html; it's read back from the page
   on load, so a Ukrainian copy edit only ever touches index.html. EN/PL come
   from the dictionaries below, keyed by:
     data-i18n="key"          → element text
     data-i18n-<attr>="key"   → attribute (placeholder, aria-label, alt, content)
   A key missing from EN/PL falls back to the Ukrainian text. */
const i18n = (function () {
  const LANGS = ['uk', 'en', 'pl'];
  const ATTRS = ['placeholder', 'aria-label', 'alt', 'content'];

  const DICT = {
    // Only strings that exist in JS alone — everything else is read from the HTML.
    uk: {
      'toast.errTitle': 'Не вдалося надіслати',
      'toast.errText': 'Перевірте інтернет-з’єднання і спробуйте ще раз, або зателефонуйте нам напряму.',
      'more.open': 'Читати більше ↓',
      'more.close': 'Згорнути ↑',
    },

    en: {
      'meta.title': 'Face & Body Massage Courses — Professional Massage Training',
      'meta.desc': 'Face and body massage courses — diploma programs, an international certificate and help finding a job.',
      'logo.main': 'Rehab Massage Therapist',
      'logo.sub': 'Massage Therapist Courses',
      'lang.label': 'Site language',
      'nav.label': 'Main navigation',
      'nav.courses': 'Courses',
      'nav.schedule': 'Schedule',
      'nav.about': 'About us',
      'nav.reviews': 'Reviews',
      'nav.enroll': 'Enroll',
      'nav.open': 'Open menu',
      'nav.menu': 'Navigation menu',
      'nav.close': 'Close menu',

      'hero.pill': 'No fluff · 80% practice',
      'hero.w1': 'Rehab massage therapist',
      'hero.w2': 'a high-paying',
      'hero.w3': 'profession',
      'hero.tagline': 'From zero to pro',
      'hero.salaryVal': 'A career that sets you free',
      'hero.salaryLbl': 'financial independence and room to keep growing',
      'hero.check1': 'For beginners — training from scratch, no experience needed',
      'hero.check2': 'For practicing therapists — new techniques and specialties',
      'hero.check3': 'For everyone who wants to take care of body and health',
      'hero.start': 'Start learning',
      'hero.view': 'View courses',
      'hero.imgAlt': 'Massage therapist working with a client in a bright treatment room',
      'stat.practice': 'Hands-on time',
      'stat.group': 'People per group',
      'stat.areas': 'Massage disciplines',
      'stat.materials': 'Materials included',

      'trust.1t': 'Comprehensive approach',
      'trust.1d': 'Classic and Eastern massage techniques',
      'trust.2t': 'Certificate',
      'trust.2d': 'Confirms your qualification',
      'trust.3t': 'Support after the course',
      'trust.3d': 'Advice on starting your career',
      'trust.4t': 'Small groups',
      'trust.4d': 'Up to 4–6 people — attention for everyone',

      'courses.eyebrow': 'Curriculum',
      'courses.title': 'What the program includes',
      'courses.prev': 'Previous course',
      'courses.next': 'Next course',
      'courses.more': 'Learn more →',
      'c1.alt': 'Classic back massage',
      'c1.tag': 'From zero',
      'c1.title': 'Basic course',
      'c1.desc': "Core knowledge of anatomy, physiology and classic techniques. Hand positioning, proper body mechanics for the therapist and a confident start in the profession. We practice anti-cellulite, sports, wellness, relaxing, preventive, toning, neurosedative, lymphatic drainage, general and children's massage, prenatal massage, cupping (vacuum) and device-assisted massage.",
      'c2.alt': 'Facial massage',
      'c2.title': 'Facial massage',
      'c2.desc': 'Modern aesthetic methods, lymphatic drainage, lifting and deep relaxation for natural rejuvenation without injections. Plus head massage and device-based facial massage.',
      'c3.alt': 'Thai massage',
      'c3.tag': '3 techniques',
      'c3.title': 'Body & Eastern practices',
      'c3.desc': "Thai massage — deep work along energy lines, stretching and gentle joint mobilization. Hawaiian massage (Lomi Lomi) — smooth, deep forearm strokes that relieve chronic stress. Vietnamese massage — traditional Eastern methods for restoring the body's energy balance and tone.",
      'c4.alt': 'Rehabilitation leg massage',
      'c4.title': 'Rehabilitation massage',
      'c4.desc': 'Recovery after injuries, back pain relief, posture correction and rehabilitation of the musculoskeletal system.',
      'c5.alt': 'Visceral massage',
      'c5.title': 'Visceral massage',
      'c5.desc': 'Safe and effective manual work with the abdominal organs to improve digestion, circulation and overall health.',
      'c6.alt': 'Manual therapy for the back',
      'c6.title': 'Manual therapy',
      'c6.desc': 'Human anatomy — muscles, bones and the structure of the spine. Gentle osteopathic thrust techniques in massage.',
      'c7.alt': 'Rehab massage therapist working with a patient',
      'c7.tag': 'Profession',
      'c7.title': 'Rehab massage therapist',
      'c7.desc': 'Anatomy for massage, indications and contraindications, disinfection and disposables, classic massage and its types, manual therapy and the psychology of working with clients.',
      'c8.alt': 'Your own massage studio',
      'c8.tag': 'Business',
      'c8.title': 'Your own business',
      'c8.desc': 'For those who want to run their own business: how to open your own massage room or studio and attract your first clients.',

      'sch.eyebrow': 'Format & programs',
      'sch.title': 'Schedule and training programs',
      'sch.formatHead': 'Training format',
      'sch.f1t': 'Class format',
      'sch.f1d': 'Intensive hands-on modules in mini-groups or one-on-one',
      'sch.f2t': 'Timetable',
      'sch.f2d': 'Weekend and evening groups — for those who combine studying with work',
      'sch.f3t': 'Duration',
      'sch.f3d': 'From a basic intensive to full professional training in all techniques',
      'sch.pkgHead': 'Training packages',
      'sch.p1t': 'Basic start',
      'sch.p1d': 'Classic body massage (from zero) + basics of anatomy and ergonomics',
      'sch.p2t': 'Facial aesthetics',
      'sch.p2d': 'Facial massage course — lymphatic drainage and lifting techniques',
      'sch.p3t': 'Eastern practices',
      'sch.p3d': 'Thai, Hawaiian (Lomi Lomi) and Vietnamese massage',
      'sch.p4tag': 'Most complete',
      'sch.p4t': 'Professional (all-in-one)',
      'sch.p4d': 'Full course: basics, face, rehabilitation, visceral and Eastern techniques + certificate',
      'sch.note': 'Every package already includes all the consumables you need during training (oils, towels, disposables) and study materials.',
      'sch.cta': 'Book your spot →',

      'why.eyebrow': 'Why us',
      'why.title': 'Not just a course — a profession.',
      'why.imgAlt': 'Instructor working with a client during a hands-on class',
      'why.1t': 'Practice from day one',
      'why.1d': '80% of study time is hands-on practice on real models under the supervision of an experienced instructor.',
      'why.2t': 'Comprehensive approach',
      'why.2d': 'You learn both classic European techniques and unique Eastern and wellness methods.',
      'why.3t': 'Small groups',
      'why.3d': 'An individual approach to every student: we refine your technique and work through mistakes together.',
      'why.4t': 'Certificate on completion',
      'why.4d': 'A document that confirms your qualification and opens the door to a job or your own business.',
      'why.5t': 'Support after the course',
      'why.5d': 'Advice on starting your career, finding your first clients and setting up your workspace.',
      'why.6t': 'For beginners and practitioners',
      'why.6d': 'The course suits both those who have never done massage and working specialists who want to expand their range of services.',

      'testi.eyebrow': 'Reviews',
      'testi.title': 'What our students say',
      'testi.1text': '“I came with no experience — and left with a diploma and my first client within two weeks. The instructors truly root for your success.”',
      'testi.1name': 'Mariia Kovalenko',
      'testi.1course': 'Basic course',
      'testi.2text': '“I took the rehab massage therapist course — and within two months I landed a job at a physiotherapy clinic. Real, practical knowledge, not fluff.”',
      'testi.2name': 'Oleh Tkachenko',
      'testi.2course': 'Rehab massage therapist',
      'testi.3text': '“The small group is a real plus. I didn’t get lost in the crowd and got feedback in every class.”',
      'testi.3name': 'Anastasiia Hrytsenko',
      'testi.3course': 'Facial massage',

      'enroll.eyebrow': 'Enroll',
      'enroll.title': 'Take the first step toward a new profession!',
      'enroll.text': "Leave your name and phone number — we'll call you back, answer your questions and help you choose a course and a convenient schedule. Or call or message us yourself.",
      'enroll.note': "Line busy or calling after hours? Message us on Viber, Telegram or WhatsApp at the same number — and we'll be sure to call you back.",
      'form.name': 'Name *',
      'form.namePh': 'What should we call you?',
      'form.phone': 'Phone *',
      'form.phonePh': '+380 __ ___ __ __',
      'form.submit': 'Send request',
      'form.consent': 'By clicking the button, you agree to the processing of your personal data',

      'foot.desc': 'Massage courses that turn a passion into a real profession. Diploma courses, small groups, real practice.',
      'foot.nav': 'Navigation',
      'foot.contacts': 'Contacts',
      'foot.address': 'Address',
      'foot.phone': 'Phone',
      'foot.email': 'Email',
      'foot.addressVal': 'Kyiv, Darnytskyi district, Kharkivska metro, 6-A Vyshniakivska St.',

      'call.open': 'Request a call',
      'call.title': 'Request a call',
      'call.text': "Leave your name and number — we'll call you back, even if it's late or the line is busy.",
      'call.namePh': 'Your name',
      'call.submit': 'Call me back',
      'ui.close': 'Close',

      'toast.okTitle': 'Request received!',
      'toast.okText': "We'll call you shortly. Thank you for your trust!",
      'toast.errTitle': "Couldn't send",
      'toast.errText': 'Check your internet connection and try again, or call us directly.',
      'more.open': 'Read more ↓',
      'more.close': 'Show less ↑',
    },

    pl: {
      'meta.title': 'Kursy masażu twarzy i ciała — profesjonalne szkolenia z masażu',
      'meta.desc': 'Kursy masażu twarzy i ciała — kursy z dyplomem, międzynarodowy certyfikat i pomoc w znalezieniu pracy.',
      'logo.main': 'Masażysta-rehabilitant',
      'logo.sub': 'Kursy masażysty-rehabilitanta',
      'lang.label': 'Język strony',
      'nav.label': 'Nawigacja główna',
      'nav.courses': 'Kursy',
      'nav.schedule': 'Harmonogram',
      'nav.about': 'O nas',
      'nav.reviews': 'Opinie',
      'nav.enroll': 'Zapisz się',
      'nav.open': 'Otwórz menu',
      'nav.menu': 'Menu nawigacyjne',
      'nav.close': 'Zamknij menu',

      'hero.pill': 'Bez lania wody · 80% praktyki',
      'hero.w1': 'Masażysta-rehabilitant',
      'hero.w2': 'wysoko płatny',
      'hero.w3': 'zawód',
      'hero.tagline': 'Od zera do profesjonalisty',
      'hero.salaryVal': 'Zawód, który daje wolność',
      'hero.salaryLbl': 'niezależność finansową i przestrzeń do ciągłego rozwoju',
      'hero.check1': 'Dla początkujących — nauka od zera, bez doświadczenia',
      'hero.check2': 'Dla praktykujących masażystów — nowe techniki i kierunki',
      'hero.check3': 'Dla wszystkich, którzy chcą dbać o ciało i zdrowie',
      'hero.start': 'Rozpocznij naukę',
      'hero.view': 'Zobacz kursy',
      'hero.imgAlt': 'Masażysta pracuje z klientką w jasnym gabinecie',
      'stat.practice': 'Czasu na praktykę',
      'stat.group': 'Osób w grupie',
      'stat.areas': 'Kierunki masażu',
      'stat.materials': 'Materiały w cenie',

      'trust.1t': 'Kompleksowe podejście',
      'trust.1d': 'Klasyczne i wschodnie techniki masażu',
      'trust.2t': 'Certyfikat',
      'trust.2d': 'Potwierdza Twoje kwalifikacje',
      'trust.3t': 'Wsparcie po kursie',
      'trust.3d': 'Porady na start kariery',
      'trust.4t': 'Małe grupy',
      'trust.4d': 'Do 4–6 osób — uwaga dla każdego',

      'courses.eyebrow': 'Program szkolenia',
      'courses.title': 'Co obejmuje program',
      'courses.prev': 'Poprzedni kurs',
      'courses.next': 'Następny kurs',
      'courses.more': 'Więcej →',
      'c1.alt': 'Klasyczny masaż pleców',
      'c1.tag': 'Od zera',
      'c1.title': 'Kurs podstawowy',
      'c1.desc': 'Solidne podstawy anatomii, fizjologii i technik klasycznych. Prawidłowe ułożenie dłoni, ergonomia pracy masażysty i pewny start w zawodzie. Ćwiczymy masaż antycellulitowy, sportowy, prozdrowotny, relaksacyjny, profilaktyczny, tonizujący, neurosedatywny, limfatyczny, ogólny i dziecięcy, masaż kobiet w ciąży, masaż bańkami (próżniowy) oraz masaż aparaturowy.',
      'c2.alt': 'Masaż twarzy',
      'c2.title': 'Masaż twarzy',
      'c2.desc': 'Nowoczesne metody estetyczne, drenaż limfatyczny, lifting i głęboki relaks — naturalne odmłodzenie bez zastrzyków. Dodatkowo masaż głowy i aparaturowe rodzaje masażu twarzy.',
      'c3.alt': 'Masaż tajski',
      'c3.tag': '3 techniki',
      'c3.title': 'Praktyki cielesne i wschodnie',
      'c3.desc': 'Masaż tajski — głęboka praca z liniami energetycznymi, rozciąganie i łagodna mobilizacja stawów. Masaż hawajski (Lomi Lomi) — płynne, głębokie ruchy przedramion, które łagodzą przewlekły stres. Masaż wietnamski — tradycyjne wschodnie metody przywracania równowagi energetycznej i tonusu ciała.',
      'c4.alt': 'Masaż rehabilitacyjny nogi',
      'c4.title': 'Masaż rehabilitacyjny',
      'c4.desc': 'Powrót do sprawności po urazach, likwidacja bólu pleców, korekcja postawy i rehabilitacja układu ruchu.',
      'c5.alt': 'Masaż wisceralny',
      'c5.title': 'Masaż wisceralny',
      'c5.desc': 'Bezpieczna i skuteczna praca manualna z narządami jamy brzusznej, która poprawia trawienie, krążenie i ogólny stan zdrowia.',
      'c6.alt': 'Terapia manualna pleców',
      'c6.title': 'Terapia manualna',
      'c6.desc': 'Anatomia człowieka — mięśnie, kości, budowa kręgosłupa. Łagodne osteopatyczne techniki manipulacyjne (thrust) w masażu.',
      'c7.alt': 'Masażysta-rehabilitant pracuje z pacjentem',
      'c7.tag': 'Zawód',
      'c7.title': 'Masażysta-rehabilitant',
      'c7.desc': 'Anatomia w masażu, wskazania i przeciwwskazania, dezynfekcja i materiały jednorazowe, masaż klasyczny i jego rodzaje, terapia manualna, psychologia pracy z klientem.',
      'c8.alt': 'Własne studio masażu',
      'c8.tag': 'Biznes',
      'c8.title': 'Własny biznes',
      'c8.desc': 'Kurs dla osób, które chcą prowadzić własną działalność: jak otworzyć gabinet lub studio masażu i pozyskać pierwszych klientów.',

      'sch.eyebrow': 'Format i programy',
      'sch.title': 'Harmonogram i programy szkolenia',
      'sch.formatHead': 'Forma nauki',
      'sch.f1t': 'Forma zajęć',
      'sch.f1d': 'Intensywne moduły praktyczne w mini-grupach lub indywidualnie',
      'sch.f2t': 'Grafik',
      'sch.f2d': 'Grupy weekendowe i wieczorowe — dla osób, które łączą naukę z pracą',
      'sch.f3t': 'Czas trwania',
      'sch.f3d': 'Od podstawowego kursu intensywnego po pełne przygotowanie zawodowe ze wszystkimi technikami',
      'sch.pkgHead': 'Pakiety szkoleniowe',
      'sch.p1t': 'Podstawowy start',
      'sch.p1d': 'Klasyczny masaż ciała (od zera) + podstawy anatomii i ergonomii',
      'sch.p2t': 'Estetyka twarzy',
      'sch.p2d': 'Kurs masażu twarzy — techniki drenażu limfatycznego i liftingu',
      'sch.p3t': 'Praktyki wschodnie',
      'sch.p3d': 'Masaż tajski, hawajski (Lomi Lomi) i wietnamski',
      'sch.p4tag': 'Najpełniejszy',
      'sch.p4t': 'Profesjonalista (pod klucz)',
      'sch.p4d': 'Pełny kurs: podstawy, twarz, masaż rehabilitacyjny, wisceralny i techniki wschodnie + certyfikat',
      'sch.note': 'Każdy pakiet obejmuje już wszystkie materiały eksploatacyjne potrzebne podczas nauki (olejki, ręczniki, produkty jednorazowe) oraz materiały szkoleniowe.',
      'sch.cta': 'Zarezerwuj miejsce →',

      'why.eyebrow': 'Dlaczego my',
      'why.title': 'To nie tylko kurs — to zawód.',
      'why.imgAlt': 'Instruktor pracuje z klientem podczas zajęć praktycznych',
      'why.1t': 'Praktyka od pierwszych zajęć',
      'why.1d': '80% czasu nauki to ćwiczenia praktyczne na prawdziwych modelach pod okiem doświadczonego instruktora.',
      'why.2t': 'Kompleksowe podejście',
      'why.2d': 'Nauka zarówno klasycznych technik europejskich, jak i unikalnych technik wschodnich i prozdrowotnych.',
      'why.3t': 'Małe grupy',
      'why.3d': 'Indywidualne podejście do każdego kursanta, dopracowanie techniki i praca nad błędami.',
      'why.4t': 'Certyfikat po ukończeniu',
      'why.4d': 'Dokument potwierdzający Twoje kwalifikacje, który otwiera drogę do zatrudnienia lub własnej działalności.',
      'why.5t': 'Wsparcie po kursie',
      'why.5d': 'Porady dotyczące startu kariery, pozyskiwania pierwszych klientów i organizacji miejsca pracy.',
      'why.6t': 'Dla początkujących i praktyków',
      'why.6d': 'Kurs jest odpowiedni zarówno dla osób, które nigdy nie zajmowały się masażem, jak i dla czynnych specjalistów, którzy chcą poszerzyć zakres usług.',

      'testi.eyebrow': 'Opinie',
      'testi.title': 'Co mówią nasi kursanci',
      'testi.1text': '„Przyszłam bez doświadczenia — wyszłam z dyplomem i pierwszym klientem w dwa tygodnie. Instruktorzy naprawdę kibicują Twoim postępom.”',
      'testi.1name': 'Maria Kowalenko',
      'testi.1course': 'Kurs podstawowy',
      'testi.2text': '„Ukończyłem kurs masażysty-rehabilitanta — po dwóch miesiącach dostałem pracę w klinice fizjoterapii. Konkretna, praktyczna wiedza, a nie lanie wody.”',
      'testi.2name': 'Oleh Tkaczenko',
      'testi.2course': 'Masażysta-rehabilitant',
      'testi.3text': '„Mała grupa to prawdziwy plus. Nie zgubiłam się w tłumie i na każdych zajęciach dostawałam informację zwrotną.”',
      'testi.3name': 'Anastazja Hrycenko',
      'testi.3course': 'Masaż twarzy',

      'enroll.eyebrow': 'Zapisy',
      'enroll.title': 'Zrób pierwszy krok do nowego zawodu!',
      'enroll.text': 'Zostaw imię i numer telefonu — oddzwonimy, doradzimy i pomożemy wybrać kurs oraz dogodny grafik nauki. Albo po prostu zadzwoń lub napisz do nas na komunikatorze.',
      'enroll.note': 'Linia zajęta albo dzwonisz poza godzinami pracy? Napisz do nas na Viberze, Telegramie lub WhatsAppie pod ten sam numer — na pewno oddzwonimy.',
      'form.name': 'Imię *',
      'form.namePh': 'Jak mamy się do Ciebie zwracać?',
      'form.phone': 'Telefon *',
      'form.phonePh': '+48 ___ ___ ___',
      'form.submit': 'Wyślij zgłoszenie',
      'form.consent': 'Klikając przycisk, wyrażasz zgodę na przetwarzanie danych osobowych',

      'foot.desc': 'Kursy masażu, które zamieniają pasję w prawdziwy zawód. Kursy z dyplomem, małe grupy, prawdziwa praktyka.',
      'foot.nav': 'Nawigacja',
      'foot.contacts': 'Kontakt',
      'foot.address': 'Adres',
      'foot.phone': 'Telefon',
      'foot.email': 'E-mail',
      'foot.addressVal': 'Kijów, dzielnica Darnycki, metro Charkiwska, ul. Wyszniakiwska 6-A',

      'call.open': 'Zamów rozmowę',
      'call.title': 'Zamów rozmowę',
      'call.text': 'Zostaw imię i numer — oddzwonimy, nawet jeśli jest późno albo linia jest zajęta.',
      'call.namePh': 'Twoje imię',
      'call.submit': 'Czekam na telefon',
      'ui.close': 'Zamknij',

      'toast.okTitle': 'Zgłoszenie przyjęte!',
      'toast.okText': 'Wkrótce do Ciebie zadzwonimy. Dziękujemy za zaufanie!',
      'toast.errTitle': 'Nie udało się wysłać',
      'toast.errText': 'Sprawdź połączenie z internetem i spróbuj ponownie albo zadzwoń do nas bezpośrednio.',
      'more.open': 'Czytaj więcej ↓',
      'more.close': 'Zwiń ↑',
    },
  };

  const original = new Map();
  document.querySelectorAll('[data-i18n]').forEach(el => original.set(el.dataset.i18n, el.textContent));
  ATTRS.forEach(attr => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
      original.set(el.getAttribute(`data-i18n-${attr}`), el.getAttribute(attr));
    });
  });

  let lang = 'uk';

  function t(key) {
    const dict = DICT[lang];
    if (key in dict) return dict[key];
    if (key in DICT.uk) return DICT.uk[key];
    return original.has(key) ? original.get(key) : key;
  }

  function apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    ATTRS.forEach(attr => {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
        el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`)));
      });
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  function setLang(next, remember) {
    if (!LANGS.includes(next)) return;
    lang = next;
    apply();
    if (remember) {
      try { localStorage.setItem('lang', lang); } catch (e) { /* private mode — just don't remember */ }
    }
    // Keep the choice in the URL too, so a copied link opens in the same language.
    const url = new URL(location.href);
    if (lang === 'uk') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    if (url.href !== location.href) history.replaceState(history.state, '', url);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function initialLang() {
    try {
      const fromUrl = new URLSearchParams(location.search).get('lang');
      if (LANGS.includes(fromUrl)) return fromUrl;
      const saved = localStorage.getItem('lang');
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* storage blocked — fall through to the default */ }
    return 'uk';
  }

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang, true));
  });

  setLang(initialLang(), false);
  document.documentElement.classList.remove('i18n-pending');

  return { t };
}());
