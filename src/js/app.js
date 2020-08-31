// TODO: write your code here
const playerProfile = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};


const showSpecialAttacks = (id = '0', name = 'undefined') => {
  const { special } = playerProfile;
  const desiredAbility = special.filter((element) => (element.id === id && element.name === name));
  if (desiredAbility) return desiredAbility;
};

showSpecialAttacks(8, 'Двойной выстрел');

export { showSpecialAttacks };
