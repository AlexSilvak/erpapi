// tests/example.test.ts
import { sum } from '../src/sum'; // Ajuste o caminho para apontar corretamente para src/example.ts

test('soma de 1 + 2 deve ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});
