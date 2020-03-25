import Deamon from '../Deamon';
import Magician from '../Magician';

test('простая атака Magician', () => {
  const expected = 100;
  const mag = new Magician('Magician');
  mag.distance = 1;
  const received = mag.attack;
  expect(received).toBe(expected);
});

test('Атака на расстоянии 4 клетки', () => {
  const expected = 70;
  const deamon = new Deamon('Deamon');
  deamon.distance = 4;
  const received = deamon.attack;
  expect(received).toBe(expected);
});

test('Атака с stoned  на расстоянии 2 клетки', () => {
  const expected = 85;
  const deamon = new Deamon('Deamon');
  deamon.distance = 2;
  deamon.stoned = true;
  const received = deamon.attack;
  expect(received).toBe(expected);
});
