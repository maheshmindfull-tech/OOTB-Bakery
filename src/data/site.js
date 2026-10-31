export const certs = [
  { short: "BRCGS", title: "BRCGS", body: "Global Standard for Food Safety. A GFSI recognised scheme, and the one most large retailers ask for when they audit a supplier." },
  { short: "SQF", title: "SQF", body: "Safe Quality Food certification, also GFSI recognised, and widely accepted by North American grocery and club retailers." },
  { short: "HACCP", title: "HACCP", body: "Hazard Analysis and Critical Control Points. The plan behind our critical controls, including metal detection and checkweighing." },
  { short: "Kosher", title: "Kosher", body: "Kosher certification for the products and lines that need it. It is product specific, so ask about yours." },
  { short: "CFIA", title: "CFIA licensed", body: "Licensed under the Safe Food for Canadians Regulations, which is what lets product move between provinces and be exported." },
  { short: "Nut\nfree", title: "Nut-free facility", body: "No peanuts and no tree nuts come into the building, so there is no in-plant cross contact to manage." },
];

const photo = (name) => `/media/images/${name}`;
const machine = (name) => photo(`machines/${name}`);
const film = (name) => `/media/videos/${name}`;

export const clips = [
  {
    id: "clip-batch-mixing",
    kicker: "Mixing and blending",
    title: "Batch mixing",
    tags: "mixing",
    icon: "mixer",
    image: photo("mixing.jpg"),
    video: film("mixer.mp4"),
    summary: "Doughs and batters are mixed in batches to a set formula and a set time, so every batch behaves the same way on the line.",
    body: "Doughs and batters are mixed in batches to a set formula and a set time, so every batch behaves the same way on the line. Mix sheets are followed and signed off before the batch moves on. Ingredients are scaled under the same allergen controls as the rest of the plant.",
  },
  {
    id: "clip-dough-development",
    kicker: "Mixing and blending",
    title: "Dough development",
    tags: "mixing",
    icon: "mixer",
    image: photo("plant.jpg"),
    video: film("bakery-line.mp4"),
    summary: "The mixer develops the dough to the texture the product needs. Mix time and dough temperature are recorded against the batch.",
    body: "The mixer develops the dough to the texture the product needs. Mix time and dough temperature are recorded against the batch, because both change how the product behaves further down the line. Inclusions go in at the point where they keep their shape.",
  },
  {
    id: "clip-portioned-dough",
    kicker: "Depositing and portioning",
    title: "Portioned dough",
    tags: "depositing",
    icon: "deposit",
    image: photo("dough.jpg"),
    video: film("dough-line.mp4"),
    summary: "Dough is portioned into even pieces and travels along the belt in rows.",
    body: "Dough is portioned into even pieces and travels along the belt in rows. Piece weight is checked against the specification at set intervals during the run, because consistent weight is what keeps bake time and finished weight in range.",
  },
  {
    id: "clip-line-inspection",
    kicker: "Coding and inspection",
    title: "Line inspection",
    tags: "coding",
    icon: "check",
    image: photo("kitchen.jpg"),
    video: film("packing-crew.mp4"),
    summary: "Trained staff watch the line and pull anything that does not match the specification.",
    body: "Trained staff watch the line and pull anything that does not match the specification. Checks on weight, appearance and seal quality are recorded as the run happens, not at the end. Problems are caught while the run is still live.",
  },
  {
    id: "clip-packing-line",
    kicker: "End of line",
    title: "Packing line",
    tags: "end",
    icon: "grid",
    image: photo("cookies.jpg"),
    video: film("packaging-machine.mp4"),
    summary: "Finished product is packed, cased and coded on the packing line.",
    body: "Finished product is packed, cased and coded on the packing line. Labels, best before codes and case counts are checked at the start of the run and at set points through it. Changeovers between customers follow a written line clearance.",
  },
  {
    id: "clip-case-sealing",
    kicker: "End of line",
    title: "Case sealing",
    tags: "end",
    icon: "cube",
    image: photo("warehouse.jpg"),
    video: film("cases.mp4"),
    summary: "Cases are sealed and staged by lot, ready to palletise.",
    body: "Cases are sealed and staged by lot, ready to palletise. Pallet labels carry what is needed to trace the load in both directions. Finished goods go to storage or straight to dispatch.",
  },
];

export const equipmentGroups = [
  {
    n: "01",
    title: "Mixing and blending",
    items: [
      { name: "Planetary floor mixers", body: "Doughs, batters and fillings, mixed in batches.", image: machine("planetary-mixer.jpg") },
      { name: "High shear mixers", body: "Smooth batters, fillings and liquid blends.", image: machine("high-shear-mixer.jpg") },
      { name: "V-blender", body: "Dry ingredients and powders, blended evenly.", image: machine("v-blender.jpg") },
      { name: "Grinder", body: "Dry ingredients ground to size in-house.", image: machine("grinder.jpg") },
    ],
  },
  {
    n: "02",
    title: "Depositing and portioning",
    items: [
      { name: "Cookie depositor", body: "Cookie dough deposited or wire cut in even rows.", image: machine("cookie-depositor.jpg") },
      { name: "Vacuum filler and portioner", body: "Dough and batter portioned by weight.", image: machine("vacuum-filler.jpg") },
    ],
  },
  {
    n: "03",
    title: "Baking",
    items: [{ name: "Commercial bakery ovens", body: "Baked to the time and temperature set for each product.", image: machine("bakery-oven.jpg") }],
  },
  {
    n: "04",
    title: "Weighing and bagging",
    items: [
      { name: "Multihead weigher with vertical form fill seal bagger", body: "Portions weighed, then bagged and sealed from roll film.", image: machine("multihead-bagger.jpg") },
      { name: "Stand-up pouch machine", body: "Stand-up pouches filled and sealed.", image: machine("pouch-machine.jpg") },
    ],
  },
  {
    n: "05",
    title: "Powder filling",
    items: [{ name: "Powder filling machines", body: "Powders dosed by weight into jars, tubs, pouches or bags.", image: machine("powder-filler.jpg") }],
  },
  {
    n: "06",
    title: "Wrapping and sealing",
    items: [
      { name: "Flow wrappers", body: "Crackers, bars and cookies in individual flow packs.", image: machine("flow-wrapper.jpg") },
      { name: "Shrink wrapper and heat tunnel", body: "Multipacks and trays shrink wrapped.", image: machine("shrink-tunnel.jpg") },
      { name: "Container sealer", body: "Tubs and containers lidded and heat sealed.", image: machine("container-sealer.jpg") },
    ],
  },
  {
    n: "07",
    title: "Coding and inspection",
    items: [
      { name: "Code printer", body: "Lot number and best before date on every pack.", image: machine("code-printer.jpg") },
      { name: "Checkweigher", body: "Every pack weighed in line. Off-weight packs rejected.", image: machine("checkweigher.jpg") },
      { name: "X-ray inspection", body: "Finds foreign material such as metal, glass and stone, including inside foil packs.", image: machine("xray-inspection.jpg") },
      { name: "Metal detector", body: "Inline metal detection, challenged with test pieces through the run.", image: machine("metal-detector.jpg") },
    ],
  },
  {
    n: "08",
    title: "End of line",
    items: [{ name: "Strapping machine", body: "Cases and bundles strapped for shipping.", image: machine("strapping-machine.jpg") }],
  },
  {
    n: "09",
    title: "Cotton candy",
    items: [{ name: "Cotton candy machines, large and small", body: "Floss spun, packed into tubs and sealed.", image: machine("cotton-candy-machine.jpg") }],
  },
];

export const products = [
  {
    id: "cookies",
    category: "Cookies",
    group: "Cookies",
    title: "Cookies",
    tags: ["retail", "bulk", "wrapped", "frozen"],
    icon: "cookie",
    image: photo("cookies.jpg"),
    body: "Drop, formed and slab cookies baked to your recipe or developed with you from a reference product. Piece weight, spread and bake colour are set during scale-up and then held run to run. Inclusions are added at the point in the mix where they keep their shape.",
    formats: ["Bulk in lined cases for further processing", "Retail-ready bags or trays", "Individually wrapped for foodservice and gifting", "Frozen dough if you would rather bake off in store"],
    buyers: ["Grocery and club private label", "Cafe and foodservice chains", "Gifting and meal kit brands"],
    flip: false,
  },
  {
    id: "biscotti",
    category: "Biscotti",
    group: "Cookies",
    title: "Biscotti",
    tags: ["bulk", "retail", "wrapped"],
    icon: "grid",
    image: photo("biscotti.jpg"),
    body: "Twice baked, so the second bake is where the texture is won or lost. We set the slab bake, the slice thickness and the dry-out bake during scale-up and record them as part of the specification. Biscotti holds well in retail packs, which is why it travels so well through distribution.",
    formats: ["Bulk cases", "Retail-ready bags", "Individually wrapped singles or twin packs", "Display and point of purchase packs"],
    buyers: ["Cafe chains and roasters", "Grocery private label", "Distributors"],
    flip: true,
  },
  {
    id: "snowball",
    category: "Snowball cookies",
    group: "Cookies",
    title: "Snowball cookies",
    tags: ["bulk", "retail"],
    icon: "cookie",
    image: photo("snowball.jpg"),
    body: "A short, crumbly cookie finished in icing sugar. The finish is the fragile part, so handling between cooling and packing is kept to a minimum and the pack is chosen to protect the coating in transit, not only on the shelf.",
    formats: ["Bulk cases", "Retail-ready tubs or bags", "Seasonal and gift pack assembly"],
    buyers: ["Seasonal and gifting programs", "Grocery private label", "Specialty retail"],
    flip: false,
  },
  {
    id: "meringues",
    category: "Meringues",
    group: "Confections",
    title: "Meringues",
    tags: ["retail", "bulk", "wrapped"],
    icon: "star",
    image: photo("meringues.jpg"),
    body: "Light, sugar based and very sensitive to moisture. Meringues need a controlled bake and a pack that keeps humidity out, which is where packing in the same building as the oven matters more than usual.",
    formats: ["Retail-ready bags and tubs", "Bulk for further processing", "Individually wrapped", "Moisture barrier packs"],
    buyers: ["Grocery private label", "Specialty and natural retail", "Gifting brands"],
    flip: true,
  },
  {
    id: "loaves",
    category: "Mini loaves",
    group: "Loaves and cakes",
    title: "Mini loaves",
    tags: ["wrapped", "retail", "bulk", "frozen"],
    icon: "loaf",
    image: photo("loaves.jpg"),
    body: "Single serve and small format loaves, baked in pans and finished to the specification you set. A good fit for cafe counters, hotel and catering programs, and anywhere a whole loaf is more than the customer wants to buy.",
    formats: ["Individually wrapped", "Retail-ready multipacks", "Bulk for foodservice", "Frozen batter for bake-off"],
    buyers: ["Cafe and foodservice", "Hotel and catering", "Grocery private label"],
    flip: false,
  },
  {
    id: "dough",
    category: "Frozen cookie dough",
    group: "Frozen",
    title: "Frozen cookie dough",
    tags: ["frozen", "bulk", "retail"],
    icon: "flake",
    image: photo("dough.jpg"),
    body: "Dough made, portioned and frozen so the bake happens at your site or your customer's. It is the simplest way to put a fresh baked cookie in front of a customer without putting a baker in every location, and it moves the shelf life problem off the finished product.",
    formats: ["Portioned pucks or pre-slabbed", "Bulk frozen in lined cases", "Retail frozen packs", "Held frozen on site until dispatch"],
    buyers: ["Cafe and restaurant chains", "Grocery in-store bakery", "Meal kit and subscription brands"],
    flip: true,
  },
  {
    id: "batter",
    category: "Muffin, cupcake and brownie batter",
    group: "Frozen",
    title: "Muffin, cupcake and brownie batter",
    tags: ["frozen"],
    icon: "cup",
    image: photo("batter.jpg"),
    body: "Batter made to your formula and packed for bake-off, so each site gets the same product without holding the recipe or the skill in house. The same batter can be baked and finished here if you would rather buy it ready to sell.",
    formats: ["Frozen in pails or lined cases", "Portioned for direct deposit", "Baked and finished here instead", "Held frozen on site until dispatch"],
    buyers: ["Foodservice and cafe chains", "In-store bakery programs", "Hotel and catering"],
    flip: false,
  },
];

export const services = [
  {
    id: "private-label",
    tab: "Private label",
    eyebrow: "Private label",
    title: "Your brand on the pack. Our bakery behind it.",
    icon: "cube",
    image: photo("cookies-stack.jpg"),
    video: film("packaging-machine.mp4"),
    paragraphs: [
      "A private label program lives or dies on consistency. The buyer is not comparing you to your last run. They are comparing you to the national brand on the shelf beside you.",
      "We bake to an agreed specification, pack into your artwork, and case and label it the way your distribution centre needs it. The bag, the label, the case and the pallet are handled by the same team that baked the product.",
    ],
    included: [
      "Baked to an agreed written specification",
      "Your artwork, pack format, case and pallet configuration",
      "Retail-ready, club and bulk formats",
      "Best-before coding and case labelling",
      "Display and point of purchase pack assembly",
      "Documentation your category team can audit",
    ],
  },
  {
    id: "contract-baking",
    tab: "Contract baking",
    eyebrow: "Contract baking",
    title: "Your recipe, run under our food safety program.",
    icon: "mixer",
    image: photo("plant.jpg"),
    video: film("bakery-line.mp4"),
    paragraphs: [
      "You keep the formula. We run it on our equipment, to your specification, with the records to show what happened on each batch.",
      "This is the right route when you already have a product that sells and the problem is capacity, a second source, or a nut-free site you cannot create in your own plant.",
    ],
    included: [
      "Your formula stays yours",
      "Production on a nut-free site",
      "Batch records for every run",
      "Foreign body detection and checkweighing on the line",
      "Bake profiles locked in during scale-up",
      "Scheduled repeat runs against your forecast",
    ],
  },
  {
    id: "recipe-transfer",
    tab: "Recipe transfer and scale-up",
    eyebrow: "Recipe transfer and scale-up",
    title: "A kitchen recipe is not a production recipe. We close the gap first.",
    icon: "chat",
    image: photo("mixing.jpg"),
    video: film("mixer.mp4"),
    paragraphs: [
      "Recipes change when they move onto a line. Mixing time, dough temperature, deposit weight and bake profile all behave differently at scale, and some ingredients simply do not work in a production environment.",
      "We work through that with you before the first commercial run. You see the sample, you approve the specification, and then the line is set to reproduce it. Doing this after the packaging has been ordered is where most launches go wrong.",
    ],
    included: [
      "Bench to line translation",
      "Sample against your reference product",
      "Ingredient substitution where an ingredient will not scale",
      "Trial runs on production equipment",
      "Specification written and agreed before commitment",
      "Honest feedback when something will not work",
    ],
  },
  {
    id: "packaging",
    tab: "Packaging",
    eyebrow: "Packaging",
    title: "Weighing, bagging, filling, wrapping and sealing on site.",
    icon: "grid",
    image: photo("warehouse.jpg"),
    video: film("packing-crew.mp4"),
    paragraphs: [
      "Packing happens in the same building as baking, as soon as the product has cooled. Nothing travels to a second site to be finished.",
      "Automated work and hand work sit side by side, so a pack that needs a machine for the bag and a person for the insert or the display tray does not have to move between two companies.",
    ],
    included: [
      "Multihead weighing and vertical form fill seal bagging",
      "Stand-up pouch filling and sealing",
      "Powder filling into jars, tubs, pouches and bags",
      "Flow wrapping for individually wrapped products",
      "Shrink wrapping",
      "Tub and container sealing",
      "Labelling, date and lot coding",
      "Checkweighing and X-ray inspection",
      "Case packing, strapping and pallet labelling",
      "Hand kitting and gift pack assembly",
      "Display and point of purchase packs",
      "Private label packaging",
    ],
  },
  {
    id: "frozen",
    tab: "Frozen dough and batters",
    eyebrow: "Frozen dough and batters",
    title: "Move the bake to the point of sale.",
    icon: "flake",
    image: photo("dough.jpg"),
    video: film("dough-line.mp4"),
    paragraphs: [
      "Frozen dough and batter let each of your locations bake off fresh without holding the recipe, the equipment or the skill in house. It also moves the shelf life problem off the finished product, which is usually the hardest constraint on a baked goods program.",
      "We make it, portion it and freeze it, and hold it frozen on site until it ships.",
    ],
    included: [
      "Frozen cookie dough, portioned or slabbed",
      "Muffin, cupcake and brownie batter",
      "Packed for bake-off at your site",
      "Bulk frozen in lined cases or pails",
      "Retail frozen formats",
      "Held frozen on site until dispatch",
    ],
  },
  {
    id: "storage",
    tab: "Storage and dispatch",
    eyebrow: "Storage and dispatch",
    title: "Finished goods held and shipped from the same building.",
    icon: "truck",
    image: photo("truck.jpg"),
    video: film("cases.mp4"),
    paragraphs: [
      "Baking the product is half the job. Holding it, picking it and getting it onto a truck when the order lands is the half that usually gets handed to a third party who did not make it.",
      "At 288 Judson Street finished goods go from the packing line into storage in the same building, so there is no transfer between sites and no second set of records.",
    ],
    included: [
      "Finished goods storage on site",
      "Pick and pack",
      "Case and pallet labelling",
      "Shipment coordination",
      "Stock held against your forecast",
      "Lot tracking from line to truck",
    ],
  },
];

export const industries = [
  {
    id: "startups",
    icon: "chat",
    image: photo("cookies.jpg"),
    title: "Start-up food brands",
    problem: "you cannot make enough of it.",
    body: "You have a product that sells at markets, in a few independents or online, and demand has outgrown the kitchen. Every co-packer you call wants a volume you cannot commit to, and the ones that will talk to you want a specification you have never written.",
    points: [
      "We start from a brief and a reference product, not a finished specification",
      "Scale-up trials on production equipment before you buy packaging",
      "Honest feedback when a recipe will not survive a line",
      "Packing, storage and dispatch in the same building, so you are not managing four suppliers",
    ],
  },
  {
    id: "established",
    icon: "target",
    image: photo("plant.jpg"),
    title: "Established food brands",
    problem: "capacity, a second source, or an allergen you cannot manage.",
    body: "Your own plant is full, or a retailer wants a second source, or a customer is asking for a nut-free version you cannot make safely in a facility that runs nuts. None of those are recipe problems, so you should not have to hand over the formula to solve them.",
    points: [
      "Contract baking where the formula stays yours",
      "Production on a nut-free site with no in-plant cross contact",
      "Batch records and documentation your quality team can audit",
      "Scheduled repeat runs against your forecast",
    ],
  },
  {
    id: "grocery",
    icon: "cube",
    image: photo("grocery.jpg"),
    title: "Grocery and club retail",
    problem: "private label with an audit trail.",
    body: "Your category team needs a supplier who can hold a specification run after run and produce the documentation when someone asks. Price matters, but a supplier who cannot answer a traceability question is a bigger risk than one who costs a few cents more.",
    points: [
      "Private label and co-packed product for national and regional grocery and club retailers",
      "Retail-ready, club and display formats",
      "Case and pallet labelling to your distribution centre standard",
      "GFSI recognised certification and a traceability program behind every run",
    ],
  },
  {
    id: "distributors",
    icon: "truck",
    image: photo("truck.jpg"),
    title: "Distributors",
    problem: "supply that arrives clean and on time.",
    body: "You are not trying to develop a product. You need consistent supply, correct case and pallet labelling, and product that does not generate claims when it lands. A short shelf life or a mislabelled case costs you more than the margin on the line.",
    points: [
      "Consistent product against a written specification",
      "Case and pallet labelling that scans first time",
      "Storage and dispatch from the same building that made the product",
      "Lot tracking from the line to the truck",
    ],
  },
  {
    id: "foodservice",
    icon: "people",
    image: photo("cafe.jpg"),
    title: "Foodservice and cafe chains",
    problem: "the same cookie in every location.",
    body: "Baking in store gives you a fresh product and an inconsistent one. Central baking gives you consistency and a shelf life problem. Frozen dough and batter is how most chains solve this, and it takes the skill requirement out of each location.",
    points: [
      "Frozen cookie dough, portioned for bake-off",
      "Muffin, cupcake and brownie batter to your formula",
      "Individually wrapped and bulk formats for counter service",
      "Held frozen on site until dispatch",
    ],
  },
  {
    id: "gifting",
    icon: "grid",
    image: photo("cookies-hero.jpg"),
    title: "Meal kit and gifting",
    problem: "components that survive the box.",
    body: "Your product is the box, not the cookie. You need portioned, wrapped or kitted components that arrive intact, in a pack format that fits your assembly line and does not add a nut allergen statement to the whole kit.",
    points: [
      "Individually wrapped and portioned formats",
      "Hand kitting and gift pack assembly",
      "Nut-free production so the kit claim stays simple",
      "Display and point of purchase packs for seasonal programs",
    ],
  },
];

export const roles = [
  {
    title: "Production Associate",
    value: "Production Associate",
    tags: ["Etobicoke", "Shift work", "Entry level"],
    summary: "Working on the line: mixing, depositing, tray handling, packing, and keeping the area clean and organised as you go.",
    do: [
      "Run your station to the written process and the batch record",
      "Follow GMP for handling, clothing, jewellery and hand washing",
      "Flag anything that looks wrong instead of letting the run continue",
      "Keep your area clean through the shift, not only at the end",
      "Support changeovers and line clearance between products",
    ],
    look: [
      "Reliable attendance and comfort with shift work",
      "Able to stand for a full shift and lift within a food production environment",
      "Careful and consistent, because the job is repetition done right",
      "Food production experience helps but is not required",
    ],
  },
  {
    title: "Line Lead",
    value: "Line Lead",
    tags: ["Etobicoke", "Shift work", "Experienced"],
    summary: "Running a line through a shift: the people on it, the product coming off it and the records that go with it.",
    do: [
      "Set up and clear the line between products and customers",
      "Watch weight, appearance and seal quality through the run",
      "Complete batch records and in-process checks as the run happens",
      "Challenge metal detection and checkweighing at the set points",
      "Direct the associates on the line and train new starters",
    ],
    look: [
      "Experience leading a line or a small team in food production",
      "Comfortable completing and standing behind written records",
      "Willing to stop a line when something is wrong",
      "Clear communication with the shift supervisor and QA",
    ],
  },
  {
    title: "QA Technician",
    value: "QA Technician",
    tags: ["Etobicoke", "Shift work", "Experienced"],
    summary: "Checking that what is written down is what actually happened, and holding product when it did not.",
    do: [
      "Carry out pre-operational sanitation inspections by zone and sign them off",
      "Verify metal detection and checkweighing challenges and record the results",
      "Complete in-process checks against the product specification",
      "Manage the glass and brittle plastics register and inspections",
      "Support traceability exercises, audits and customer document requests",
    ],
    look: [
      "Experience in a QA role in food manufacturing",
      "Working knowledge of HACCP and GMP",
      "Comfortable holding product and explaining why",
      "Accurate written records and attention to detail",
    ],
  },
  {
    title: "Sanitation Lead",
    value: "Sanitation Lead",
    tags: ["Etobicoke", "Shift work", "Experienced"],
    summary: "Owning the state of the plant before production starts, which is the biggest single input into whether a shift goes well.",
    do: [
      "Plan and run the sanitation schedule by zone",
      "Complete pre-operational inspections and present zones for release",
      "Control chemical use, concentrations and storage",
      "Keep sanitation records to an auditable standard",
      "Train and direct the sanitation team",
    ],
    look: [
      "Experience in food plant sanitation, ideally in a certified facility",
      "Understanding of chemical safety and WHMIS",
      "Able to work the hours the schedule needs, often before production",
      "Thorough, methodical and willing to fail a zone",
    ],
  },
  {
    title: "Maintenance Millwright",
    value: "Maintenance Millwright",
    tags: ["Etobicoke", "Shift work", "Licensed trade"],
    summary: "Keeping the equipment running and keeping every fix food safe, which is not the same job as keeping it running.",
    do: [
      "Preventive and breakdown maintenance across bakery and packing equipment",
      "Support changeovers, installations and line trials",
      "Work to food safety rules on materials, lubricants and temporary repairs",
      "Keep maintenance records and parts information current",
      "Support the glass and brittle plastics program on equipment",
    ],
    look: [
      "Millwright licence or an equivalent trade qualification",
      "Experience in a food manufacturing environment",
      "Mechanical and basic electrical troubleshooting",
      "Understands why a temporary fix with the wrong material is not acceptable in a food plant",
    ],
  },
];

export const faqs = [
  {
    n: "01",
    title: "Getting started",
    intro: "Before you send us anything, this is what the first conversation looks like.",
    items: [
      {
        q: "What is the first step if I want to make my product?",
        a: [
          "Send us the product, the format you need it to ship in and roughly what volume you are planning. A photo of a reference product and a rough recipe is enough to start.",
          "We will tell you whether the bakery can run it as described, what would have to change, and what we would need from you to put a number on it. If it is not a fit, we say so at that point, before you have spent money.",
        ],
      },
      {
        q: "Do I have to give you my recipe?",
        a: [
          "Not to start the conversation, and not at all under contract baking. Under contract baking the formula stays yours and we run it.",
          "For private label or product development we do need to work on the formula with you, because that is the job. Either way, ask us about a confidentiality agreement before you send anything you consider sensitive.",
        ],
      },
      {
        q: "What is your minimum order?",
        a: [
          "It depends on the product, the format and the packaging, so we do not publish a single number that would be wrong for most enquiries.",
          "Minimums are driven by mix size, changeover time and the packaging you choose. Tell us what you are planning and we will give you the real minimum for that product.",
        ],
      },
      {
        q: "How long does it take to get from first call to first production run?",
        a: [
          "That depends mostly on you, not on us. The parts we control are sampling, the scale-up trial and setting up the documentation.",
          "The parts that usually set the timeline are your packaging lead time, your artwork approval and your ingredient decisions. We will give you a schedule once we know the product and the format.",
        ],
      },
      {
        q: "Can you develop a product from scratch?",
        a: [
          "We can work from a reference product or a brief instead of a finished recipe. What we will not do is promise a result before we have baked a sample.",
          "The route is the same either way: brief, sample, specification, scale-up trial, then a documented first run.",
        ],
      },
    ],
  },
  {
    n: "02",
    title: "Production",
    intro: "How a run actually works once you are a customer.",
    items: [
      {
        q: "What products does the bakery run?",
        a: [
          "Cookies, biscotti, snowball cookies, meringues and mini loaves, plus frozen cookie dough and muffin, cupcake and brownie batter.",
          "If you have something similar in mind that is not on the list, ask. New products go through the same brief, sample and trial route as everything else.",
        ],
      },
      {
        q: "Will my product come out the same every run?",
        a: [
          "That is the whole point of the scale-up trial. Mixing time, deposit weight and bake profile are set on production equipment and recorded as part of the specification, so later runs reproduce the approved result.",
          "In-process checks during the run keep it there. If something drifts, it gets caught while the run is live.",
        ],
      },
      {
        q: "What happens if a batch fails a check?",
        a: [
          "It is held and dispositioned with a record. It does not quietly go back into the run.",
          "Metal detection rejects are reviewed, never returned to the line, and you are told about anything that affects your product.",
        ],
      },
      {
        q: "Can you run a trial before I commit to a full order?",
        a: [
          "Yes, and we would prefer to. A scale-up trial on production equipment is the only honest way to find out how a recipe behaves at volume.",
          "Trials are quoted separately from production because they use line time and ingredients.",
        ],
      },
      {
        q: "Do you make frozen dough and batter as well as baked product?",
        a: [
          "Yes. Frozen cookie dough and muffin, cupcake and brownie batter can be made, portioned and frozen for bake-off at your site or your customer's.",
          "The same batter can be baked and finished here instead, if you would rather buy a finished product.",
        ],
      },
    ],
  },
  {
    n: "03",
    title: "Food safety",
    intro: "The questions your quality team will ask, answered directly.",
    items: [
      {
        q: "Is the bakery really nut-free?",
        a: [
          "Peanuts and tree nuts are not received at the bakery. That is a stronger control than running nuts and managing them with cleaning and scheduling, because there is no in-plant cross contact to control in the first place.",
          "The control that still matters is upstream: every ingredient is approved against its specification before it is accepted, and nut-free status is confirmed there, not assumed. Ask us for the written policy before you put the claim on your pack.",
        ],
      },
      {
        q: "What certifications do you hold?",
        a: [
          "We work to BRCGS and SQF, operate a HACCP plan, offer Kosher certification on the products and lines that need it, and are CFIA licensed.",
          "Certification is product specific, so ask us for the current certificates that cover the product you are interested in. Do not take a logo on a website as evidence, from us or from anyone else.",
        ],
      },
      {
        q: "How do you handle traceability and recall?",
        a: [
          "Ingredient lots are recorded at intake, so we can trace forward from an ingredient to the batches and finished pallets it went into. From a finished pack code we can trace back to the batch, the run conditions and the ingredient lots behind it.",
          "Ask us when the last traceability exercise was run and what the recovery was. Ask that of every co-packer you are considering.",
        ],
      },
      {
        q: "What quality checks happen during a run?",
        a: [
          "Pre-operational sanitation is signed off by zone before production starts. During the run, deposit weight, appearance, seal quality, labelling and coding are checked at set points.",
          "Metal detection and checkweighing are challenged with test pieces at the start of the run and at intervals through it, and the results are recorded against the batch.",
        ],
      },
      {
        q: "Do you have a glass and brittle plastics program?",
        a: [
          "Yes. Glass and brittle plastic items on and around the line are on a register and inspected on schedule, and a breakage triggers a defined response, not a judgement call.",
          "GMP covers handling, personal hygiene, clothing, jewellery and movement between zones, and applies to visitors and contractors as well as staff.",
        ],
      },
    ],
  },
  {
    n: "04",
    title: "Packaging and logistics",
    intro: "What happens between the oven and your customer.",
    items: [
      {
        q: "Can you pack into my own packaging?",
        a: [
          "Yes. Bagging, poly-bagging and heat sealing, shrink wrapping, labelling, case packing and pallet configuration all happen in house.",
          "Send us your pack specification early. Packaging is the most common reason a launch date slips, and some formats need to be checked against the line before you order them.",
        ],
      },
      {
        q: "Do you do retail-ready and display packs?",
        a: [
          "Yes. Display and point of purchase pack assembly, hand kitting and multipack assembly happen on site, alongside the automated bagging line.",
          "Complex packs that need both a machine and a person are finished in one place, instead of moving between two companies.",
        ],
      },
      {
        q: "Can you make seasonal or gift packs?",
        a: [
          "Yes. Seasonal and gift packs are assembled by hand on site, including display trays and multipacks.",
          "Send us the pack specification early, because seasonal programs usually have fixed ship windows and the packaging lead time is often the longest part.",
        ],
      },
      {
        q: "Can you store finished product and ship it as I need it?",
        a: [
          "Yes. Finished goods can be held at 288 Judson Street and shipped as your orders land.",
          "Pick and pack, case and pallet labelling and shipment coordination happen in the same building that made the product, so there is no transfer between sites and no second set of records.",
        ],
      },
      {
        q: "Can you ship direct to our distribution centre, or outside Ontario?",
        a: [
          "Yes. Product can be labelled and palletised to your distribution centre's standard and shipped direct. Send the receiving requirements with your first order.",
          "For shipments outside Ontario or outside Canada, tell us where the product needs to land and we will tell you what is involved. CFIA licensing is what allows product to move between provinces and be exported.",
        ],
      },
    ],
  },
];
