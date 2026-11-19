/**
 * Single source of truth for the site's copy. Every string is bilingual —
 * components read it through `useLanguage().l(...)`.
 */

export type Bi = { en: string; ar: string }
const b = (en: string, ar: string): Bi => ({ en, ar })

export const CAREER_START = 2007

export const contact = {
  email: "a7mdel5taeeb@gmail.com",
  phone: "+966564227074",
  phoneDisplay: "+966 56 422 7074",
  whatsapp: "966564227074",
  github: "https://github.com/a7mdel5taeeb-eng",
  githubHandle: "@a7mdel5taeeb-eng",
}

export function waLink(message?: string) {
  return `https://wa.me/${contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
}

export const person = {
  name: b("Ahmed Elkhateeb", "أحمد الخطيب"),
  role: b("Computer & Software Engineer", "مهندس حاسب وبرمجيات"),
  location: b("Saudi Arabia", "المملكة العربية السعودية"),
  blurb: b(
    "Computer & software engineer turning ideas into real solutions — across software, education and IT systems.",
    "مهندس حاسب وبرمجيات يحوّل الأفكار إلى حلول حقيقية — في البرمجيات والتعليم وأنظمة التقنية.",
  ),
  waHello: b("Hello Ahmed, I'd like to talk about an idea.", "مرحبًا أحمد، أود التحدث معك عن فكرة."),
}

export const nav = [
  { href: "/#about", label: b("About", "نبذة") },
  { href: "/projects", label: b("Disciplines", "المجالات") },
  { href: "/workbench", label: b("Experience", "الخبرات") },
  { href: "/notes", label: b("Profile", "الملف المهني") },
  { href: "/contact", label: b("Contact", "تواصل") },
]

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: b("Computer & Software Engineer — based in Saudi Arabia", "مهندس حاسب وبرمجيات — من المملكة العربية السعودية"),
  title: b("Turning ideas\ninto real solutions.", "نحوّل الأفكار\nإلى حلول حقيقية."),
  subtitle: b(
    "I build software and web experiences, teach technology with clarity, and keep the systems behind it dependable. One engineer across code, classroom and infrastructure — since 2007.",
    "أبني البرمجيات وتجارب الويب، وأعلّم التقنية بوضوح، وأحافظ على موثوقية الأنظمة التي تقف خلفها. مهندس واحد يجمع بين البرمجة والفصل الدراسي والبنية التحتية — منذ عام 2007.",
  ),
  primary: b("Start a project", "ابدأ مشروعك"),
  secondary: b("View disciplines", "استعرض مجالات العمل"),
  stats: [
    { value: "years", label: b("Years in technology", "عامًا في التقنية") },
    { value: "4", label: b("Core disciplines", "مجالات رئيسية") },
    { value: "3", label: b("Professional certifications", "شهادات مهنية") },
  ],
  badges: {
    status: b("Open to new conversations", "متاح لمحادثات جديدة"),
    timezone: b("Saudi Arabia · GMT+3", "السعودية · ‎+3 غرينتش"),
  },
  caption: b("Head of Computer Department", "رئيس قسم الحاسب الآلي"),
  scroll: b("Scroll", "مرّر"),
  ring: b("SOFTWARE ✦ WEB ✦ AI EDUCATION ✦ IT SYSTEMS ✦ NETWORKING ✦ ", "البرمجيات ✦ الويب ✦ تعليم الذكاء الاصطناعي ✦ أنظمة التقنية ✦ الشبكات ✦ "),
}

/* ─── Discipline strip ─────────────────────────────────────────────────────── */

export const marquee = {
  rowA: [
    b("Software Development", "تطوير البرمجيات"),
    b("Web Design", "تصميم الويب"),
    b("Web Development", "تطوير الويب"),
    b("AI Education", "تعليم الذكاء الاصطناعي"),
    b("Programming Instruction", "تدريس البرمجة"),
    b("ICT Leadership", "قيادة تعليم الحاسب"),
    b("Technical Support", "الدعم الفني"),
    b("Networking Solutions", "حلول الشبكات"),
    b("Computer Maintenance", "صيانة الحاسب"),
    b("Technology Consultation", "الاستشارات التقنية"),
  ],
  rowB: [
    b("CCNA", "CCNA"),
    b("IT Essentials", "IT Essentials"),
    b("ICDL", "ICDL"),
    b("Windows Environments", "بيئات Windows"),
    b("Hardware Diagnostics", "تشخيص الأعطال"),
    b("Local Area Networks", "الشبكات المحلية"),
    b("Troubleshooting", "حل المشكلات"),
    b("User Support", "دعم المستخدمين"),
    b("Digital Literacy", "المهارات الرقمية"),
    b("Hands-on Learning", "التعلم التطبيقي"),
  ],
}

/* ─── About ────────────────────────────────────────────────────────────────── */

export const about = {
  tag: b("About", "نبذة"),
  title: b("Technology only matters when people can use it.", "قيمة التقنية في أن ينتفع بها الناس فعلًا."),
  body: b(
    "I'm Ahmed Elkhateeb, a computer and software engineer based in Saudi Arabia. My career began in technical support and design in 2007, grew through technology sales and consultation, and today I lead the computer department at Dunia Al-Ajial International Schools. That path taught me to see every problem from three sides — the code, the machine and the person using both.",
    "أنا أحمد الخطيب، مهندس حاسب وبرمجيات مقيم في المملكة العربية السعودية. بدأت مسيرتي عام 2007 في الدعم الفني والتصميم، ثم تطورت عبر مبيعات التقنية والاستشارات، واليوم أقود قسم الحاسب الآلي في مدارس دنيا الأجيال العالمية. علّمتني هذه الرحلة أن أنظر إلى كل مشكلة من ثلاث زوايا: الكود، والجهاز، والإنسان الذي يستخدمهما.",
  ),
  points: [
    b("Clear thinking before clever code.", "وضوح التفكير قبل براعة الكود."),
    b("Solutions shaped around real people, not assumptions.", "حلول تُبنى حول احتياجات الناس الحقيقية، لا حول الافتراضات."),
    b("Teaching that builds lasting confidence with technology.", "تعليم يبني ثقة راسخة في التعامل مع التقنية."),
  ],
  valueTitle: b("Where I add value", "أين أضيف قيمة"),
  value: [
    [b("Software & web", "البرمجيات والويب"), b("Websites and tools that solve one problem well.", "مواقع وأدوات تحل مشكلة محددة بإتقان.")],
    [b("Education", "التعليم"), b("AI and programming taught in plain language.", "الذكاء الاصطناعي والبرمجة بلغة بسيطة وواضحة.")],
    [b("Systems", "الأنظمة"), b("Devices, networks and support that keep work moving.", "أجهزة وشبكات ودعم يُبقي العمل مستمرًا.")],
    [b("Advice", "المشورة"), b("Honest guidance on what to buy, build or skip.", "نصيحة صادقة حول ما يستحق الشراء أو البناء أو التجاوز.")],
  ],
  glanceTitle: b("At a glance", "لمحة سريعة"),
  glance: [
    [b("Role", "الصفة"), b("Computer & Software Engineer", "مهندس حاسب وبرمجيات")],
    [b("Currently", "حاليًا"), b("Head of Computer Department", "رئيس قسم الحاسب الآلي")],
    [b("Based in", "المقر"), b("Saudi Arabia", "المملكة العربية السعودية")],
    [b("Languages", "اللغات"), b("Arabic · English", "العربية · الإنجليزية")],
    [b("In technology since", "في مجال التقنية منذ"), b("2007", "2007")],
  ],
}

/* ─── Disciplines ──────────────────────────────────────────────────────────── */

export type DisciplineCategory = "software" | "education" | "systems"

export const disciplines: {
  id: string
  category: DisciplineCategory
  title: Bi
  summary: Bi
  description: Bi
  focus: Bi[]
}[] = [
  {
    id: "software",
    category: "software",
    title: b("Software & Web Solutions", "حلول البرمجيات والويب"),
    summary: b(
      "Websites, web apps and practical tools — designed with care and built to be used every day.",
      "مواقع وتطبيقات ويب وأدوات عملية — تُصمَّم بعناية وتُبنى لتُستخدم كل يوم.",
    ),
    description: b(
      "From the first sketch to a working product, I turn practical needs into clear, usable digital experiences: thoughtful interfaces, clean structure and code that stays easy to maintain.",
      "من أول مخطط إلى منتج يعمل، أحوّل الاحتياجات العملية إلى تجارب رقمية واضحة وسهلة الاستخدام: واجهات مدروسة، وبنية منظمة، وكود يسهل تطويره وصيانته.",
    ),
    focus: [b("Software development", "تطوير البرمجيات"), b("Web design", "تصميم الويب"), b("Web development", "تطوير الويب")],
  },
  {
    id: "ai-education",
    category: "education",
    title: b("AI Education Lab", "مختبر تعليم الذكاء الاصطناعي"),
    summary: b(
      "Accessible ways to teach AI concepts, build real understanding and encourage responsible experimentation.",
      "أساليب ميسّرة لتعليم مفاهيم الذكاء الاصطناعي، وبناء فهم حقيقي، وتشجيع التجريب المسؤول.",
    ),
    description: b(
      "AI is moving faster than most curricula. I design approachable learning that explains how these tools work, where they genuinely help, and where human judgment still has the final word.",
      "يتطور الذكاء الاصطناعي أسرع من معظم المناهج. أصمم تجارب تعلّم ميسّرة تشرح كيف تعمل هذه الأدوات، وأين تفيد حقًا، وأين يبقى للحكم البشري القول الفصل.",
    ),
    focus: [b("AI education", "تعليم الذكاء الاصطناعي"), b("Responsible use", "الاستخدام المسؤول"), b("Hands-on exploration", "الاستكشاف العملي")],
  },
  {
    id: "digital-learning",
    category: "education",
    title: b("Digital Learning Experiences", "تجارب التعلم الرقمي"),
    summary: b(
      "Computer and programming teaching that connects technical concepts with hands-on practice.",
      "تعليم الحاسب والبرمجة بأسلوب يربط المفاهيم التقنية بالتطبيق العملي.",
    ),
    description: b(
      "Good teaching turns abstract ideas into skills people keep. As a department head, I shape ICT learning that is structured, practical and confidence-building — from first principles to real projects.",
      "التعليم الجيد يحوّل الأفكار المجردة إلى مهارات راسخة. بصفتي رئيسًا لقسم الحاسب، أبني تجارب تعلّم تقنية منظمة وعملية تعزز الثقة — من الأساسيات حتى المشاريع الحقيقية.",
    ),
    focus: [b("ICT teaching", "تعليم تقنية المعلومات"), b("Programming", "البرمجة"), b("Department leadership", "قيادة القسم")],
  },
  {
    id: "it-systems",
    category: "systems",
    title: b("IT Systems & Networking", "أنظمة التقنية والشبكات"),
    summary: b(
      "Technical support, maintenance, networking and consultation that keep people productive.",
      "دعم فني وصيانة وحلول شبكات واستشارات تحافظ على إنتاجية الفرق.",
    ),
    description: b(
      "Behind every good digital experience is infrastructure that simply works. I diagnose, maintain and network systems — and advise on the technology that is actually worth the investment.",
      "خلف كل تجربة رقمية ناجحة بنية تحتية تعمل بلا عناء. أشخّص الأنظمة وأصونها وأربطها بالشبكات، وأقدّم المشورة في التقنية التي تستحق الاستثمار فعلًا.",
    ),
    focus: [b("IT support", "الدعم الفني"), b("Networking", "الشبكات"), b("Maintenance", "الصيانة"), b("Consultation", "الاستشارات")],
  },
]

export const disciplineFilters: { id: "all" | DisciplineCategory; label: Bi }[] = [
  { id: "all", label: b("All", "الكل") },
  { id: "software", label: b("Software", "البرمجيات") },
  { id: "education", label: b("Education", "التعليم") },
  { id: "systems", label: b("Systems", "الأنظمة") },
]

export const disciplinesHead = {
  tag: b("Disciplines", "مجالات العمل"),
  title: b("Four disciplines.\nOne practical approach.", "أربعة مجالات،\nونهج عملي واحد."),
  description: b(
    "The areas I work in every day. Detailed case studies are published as projects are cleared for sharing.",
    "المجالات التي أعمل بها كل يوم. تُنشر دراسات الحالة التفصيلية تباعًا عند السماح بمشاركتها.",
  ),
  all: b("Explore all disciplines", "استكشف جميع المجالات"),
  discuss: b("Discuss a project", "ناقش مشروعًا"),
  label: b("Discipline", "المجال"),
}

/* ─── Services ─────────────────────────────────────────────────────────────── */

export const services = {
  tag: b("Services", "الخدمات"),
  title: b("What I can\nhelp you with.", "كيف يمكنني\nمساعدتك."),
  featureTitle: b("From the classroom to the server room.", "من الفصل الدراسي إلى غرفة الخوادم."),
  featureText: b(
    "Few engineers cover the whole chain. I can plan the software, set up the devices and network it runs on, and train the people who will use it — so nothing gets lost between teams.",
    "قلّة من المهندسين يغطّون السلسلة كاملة. أستطيع تخطيط البرمجيات، وتجهيز الأجهزة والشبكة التي تعمل عليها، وتدريب من سيستخدمها — فلا يضيع شيء بين الفرق.",
  ),
  items: [
    { icon: "code", title: b("Software development", "تطوير البرمجيات"), text: b("Purpose-built tools that automate routine work and solve specific problems.", "أدوات مصممة لغرض محدد تؤتمت العمل الروتيني وتحل مشكلات بعينها.") },
    { icon: "web", title: b("Web design & development", "تصميم وتطوير الويب"), text: b("Clear, responsive websites that explain what you do and work on every screen.", "مواقع واضحة ومتجاوبة تعرّف بعملك وتعمل على كل الشاشات.") },
    { icon: "ai", title: b("AI education", "تعليم الذكاء الاصطناعي"), text: b("Lessons and guidance that make AI practical, safe and approachable.", "دروس وإرشاد يجعل الذكاء الاصطناعي عمليًا وآمنًا وقريبًا من الجميع.") },
    { icon: "teach", title: b("Computer & programming teaching", "تدريس الحاسب والبرمجة"), text: b("Structured, hands-on learning — from first principles to real projects.", "تعلّم منظم وتطبيقي — من الأساسيات حتى المشاريع الحقيقية.") },
    { icon: "support", title: b("Technical support & maintenance", "الدعم الفني والصيانة"), text: b("Diagnosis, repair and upkeep that keep devices and people productive.", "تشخيص وإصلاح وصيانة دورية تحافظ على إنتاجية الأجهزة والفرق.") },
    { icon: "network", title: b("Networking & consultation", "الشبكات والاستشارات"), text: b("Reliable networks and honest advice on what to buy, build or skip.", "شبكات موثوقة ونصيحة صادقة حول ما يستحق الشراء أو البناء أو التجاوز.") },
  ] as const,
}

/* ─── The choice (cinematic band) ──────────────────────────────────────────── */

export const choice = {
  tag: b("The choice", "الاختيار"),
  title: b("Every project starts\nwith a choice.", "كل مشروع\nيبدأ باختيار."),
  body: b(
    "Stay comfortable with what you have, or see how far the right technology can take you. I make the options clear — the decision stays yours.",
    "أن تبقى مع ما اعتدت عليه، أو أن ترى إلى أي مدى يمكن أن تأخذك التقنية المناسبة. أوضّح لك الخيارات بجلاء — ويبقى القرار لك.",
  ),
  options: [
    {
      tone: "blue",
      label: b("Stay as you are", "أن تبقى كما أنت"),
      text: b("Workarounds, manual routines and systems nobody fully understands.", "حلول مؤقتة، ومهام يدوية متكررة، وأنظمة لا يفهمها أحد بالكامل."),
    },
    {
      tone: "red",
      label: b("See what's possible", "أن ترى ما هو ممكن"),
      text: b("Clear systems, practical software and people who know how to use them.", "أنظمة واضحة، وبرمجيات عملية، وفريق يعرف كيف يستخدمها."),
    },
  ] as const,
  cta: b("Take the first step", "اتخذ الخطوة الأولى"),
  alt: b("Ahmed Elkhateeb holding out a red pill and a blue pill", "أحمد الخطيب يمدّ يديه بحبة حمراء وأخرى زرقاء"),
}

/* ─── Process ──────────────────────────────────────────────────────────────── */

export const process = {
  tag: b("Process", "منهجية العمل"),
  title: b("From first message to\na solution that lasts.", "من أول رسالة\nإلى حل يدوم."),
  description: b(
    "A simple, transparent way of working — so you always know what happens next.",
    "طريقة عمل بسيطة وشفافة — لتعرف دائمًا ما الخطوة التالية.",
  ),
  steps: [
    { icon: "discover", title: b("Discover", "الاكتشاف"), text: b("We talk through the goal, the people involved and what success looks like for you.", "نناقش الهدف والأشخاص المعنيين وما يعنيه النجاح بالنسبة لك.") },
    { icon: "plan", title: b("Plan", "التخطيط"), text: b("A clear scope, priorities and a realistic timeline — agreed before any work begins.", "نطاق واضح وأولويات وجدول زمني واقعي — نتفق عليها قبل بدء العمل.") },
    { icon: "build", title: b("Build", "التنفيذ"), text: b("Work delivered in visible steps, with room for your feedback along the way.", "إنجاز على مراحل واضحة، مع مساحة لملاحظاتك في كل خطوة.") },
    { icon: "handover", title: b("Hand over", "التسليم"), text: b("Documentation, training and support, so the solution keeps working on its own.", "توثيق وتدريب ودعم، ليستمر الحل في العمل باستقلالية.") },
  ] as const,
}

/* ─── Experience ───────────────────────────────────────────────────────────── */

export const experienceHead = {
  tag: b("Experience", "الخبرات"),
  title: b("Since 2007, across\nevery layer of technology.", "منذ 2007،\nعبر كل طبقات التقنية."),
  description: b(
    "Teaching, technical support, design and technology sales — four chapters connected by one habit: solving practical problems for real people.",
    "التعليم والدعم الفني والتصميم ومبيعات التقنية — أربعة فصول يجمعها أمر واحد: حل المشكلات العملية لأناس حقيقيين.",
  ),
  log: b("Career log", "سجل المسيرة"),
  current: b("Current role", "الدور الحالي"),
  full: b("Full career log", "سجل المسيرة كاملًا"),
}

export const experience = [
  {
    from: "2023",
    to: b("Present", "الآن"),
    current: true,
    role: b("Head of Computer Department", "رئيس قسم الحاسب الآلي"),
    company: b("Dunia Al-Ajial International Schools", "مدارس دنيا الأجيال العالمية"),
    text: b(
      "Leading computer and ICT education — shaping how students learn programming, digital skills and artificial intelligence.",
      "قيادة تعليم الحاسب وتقنية المعلومات — وصياغة طريقة تعلّم الطلاب للبرمجة والمهارات الرقمية والذكاء الاصطناعي.",
    ),
    skills: [b("Department leadership", "قيادة القسم"), b("ICT teaching", "تعليم تقنية المعلومات"), b("AI education", "تعليم الذكاء الاصطناعي")],
  },
  {
    from: "2016",
    to: b("2023", "2023"),
    current: false,
    role: b("Sales & Technical Support", "المبيعات والدعم الفني"),
    company: b("ECS Distribution", "ECS Distribution"),
    text: b(
      "Advised customers on the right technology for their needs and supported them well beyond the sale.",
      "تقديم المشورة للعملاء في اختيار التقنية المناسبة لاحتياجاتهم، ودعمهم إلى ما بعد البيع.",
    ),
    skills: [b("Technology consultation", "الاستشارات التقنية"), b("Technical support", "الدعم الفني"), b("Customer relationships", "علاقات العملاء")],
  },
  {
    from: "2014",
    to: b("2016", "2016"),
    current: false,
    role: b("Technical Support & Marketing", "الدعم الفني والتسويق"),
    company: b("Egos Co.", "شركة إيجوس"),
    text: b(
      "Combined hands-on support with marketing — explaining technology in terms customers value.",
      "الجمع بين الدعم الفني والتسويق — وشرح التقنية بلغة يقدّرها العملاء.",
    ),
    skills: [b("Technical support", "الدعم الفني"), b("Marketing", "التسويق"), b("Communication", "التواصل")],
  },
  {
    from: "2007",
    to: b("2014", "2014"),
    current: false,
    role: b("Technical Support & Design", "الدعم الفني والتصميم"),
    company: b("Amici Group / Pronto Co.", "مجموعة أميتشي / شركة برونتو"),
    text: b(
      "Where it started: solving technical problems every day and designing with care.",
      "حيث بدأت الرحلة: حل المشكلات التقنية يوميًا، والتصميم بعناية.",
    ),
    skills: [b("Troubleshooting", "حل المشكلات"), b("Hardware maintenance", "صيانة الأجهزة"), b("Design", "التصميم")],
  },
]

/* ─── Credentials & languages ──────────────────────────────────────────────── */

export const credentialsHead = {
  tag: b("Credentials", "الشهادات"),
  title: b("Certified foundations.", "أسس معتمدة."),
  description: b(
    "Industry-recognised credentials in networking, computer systems and digital literacy.",
    "شهادات معترف بها في الشبكات وأنظمة الحاسب والمهارات الرقمية.",
  ),
}

export const credentials = [
  {
    name: "CCNA",
    label: b("Networking", "الشبكات"),
    note: b("Cisco Certified Network Associate", "شهادة Cisco المعتمدة في الشبكات"),
    items: [b("Network fundamentals", "أساسيات الشبكات"), b("Routing and switching", "التوجيه والتبديل"), b("Connectivity and troubleshooting", "الاتصال واستكشاف الأعطال")],
  },
  {
    name: "IT Essentials",
    label: b("Hardware & software", "الأجهزة والبرمجيات"),
    note: b("Computer hardware and software essentials", "أساسيات مكونات الحاسب وبرمجياته"),
    items: [b("PC hardware and assembly", "مكونات الحاسب وتجميعه"), b("Operating systems", "أنظمة التشغيل"), b("Preventive maintenance", "الصيانة الوقائية")],
  },
  {
    name: "ICDL",
    label: b("Digital literacy", "المهارات الرقمية"),
    note: b("International digital skills certification", "الشهادة الدولية للمهارات الرقمية"),
    items: [b("Computer and online essentials", "أساسيات الحاسب والإنترنت"), b("Documents, spreadsheets and presentations", "المستندات والجداول والعروض"), b("Safe, productive computing", "استخدام آمن ومنتج للحاسب")],
  },
]

export const languages = {
  title: b("Languages", "اللغات"),
  items: [
    { name: b("Arabic", "العربية"), level: b("Native", "اللغة الأم"), value: 1 },
    { name: b("English", "الإنجليزية"), level: b("Excellent", "ممتاز"), value: 0.9 },
  ],
}

export const principles = {
  title: b("Principles", "مبادئ العمل"),
  items: [
    [b("Clarity", "الوضوح"), b("If it can't be explained simply, it isn't finished.", "ما لا يمكن شرحه ببساطة، لم يكتمل بعد.")],
    [b("Practicality", "العملية"), b("The best solution is the one people actually use.", "أفضل حل هو الذي يستخدمه الناس فعلًا.")],
    [b("Reliability", "الموثوقية"), b("Quiet systems that work beat impressive ones that don't.", "الأنظمة الهادئة التي تعمل أفضل من المبهرة التي لا تعمل.")],
    [b("Teaching", "التعليم"), b("Every hand-over should leave people more capable.", "كل تسليم يجب أن يترك الناس أكثر قدرة.")],
  ],
}

/* ─── Contact & FAQ ────────────────────────────────────────────────────────── */

export const contactHead = {
  tag: b("Contact", "تواصل"),
  title: b("Let's talk about\nyour idea.", "لنتحدث عن\nفكرتك."),
  description: b(
    "WhatsApp is the fastest way to reach me. Prefer email? A few lines about what you need is the perfect start.",
    "واتساب أسرع طريقة للتواصل معي. تفضّل البريد الإلكتروني؟ بضعة أسطر عمّا تحتاجه بداية مثالية.",
  ),
}

export const channels = [
  { id: "whatsapp", label: b("WhatsApp", "واتساب"), value: contact.phoneDisplay, action: b("Chat", "محادثة") },
  { id: "email", label: b("Email", "البريد الإلكتروني"), value: contact.email, action: b("Write", "راسلني") },
  { id: "phone", label: b("Phone", "الهاتف"), value: contact.phoneDisplay, action: b("Call", "اتصال") },
  { id: "github", label: b("GitHub", "GitHub"), value: contact.githubHandle, action: b("Visit", "زيارة") },
] as const

export const brief = {
  title: b("What to include in your message", "ما الذي تكتبه في رسالتك"),
  items: [
    [b("The goal", "الهدف"), b("What you want to achieve, in a sentence or two.", "ما تريد تحقيقه، في جملة أو جملتين.")],
    [b("The people", "الأشخاص"), b("Who will use it — students, staff, customers.", "من سيستخدمه — طلاب أو موظفون أو عملاء.")],
    [b("The timing", "التوقيت"), b("Any deadline or milestone that matters.", "أي موعد نهائي أو مرحلة مهمة.")],
    [b("The context", "السياق"), b("What exists today, and what isn't working.", "ما هو موجود اليوم، وما الذي لا يعمل كما ينبغي.")],
  ],
}

export const faqHead = {
  tag: b("FAQ", "أسئلة شائعة"),
  title: b("Good questions,\nclear answers.", "أسئلة جيدة،\nوإجابات واضحة."),
  description: b("Didn't find what you need? Send a message — I'm happy to help.", "لم تجد ما تبحث عنه؟ أرسل رسالة، ويسعدني أن أساعدك."),
}

export const faqs = [
  {
    q: b("What kind of work do you take on?", "ما نوع الأعمال التي تتولاها؟"),
    a: b(
      "Software and web projects, AI and programming education, and IT support, maintenance and networking. If your need sits somewhere between these, that is usually where I'm most useful.",
      "مشاريع البرمجيات والويب، وتعليم الذكاء الاصطناعي والبرمجة، والدعم الفني والصيانة والشبكات. وإن كان احتياجك يقع بين هذه المجالات، فغالبًا هناك أكون أكثر فائدة.",
    ),
  },
  {
    q: b("Do you work with schools and training organisations?", "هل تتعاون مع المدارس وجهات التدريب؟"),
    a: b(
      "Education is a large part of my work. I currently lead a school computer department, so I understand both the teaching and the technical side — get in touch to discuss what you have in mind.",
      "التعليم جزء كبير من عملي؛ فأنا أقود حاليًا قسم الحاسب الآلي في مدرسة، لذلك أفهم الجانبين التعليمي والتقني معًا. تواصل معي لنناقش ما تفكر فيه.",
    ),
  },
  {
    q: b("Can you explain AI to non-technical people?", "هل يمكنك شرح الذكاء الاصطناعي لغير المتخصصين؟"),
    a: b(
      "That is the heart of my AI education work: plain language, real examples and an honest view of what these tools can — and can't — do.",
      "هذا جوهر عملي في تعليم الذكاء الاصطناعي: لغة بسيطة، وأمثلة واقعية، ونظرة صادقة لما تستطيعه هذه الأدوات وما لا تستطيعه.",
    ),
  },
  {
    q: b("Which languages do you work in?", "بأي لغة تعمل؟"),
    a: b(
      "Arabic (native) and English (excellent). Lessons, documentation and meetings can be in either.",
      "العربية (اللغة الأم) والإنجليزية (بمستوى ممتاز). يمكن تقديم الدروس والتوثيق والاجتماعات بأيٍّ منهما.",
    ),
  },
  {
    q: b("Where can I see examples of your work?", "أين يمكنني رؤية نماذج من أعمالك؟"),
    a: b(
      "My GitHub profile is the best place to start. Detailed case studies are added here as projects are cleared for publication.",
      "حسابي على GitHub أفضل نقطة للبداية، وتُضاف هنا دراسات حالة تفصيلية تباعًا عند السماح بنشرها.",
    ),
  },
  {
    q: b("How do we get started?", "كيف نبدأ؟"),
    a: b(
      "Send a short message on WhatsApp or by email describing what you need. We'll agree on a time to talk it through.",
      "أرسل رسالة قصيرة عبر واتساب أو البريد الإلكتروني تصف فيها ما تحتاجه، وسنتفق على موعد لمناقشته.",
    ),
  },
]

export const cta = {
  title: b("Have an idea?\nLet's make it real.", "لديك فكرة؟\nلنحوّلها إلى واقع."),
  description: b(
    "Tell me what you're working on. Together we'll find the clearest path from idea to solution.",
    "أخبرني بما تعمل عليه، وسنجد معًا أوضح طريق من الفكرة إلى الحل.",
  ),
  primary: b("Start a conversation", "ابدأ المحادثة"),
  secondary: b("Message on WhatsApp", "راسلني عبر واتساب"),
}

/* ─── Inner pages ──────────────────────────────────────────────────────────── */

export const pages = {
  disciplines: {
    eyebrow: b("Disciplines", "مجالات العمل"),
    title: b("The work,\nin focus.", "العمل،\nعن قرب."),
    description: b(
      "Software, education and IT systems — what each discipline covers, and how it helps the people I work with.",
      "البرمجيات والتعليم وأنظمة التقنية — ما يشمله كل مجال، وكيف يخدم من أعمل معهم.",
    ),
    empty: b("Nothing in this category yet.", "لا يوجد محتوى في هذا التصنيف بعد."),
    filterLabel: b("Filter disciplines", "تصفية المجالات"),
    noteTitle: b("Case studies in preparation", "دراسات حالة قيد الإعداد"),
    noteText: b(
      "Client and school work is documented with care before it's shared. In the meantime, my public code lives on GitHub.",
      "يُوثَّق عمل العملاء والمدارس بعناية قبل مشاركته. وفي الأثناء، تجد الكود العام الخاص بي على GitHub.",
    ),
    noteLink: b("Visit GitHub", "زيارة GitHub"),
    focusLabel: b("Focus", "التركيز"),
  },
  experience: {
    eyebrow: b("Experience", "الخبرات"),
    title: b("A career built\non solving problems.", "مسيرة قامت\nعلى حل المشكلات."),
    description: b(
      "From technical support to leading a school computer department — every role added a layer: the machine, the customer, the code and the classroom.",
      "من الدعم الفني إلى قيادة قسم الحاسب في مدرسة — أضاف كل دور طبقة جديدة: الجهاز، والعميل، والكود، والفصل الدراسي.",
    ),
    skillsLabel: b("Strengths", "نقاط القوة"),
    yearsLabel: b("years", "سنوات"),
  },
  profile: {
    eyebrow: b("Profile", "الملف المهني"),
    title: b("The foundations\nbehind the work.", "الأسس التي\nيقوم عليها العمل."),
    description: b(
      "Credentials, languages and the principles that shape how I approach technology.",
      "الشهادات واللغات والمبادئ التي تشكّل طريقتي في التعامل مع التقنية.",
    ),
  },
  contact: {
    eyebrow: b("Contact", "تواصل"),
    title: b("Let's talk.", "لنتحدث."),
    description: b(
      "Have an idea, a technical challenge or a learning opportunity? Reach out through any of the channels below.",
      "لديك فكرة أو تحدٍّ تقني أو فرصة تعليمية؟ تواصل معي عبر أي من القنوات التالية.",
    ),
    localTime: b("Local time · Saudi Arabia", "التوقيت المحلي · السعودية"),
    channelsTitle: b("Direct channels", "قنوات مباشرة"),
  },
}

export const footer = {
  pages: b("Pages", "الصفحات"),
  disciplines: b("Disciplines", "المجالات"),
  connect: b("Connect", "تواصل"),
  home: b("Home", "الرئيسية"),
  rights: b("All rights reserved.", "جميع الحقوق محفوظة."),
  wordmark: "ELKHATEEB",
  tagline: b("Computer & Software Engineer · Saudi Arabia", "مهندس حاسب وبرمجيات · المملكة العربية السعودية"),
  top: b("Back to top", "العودة للأعلى"),
}
