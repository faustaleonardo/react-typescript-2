type CharacterClass = 'warror' | 'paladin' | 'wizard' | 'cleric';

type LawChaos = 'lawful' | 'neutral' | 'chaotic';
type GoodEvil = 'good' | 'neutral' | 'evil';

// type Alignment = `${LawChaos}-${GoodEvil}`
type Alignment = Exclude<
  `${LawChaos}-${GoodEvil}` | 'neutral',
  'neutral-neutral'
>;

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: Alignment;
};

// question -> how to accept neutral, but not neutral-neutral?
const steve: Character = {
  name: 'Steve',
  profession: 'wizard',
  alignment: 'neutral'
};
