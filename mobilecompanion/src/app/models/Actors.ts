export interface Actors {
    id: string
    name: string
    type: string
    img: string
    items: Item[]
    effects: Effect2[]
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
    effects: Effect[]
    folder: any
    sort: number
    flags: Flags
    system: System
    ownership: Ownership
    stats: Stats
}

export interface Effect {
    label: any[]
    icon: any[]
    changes: any[][][][]
    disabled: any[]
    duration: any[][][]
    origin: any[]
    tint: any[]
    transfer: any[]
    flags: any[][][][][]
    _id: any[]
}

export interface Flags { }

export interface System {
    description: Description
    source: string
    activation?: Activation
    duration?: Duration
    cover: any
    target?: Target
    range?: Range
    uses?: Uses
    consume?: Consume
    ability?: string
    actionType?: string
    attackBonus?: string
    chatFlavor?: string
    critical?: Critical
    damage?: Damage
    formula?: string
    save?: Save
    type?: Type
    requirements?: string
    recharge?: Recharge
    attunement?: number
    quantity?: number
    weight?: number
    price?: Price
    equipped?: boolean
    rarity?: string
    identified?: boolean
    armor?: Armor
    hp?: Hp
    weaponType?: string
    baseItem?: string
    properties?: Properties
    proficient?: boolean
}

export interface Description {
    value: string
    chat: string
    unidentified: string
}

export interface Activation {
    type: string
    cost?: number
    condition: string
}

export interface Duration {
    value: string
    units: string
}

export interface Target {
    value?: number
    width: any
    units: string
    type: string
}

export interface Range {
    value?: number
    long?: number
    units: string
}

export interface Uses {
    value?: number
    max: string
    per?: string
    recovery: string
    type: any
}

export interface Consume {
    type: string
    target?: string
    amount?: number
}

export interface Critical {
    threshold: any
    damage: string
}

export interface Damage {
    parts: string[][]
    versatile: string
    value: any
}

export interface Save {
    ability: string
    dc?: number
    scaling: string
    value: any
}

export interface Type {
    value: string
    subtype: string
}

export interface Recharge {
    value: any
    charged: boolean
}

export interface Price {
    value: any[]
    denomination: any[]
}

export interface Armor {
    value?: number
}

export interface Hp {
    value: number
    max: number
    dt: any
    conditions: string
}

export interface Properties { }

export interface Ownership {
    default: number
}

export interface Stats {
    systemId: string
    systemVersion: string
    coreVersion: string
    createdTime: number
    modifiedTime: number
    lastModifiedBy: string
}

export interface Effect2 {
    label: any[]
    icon: any[]
    changes: any[][][][]
    disabled: any[]
    duration: any[][][]
    origin: any[]
    tint: any[]
    transfer: any[]
    flags: any[][][][][]
    _id: any[]
}

export interface Flags2 {
    core: any
    scenePacker: ScenePacker
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
    bonuses: Bonuses25
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
    min: any
    mod: any
    save: any
    prof: any
    saveBonus: any
    checkBonus: any
    dc: any
}

export interface Bonuses {
    check: string
    save: string
}

export interface Dex {
    value: number
    proficient: number
    bonuses: Bonuses2
    min: any
    mod: any
    save: any
    prof: any
    saveBonus: any
    checkBonus: any
    dc: any
}

export interface Bonuses2 {
    check: string
    save: string
}

export interface Con {
    value: number
    proficient: number
    bonuses: Bonuses3
    min: any
    mod: any
    save: any
    prof: any
    saveBonus: any
    checkBonus: any
    dc: any
}

export interface Bonuses3 {
    check: string
    save: string
}

export interface Int {
    value: number
    proficient: number
    bonuses: Bonuses4
    min: any
    mod: any
    save: any
    prof: any
    saveBonus: any
    checkBonus: any
    dc: any
}

export interface Bonuses4 {
    check: string
    save: string
}

export interface Wis {
    value: number
    proficient: number
    bonuses: Bonuses5
    min: any
    mod: any
    save: any
    prof: any
    saveBonus: any
    checkBonus: any
    dc: any
}

export interface Bonuses5 {
    check: string
    save: string
}

export interface Cha {
    value: number
    proficient: number
    bonuses: Bonuses6
    min: any
    mod: any
    save: any
    prof: any
    saveBonus: any
    checkBonus: any
    dc: any
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
    prof: any
    spelldc: any
    spellLevel: any
    encumbrance: any
}

export interface Ac {
    flat: any
    calc: string
    formula: string
    min: any
}

export interface Hp2 {
    value: number
    max: any
    temp: any
    tempmax: any
    formula: any
    min: any
}

export interface Init {
    ability: string
    bonus: string
    value: any
    mod: any
    total: any
    prof: any
    bonuses: any
    passive: any
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

export interface Details {
    biography: Biography
    alignment: string
    race: string
    type: any
    environment: any
    cr: any
    spellLevel: any
    source: any
    xp: Xp
    class: any
    gender: any
    age: any
    height: any
    weight: any
    eyes: any
    skin: any
    hair: any
    notes1Name: any
    notes2Name: any
    notes3Name: any
    notes4Name: any
}

export interface Biography {
    value: string
    public: string
}

export interface Xp {
    value: number
}

export interface Traits {
    size: string
    di: Di
    dr: Dr
    dv: Dv
    ci: Ci
    languages: Languages
}

export interface Di {
    value: any[]
    bypasses: any[]
    custom: string
}

export interface Dr {
    value: any[]
    bypasses: any[]
    custom: string
}

export interface Dv {
    value: any[]
    bypasses: any[]
    custom: string
}

export interface Ci {
    value: any[]
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
    acr: Acr
    ani: Ani
    arc: Arc
    ath: Ath
    dec: Dec
    his: His
    ins: Ins
    itm: Itm
    inv: Inv
    med: Med
    nat: Nat
    prc: Prc
    prf: Prf
    per: Per
    rel: Rel
    slt: Slt
    ste: Ste
    sur: Sur
}

export interface Acr {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses7
    passive: any
}

export interface Bonuses7 {
    check: string
    passive: string
}

export interface Ani {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses8
    passive: any
}

export interface Bonuses8 {
    check: string
    passive: string
}

export interface Arc {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses9
    passive: any
}

export interface Bonuses9 {
    check: string
    passive: string
}

export interface Ath {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses10
    passive: any
}

export interface Bonuses10 {
    check: string
    passive: string
}

export interface Dec {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses11
    passive: any
}

export interface Bonuses11 {
    check: string
    passive: string
}

export interface His {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses12
    passive: any
}

export interface Bonuses12 {
    check: string
    passive: string
}

export interface Ins {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses13
    passive: any
}

export interface Bonuses13 {
    check: string
    passive: string
}

export interface Itm {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses14
    passive: any
}

export interface Bonuses14 {
    check: string
    passive: string
}

export interface Inv {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses15
    passive: any
}

export interface Bonuses15 {
    check: string
    passive: string
}

export interface Med {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses16
    passive: any
}

export interface Bonuses16 {
    check: string
    passive: string
}

export interface Nat {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses17
    passive: any
}

export interface Bonuses17 {
    check: string
    passive: string
}

export interface Prc {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses18
    passive: any
}

export interface Bonuses18 {
    check: string
    passive: string
}

export interface Prf {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses19
    passive: any
}

export interface Bonuses19 {
    check: string
    passive: string
}

export interface Per {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses20
    passive: any
}

export interface Bonuses20 {
    check: string
    passive: string
}

export interface Rel {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses21
    passive: any
}

export interface Bonuses21 {
    check: string
    passive: string
}

export interface Slt {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses22
    passive: any
}

export interface Bonuses22 {
    check: string
    passive: string
}

export interface Ste {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses23
    passive: any
}

export interface Bonuses23 {
    check: string
    passive: string
}

export interface Sur {
    ability: string
    bonus: any
    value: number
    mod: any
    total: any
    prof: any
    bonuses: Bonuses24
    passive: any
}

export interface Bonuses24 {
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
    spell0: any
}

export interface Spell1 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell2 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell3 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell4 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell5 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell6 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell7 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell8 {
    value: number
    override: any
    max: any
    level: any
}

export interface Spell9 {
    value: number
    override: any
    max: any
    level: any
}

export interface Pact {
    value: number
    override: any
    max: any
    level: any
}

export interface Bonuses25 {
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
    legact: any
    legres: any
    lair: any
}

export interface Ownership2 {
    default: number
    M4ktKsyE0imAeVzy: number
    mLFXWp36tlqI3YFC: number
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
    detectionModes: any[]
}

export interface Bar1 {
    attribute: string
}

export interface Bar2 {
    attribute: any
}

export interface Flags3 { }

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
    color: any
    attenuation: number
}

export interface Animation {
    speed: number
    intensity: number
    type: any
    reverse: boolean
}

export interface Darkness {
    min: number
    max: number
}

export interface Texture {
    src: string
    tint: any
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
    color: any
    attenuation: number
    saturation: number
    contrast: number
}

export interface Stats2 {
    systemId: string
    systemVersion: string
    coreVersion: string
    createdTime: number
    modifiedTime: number
    lastModifiedBy: string
}
