export interface Journals {
    name: string
    folder: string
    id: string
    page: Page[]
    journal: string
    actorJournal: ActorJournal[]
  }
  
  export interface Page {
    sort: number
    name: string
    type: string
    _Id: string
    title: Title
    text: Text
  }
  
  export interface Title {
    show: boolean
    level: number
  }
  
  export interface Text {
    format: number
    content: string
    markdown: string
  }
  
  export interface ActorJournal {
    actorId: string
    actor: Actor
    journalId: string
    journal: string
  }
  
  export interface Actor {
    id: string
    name: string
    type: string
    img: string
    items: Item[]
    effects: string[]
    folder: string
    sort: number
    flags: Flags2
    system: System2
    ownership: Ownership2
    prototypeToken: PrototypeToken
    stats: Stats2
  }
  
  export interface Item {
    id: string
    name: string
    type: string
    img: string
    effects: string[]
    folder: string
    sort: number
    flags: Flags
    system: System
    ownership: Ownership
    stats: Stats
  }
  
  export interface Flags {}
  
  export interface System {
    description: Description
    source: string
    activation: Activation
    duration: Duration
    cover: string
    target: Target
    range: Range
    uses: Uses
    consume: Consume
    ability: string
    actionType: string
    attackBonus: string
    chatFlavor: string
    critical: Critical
    damage: Damage
    formula: string
    save: Save
    type: Type
    requirements: string
    recharge: Recharge
    attunement: number
    quantity: number
    weight: number
    price: string
    equipped: boolean
    rarity: string
    identified: boolean
    armor: Armor
    hp: Hp
    weaponType: string
    baseItem: string
    properties: Properties
    proficient: boolean
  }
  
  export interface Description {
    value: string
    chat: string
    unidentified: string
  }
  
  export interface Activation {
    type: string
    cost: number
    condition: string
  }
  
  export interface Duration {
    value: string
    units: string
  }
  
  export interface Target {
    value: string
    width: string
    units: string
    type: string
  }
  
  export interface Range {
    value: number
    long: string
    units: string
  }
  
  export interface Uses {
    value: number
    max: string
    per: string
    recovery: string
    type: string
  }
  
  export interface Consume {
    type: string
    target: string
    amount: string
  }
  
  export interface Critical {
    threshold: string
    damage: string
  }
  
  export interface Damage {
    parts: string[][]
    versatile: string
    value: string
  }
  
  export interface Save {
    ability: string
    dc: string
    scaling: string
    value: string
  }
  
  export interface Type {
    value: string
    subtype: string
  }
  
  export interface Recharge {
    value: string
    charged: boolean
  }
  
  export interface Armor {
    value: number
  }
  
  export interface Hp {
    value: number
    max: number
    dt: string
    conditions: string
  }
  
  export interface Properties {}
  
  export interface Ownership {
    default: number
  }
  
  export interface Stats {
    systemId: string
    systemVersion: string
    coreVersion: string
    createdTime: string
    modifiedTime: number
    lastModifiedBy: string
  }
  
  export interface Flags2 {
    core: Core
    scenePacker: ScenePacker
  }
  
  export interface Core {
    sourceId: string
  }
  
  export interface ScenePacker {
    hash: string
  }
  
  export interface System2 {
    abilities: Abilities
    attributes: Attributes
    details: Details
    traits: Traits
    currency: Currency
    skills: Skills
    spells: Spells
    bonuses: Bonuses11
    resources: Resources
  }
  
  export interface Abilities {
    str: Str
    dex: Dex
    con: Con
    int: Int
    wis: Wis
    cha: Cha
  }
  
  export interface Str {
    value: number
    proficient: number
    bonuses: Bonuses
    min: number
    mod: number
    save: number
    prof: number
    saveBonus: number
    checkBonus: number
    dc: number
  }
  
  export interface Bonuses {
    check: string
    save: string
  }
  
  export interface Dex {
    value: number
    proficient: number
    bonuses: Bonuses2
    min: number
    mod: number
    save: number
    prof: number
    saveBonus: number
    checkBonus: number
    dc: number
  }
  
  export interface Bonuses2 {
    check: string
    save: string
  }
  
  export interface Con {
    value: number
    proficient: number
    bonuses: Bonuses3
    min: number
    mod: number
    save: number
    prof: number
    saveBonus: number
    checkBonus: number
    dc: number
  }
  
  export interface Bonuses3 {
    check: string
    save: string
  }
  
  export interface Int {
    value: number
    proficient: number
    bonuses: Bonuses4
    min: number
    mod: number
    save: number
    prof: number
    saveBonus: number
    checkBonus: number
    dc: number
  }
  
  export interface Bonuses4 {
    check: string
    save: string
  }
  
  export interface Wis {
    value: number
    proficient: number
    bonuses: Bonuses5
    min: number
    mod: number
    save: number
    prof: number
    saveBonus: number
    checkBonus: number
    dc: number
  }
  
  export interface Bonuses5 {
    check: string
    save: string
  }
  
  export interface Cha {
    value: number
    proficient: number
    bonuses: Bonuses6
    min: number
    mod: number
    save: number
    prof: number
    saveBonus: number
    checkBonus: number
    dc: number
  }
  
  export interface Bonuses6 {
    check: string
    save: string
  }
  
  export interface Attributes {
    ac: Ac
    hp: Hp2
    init: Init
    movement: Movement
    attunement: Attunement
    senses: Senses
    spellcasting: string
    prof: number
    spelldc: number
    spellLevel: number
    encumbrance: Encumbrance
  }
  
  export interface Ac {
    flat: number
    calc: string
    formula: string
    min: number
  }
  
  export interface Hp2 {
    value: number
    max: number
    temp: string
    tempmax: string
    formula: string
    min: number
  }
  
  export interface Init {
    ability: string
    bonus: string
    value: number
    mod: string
    total: number
    prof: number
    bonuses: Bonuses7
    passive: number
  }
  
  export interface Bonuses7 {
    check: string
    passive: string
  }
  
  export interface Movement {
    burrow: number
    climb: number
    fly: number
    swim: number
    walk: number
    units: string
    hover: boolean
  }
  
  export interface Attunement {
    max: number
  }
  
  export interface Senses {
    darkvision: number
    blindsight: number
    tremorsense: number
    truesight: number
    units: string
    special: string
  }
  
  export interface Encumbrance {
    value: number
    max: number
    pct: number
    encumbered: boolean
  }
  
  export interface Details {
    biography: Biography
    alignment: string
    race: string
    type: Type2
    environment: string
    cr: number
    spellLevel: number
    source: string
    xp: Xp
    class: Class
    gender: string
    age: string
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string
    notes1Name: string
    notes2Name: string
    notes3Name: string
    notes4Name: string
  }
  
  export interface Biography {
    value: string
    public: string
  }
  
  export interface Type2 {
    value: string
    subtype: string
    swarm: string
    custom: string
  }
  
  export interface Xp {
    value: number
  }
  
  export interface Class {}
  
  export interface Traits {
    size: string
    di: Di
    dr: Dr
    dv: Dv
    ci: Ci
    languages: Languages
  }
  
  export interface Di {
    value: string[]
    bypasses: string[]
    custom: string
  }
  
  export interface Dr {
    value: string[]
    bypasses: string[]
    custom: string
  }
  
  export interface Dv {
    value: string[]
    bypasses: string[]
    custom: string
  }
  
  export interface Ci {
    value: string[]
    custom: string
  }
  
  export interface Languages {
    value: string[]
    custom: string
  }
  
  export interface Currency {
    pp: number
    gp: number
    ep: number
    sp: number
    cp: number
  }
  
  export interface Skills {
    additionalProp1: AdditionalProp1
    additionalProp2: AdditionalProp2
    additionalProp3: AdditionalProp3
  }
  
  export interface AdditionalProp1 {
    ability: string
    bonus: string
    value: number
    mod: string
    total: number
    prof: number
    bonuses: Bonuses8
    passive: number
  }
  
  export interface Bonuses8 {
    check: string
    passive: string
  }
  
  export interface AdditionalProp2 {
    ability: string
    bonus: string
    value: number
    mod: string
    total: number
    prof: number
    bonuses: Bonuses9
    passive: number
  }
  
  export interface Bonuses9 {
    check: string
    passive: string
  }
  
  export interface AdditionalProp3 {
    ability: string
    bonus: string
    value: number
    mod: string
    total: number
    prof: number
    bonuses: Bonuses10
    passive: number
  }
  
  export interface Bonuses10 {
    check: string
    passive: string
  }
  
  export interface Spells {
    spell1: Spell1
    spell2: Spell2
    spell3: Spell3
    spell4: Spell4
    spell5: Spell5
    spell6: Spell6
    spell7: Spell7
    spell8: Spell8
    spell9: Spell9
    pact: Pact
    spell0: Spell0
  }
  
  export interface Spell1 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell2 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell3 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell4 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell5 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell6 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell7 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell8 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell9 {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Pact {
    value: number
    override: string
    max: number
    level: number
  }
  
  export interface Spell0 {
    value: number
    max: number
  }
  
  export interface Bonuses11 {
    mwak: Mwak
    rwak: Rwak
    msak: Msak
    rsak: Rsak
    abilities: Abilities2
    spell: Spell
  }
  
  export interface Mwak {
    attack: string
    damage: string
  }
  
  export interface Rwak {
    attack: string
    damage: string
  }
  
  export interface Msak {
    attack: string
    damage: string
  }
  
  export interface Rsak {
    attack: string
    damage: string
  }
  
  export interface Abilities2 {
    check: string
    save: string
    skill: string
  }
  
  export interface Spell {
    dc: string
  }
  
  export interface Resources {
    legact: Legact
    legres: Legres
    lair: Lair
  }
  
  export interface Legact {
    value: number
    max: number
  }
  
  export interface Legres {
    value: number
    max: number
  }
  
  export interface Lair {
    value: boolean
    initiative: number
  }
  
  export interface Ownership2 {
    additionalProp1: number
    additionalProp2: number
    additionalProp3: number
  }
  
  export interface PrototypeToken {
    name: string
    displayName: number
    actorLink: boolean
    width: number
    height: number
    lockRotation: boolean
    rotation: number
    disposition: number
    displayBars: number
    bar1: Bar1
    bar2: Bar2
    flags: Flags3
    randomImg: boolean
    alpha: number
    light: Light
    texture: Texture
    sight: Sight
    detectionModes: string[]
  }
  
  export interface Bar1 {
    attribute: string
  }
  
  export interface Bar2 {
    attribute: string
  }
  
  export interface Flags3 {}
  
  export interface Light {
    alpha: number
    angle: number
    bright: number
    coloration: number
    dim: number
    luminosity: number
    saturation: number
    contrast: number
    shadows: number
    animation: Animation
    darkness: Darkness
    color: string
    attenuation: number
  }
  
  export interface Animation {
    speed: number
    intensity: number
    type: string
    reverse: boolean
  }
  
  export interface Darkness {
    min: number
    max: number
  }
  
  export interface Texture {
    src: string
    tint: string
    scaleX: number
    scaleY: number
    offsetX: number
    offsetY: number
    rotation: number
  }
  
  export interface Sight {
    angle: number
    enabled: boolean
    range: number
    brightness: number
    visionMode: string
    color: string
    attenuation: number
    saturation: number
    contrast: number
  }
  
  export interface Stats2 {
    systemId: string
    systemVersion: string
    coreVersion: string
    createdTime: string
    modifiedTime: number
    lastModifiedBy: string
  }
  