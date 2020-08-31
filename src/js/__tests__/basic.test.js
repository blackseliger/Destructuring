import { showSpecialAttacks } from '../app';

describe('check function showSpecialAttacks', () => {
  test('check return obj of array', () => {
    const expected = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ];
    const received = showSpecialAttacks(8, 'Двойной выстрел');
    expect(received).toEqual(expected);
  });
  test('check return empty desiredAbility', () => {
    const expected = [];
    const received = showSpecialAttacks(8, 'Тройной выстрел');
    expect(received).toEqual(expected);
  });
  test('check return empty desiredAbility', () => {
    const expected = [];
    const received = showSpecialAttacks();
    expect(received).toEqual(expected);
  });
});
