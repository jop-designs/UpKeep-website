export const WORKSHOPS = [
  {
    id: "ams-north",
    name: "Noord Frame Lab",
    city: "Amsterdam",
    lat: 52.4022,
    lng: 4.9158,
    address: "Asterweg 23, 1031 HM Amsterdam",
    website: "https://example.org/noord-frame-lab",
    image: "Assets/stock/workshop-wall.jpg",
    specialties: ["fender", "rack", "lights", "chain-guard", "bell"],
    description:
      "A makerspace focused on laser-cut templates and quick-fit utility parts for daily city bikes."
  },
  {
    id: "utrecht-yard",
    name: "Canal Yard Cycles",
    city: "Utrecht",
    lat: 52.0897,
    lng: 5.1214,
    address: "Veilinghavenkade 105, 3521 AT Utrecht",
    website: "https://example.org/canal-yard-cycles",
    image: "Assets/stock/workshop-bench.jpg",
    specialties: ["saddle", "handlebars", "pedals", "bell"],
    description:
      "Community workshop sessions where riders prototype ergonomic upgrades with on-site mentors."
  },
  {
    id: "rdam-docks",
    name: "Dockside Bicycle Commons",
    city: "Rotterdam",
    lat: 51.9225,
    lng: 4.47917,
    address: "Katendrechtse Lagedijk 412, 3082 GR Rotterdam",
    website: "https://example.org/dockside-bicycle-commons",
    image: "Assets/stock/workshop-wheel.jpg",
    specialties: ["rack", "fender", "lights", "pedals", "bell"],
    description:
      "Known for durable all-weather commuter parts built from recycled aluminum and reclaimed plastics."
  },
  {
    id: "eindhoven-shed",
    name: "Strijp-S Bike Shed",
    city: "Eindhoven",
    lat: 51.4416,
    lng: 5.4697,
    address: "Torenallee 48, 5617 BD Eindhoven",
    website: "https://example.org/strijp-s-bike-shed",
    image: "Assets/stock/workshop-handlebar.jpg",
    specialties: ["chain-guard", "lights", "handlebars"],
    description:
      "A fabrication-focused studio that helps beginners turn open files into polished, practical bike parts."
  },
  {
    id: "groningen-loop",
    name: "Northern Loop Workshop",
    city: "Groningen",
    lat: 53.2194,
    lng: 6.5665,
    address: "Damsterdiep 284, 9713 EE Groningen",
    website: "https://example.org/northern-loop-workshop",
    image: "Assets/stock/workshop-mechanic.jpg",
    specialties: ["saddle", "pedals", "fender"],
    description:
      "Small-group evenings where riders test comfort upgrades and ride-feedback iterations."
  },
  {
    id: "hague-harbor",
    name: "Harborline Open Bike Studio",
    city: "The Hague",
    lat: 52.0705,
    lng: 4.3007,
    address: "Saturnusstraat 59, 2516 AG Den Haag",
    website: "https://example.org/harborline-open-bike-studio",
    image: "Assets/stock/workshop-showroom.jpg",
    specialties: ["rack", "lights", "handlebars", "saddle", "bell"],
    description:
      "Weekly open benches for riders who want cleaner cable routing, better lighting, and stronger carrying setups."
  }
];

export const PARTS = [
  {
    slug: "saddle",
    name: "Saddle",
    photo: "Assets/bike_without_background.png",
    photoPosition: "38% 27%",
    heroTitle: "Comfort keeps your bike in your life.",
    summary:
      "Build a saddle shell and cover that matches your riding posture, so your bike feels inviting every day.",
    whyItMatters:
      "A worn saddle can make every ride feel like a chore. Replacing or rebuilding it early keeps comfort high and prevents bike neglect.",
    workshops: ["utrecht-yard", "groningen-loop", "hague-harbor"],
    makeSteps: [
      "Pick your preferred riding posture and saddle width.",
      "Cut the base from the open template and reinforce mounting points.",
      "Add cushioning and weather-resistant top material.",
      "Test on a short ride and tune angle/height with workshop support."
    ],
    fileDownloads: [
      { title: "Saddle Base DXF", href: "#" },
      { title: "Cover Stitch Pattern PDF", href: "#" }
    ]
  },
  {
    slug: "bell",
    name: "Bell",
    photo: "Assets/bike_without_background.png",
    photoPosition: "60% 20%",
    heroTitle: "Make yourself heard with a beautiful tone.",
    summary:
      "Craft a custom bell dome and striker for a clear, resonant ring that alerts others without startling them.",
    whyItMatters:
      "A working bell is legally required in many places and crucial for safety, but stock bells often break or sound harsh.",
    workshops: ["ams-north", "utrecht-yard", "rdam-docks", "hague-harbor"],
    makeSteps: [
      "Select a dome shape and material (brass, steel, or aluminum).",
      "Cut and form the striker spring from template files.",
      "Assemble on the mounting bracket and test the resonance.",
      "Adjust the striker distance for the clearest ring."
    ],
    fileDownloads: [
      { title: "Bell Dome Templates DXF", href: "#" },
      { title: "Striker assembly STL", href: "#" }
    ]
  },
  {
    slug: "handlebars",
    name: "Handlebars",
    photo: "Assets/bike_without_background.png",
    photoPosition: "63% 18%",
    heroTitle: "Control and confidence start at your hands.",
    summary:
      "Tune reach, width, and grip geometry with open-source handlebar options for city and utility riding.",
    whyItMatters:
      "If steering feels awkward, people ride less. Better hand position makes your bike safer and more enjoyable.",
    workshops: ["utrecht-yard", "eindhoven-shed", "hague-harbor"],
    makeSteps: [
      "Choose the handlebar profile from the file library.",
      "Form or print grip adapters and shims for your stem size.",
      "Mount controls and test cable comfort range.",
      "Ride and fine-tune sweep and tilt."
    ],
    fileDownloads: [
      { title: "Handlebar Sweep Templates", href: "#" },
      { title: "Grip Adapter STL Pack", href: "#" }
    ]
  },
  {
    slug: "chain-guard",
    name: "Chain Guard",
    photo: "Assets/bike_without_background.png",
    photoPosition: "45% 58%",
    heroTitle: "A clean drivetrain keeps bikes in circulation.",
    summary:
      "Create a chain guard that protects clothes, reduces dirt, and keeps the bike feeling cared for.",
    whyItMatters:
      "An exposed oily chain is one of the fastest ways a bike starts feeling messy and neglected.",
    workshops: ["ams-north", "eindhoven-shed"],
    makeSteps: [
      "Measure your chainring size and chain line.",
      "Cut side plates from the open template material list.",
      "Install spacers and test pedaling clearance.",
      "Seal edges and apply optional color finish."
    ],
    fileDownloads: [
      { title: "Chain Guard Parametric SVG", href: "#" },
      { title: "Mounting Hardware Guide", href: "#" }
    ]
  },
  {
    slug: "fender",
    name: "Fender",
    photo: "Assets/bike_without_background.png",
    photoPosition: "20% 50%",
    heroTitle: "Dry rides make daily cycling realistic.",
    summary:
      "Build front and rear fenders sized for your tire width and local weather.",
    whyItMatters:
      "Without fenders, wet rides feel punishing and riders stop using the bike for everyday tasks.",
    workshops: ["ams-north", "rdam-docks", "groningen-loop"],
    makeSteps: [
      "Select tire width profile from the library.",
      "Cut fender strips and bend to arc with workshop jig.",
      "Fit struts and check wheel clearance.",
      "Test through bumps and re-tighten alignment."
    ],
    fileDownloads: [
      { title: "Fender Arc Templates", href: "#" },
      { title: "Strut Bracket Cut Files", href: "#" }
    ]
  },
  {
    slug: "lights",
    name: "Lights",
    photo: "Assets/bike_without_background.png",
    photoPosition: "73% 40%",
    heroTitle: "Visibility is a part you can build too.",
    summary:
      "Use open housings and mounts to upgrade your bike lights while keeping parts serviceable.",
    whyItMatters:
      "Weak or broken lights make bikes unsafe and quickly reduce confidence in riding after dark.",
    workshops: ["ams-north", "rdam-docks", "eindhoven-shed", "hague-harbor"],
    makeSteps: [
      "Choose front and rear light mount standards.",
      "Print or cut housings from weather-ready files.",
      "Install LED modules and cable channels.",
      "Aim beams and verify battery access."
    ],
    fileDownloads: [
      { title: "Modular Light Housing STL", href: "#" },
      { title: "Mounting Bracket DXF", href: "#" }
    ]
  },
  {
    slug: "pedals",
    name: "Pedals",
    photo: "Assets/bike_without_background.png",
    photoPosition: "47% 66%",
    heroTitle: "Secure footing changes how a bike feels.",
    summary:
      "Prototype pedal bodies and traction surfaces that match your riding style.",
    whyItMatters:
      "Slippery or damaged pedals reduce stability and make even short rides feel less trustworthy.",
    workshops: ["utrecht-yard", "rdam-docks", "groningen-loop"],
    makeSteps: [
      "Select pedal body design from open files.",
      "Machine or print body and pins with workshop guidance.",
      "Install bearings and spindle interface safely.",
      "Test grip in wet and dry conditions."
    ],
    fileDownloads: [
      { title: "Flat Pedal Body STL", href: "#" },
      { title: "Pin Layout Guide", href: "#" }
    ]
  },
  {
    slug: "rack",
    name: "Rack",
    photo: "Assets/bike_without_background.png",
    photoPosition: "19% 35%",
    heroTitle: "Carrying capacity keeps bikes useful.",
    summary:
      "Make front or rear rack modules for groceries, work gear, and everyday utility.",
    whyItMatters:
      "When carrying things becomes difficult, people choose other transport and the bike gets sidelined.",
    workshops: ["ams-north", "rdam-docks", "hague-harbor"],
    makeSteps: [
      "Select mounting points and target load capacity.",
      "Cut rails and support plates from open templates.",
      "Assemble rack platform and anti-rattle braces.",
      "Load test with workshop mentors before daily use."
    ],
    fileDownloads: [
      { title: "Rear Rack Plate DXF", href: "#" },
      { title: "Front Carrier Bracket STL", href: "#" }
    ]
  }
];

export const PART_HOTSPOTS = {
  handlebars: { anchor: { x: 66, y: 24 }, label: { x: 26, y: 11 } },
  saddle: { anchor: { x: 44, y: 28 }, label: { x: 18, y: 24 } },
  rack: { anchor: { x: 28, y: 34 }, label: { x: 14, y: 38 } },
  fender: { anchor: { x: 26, y: 49 }, label: { x: 14, y: 51 } },
  "chain-guard": { anchor: { x: 49, y: 54 }, label: { x: 18, y: 69 } },
  lights: { anchor: { x: 76, y: 38 }, label: { x: 87, y: 45 } },
  pedals: { anchor: { x: 51, y: 62 }, label: { x: 87, y: 72 } },
  bell: { anchor: { x: 62, y: 22 }, label: { x: 20, y: 5 } }
};
