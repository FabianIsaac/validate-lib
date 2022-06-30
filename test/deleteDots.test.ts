import { deleteDots } from '../src';

describe('deleteDots', () => {
  it('Eliminar los puntos', () => {
    expect(deleteDots('93.369.868-8')).toEqual('93369868-8');
  });
});
