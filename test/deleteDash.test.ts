import { deleteDash } from '../src';

describe('deleteDash', () => {
  it('Eliminar el guion', () => {
    expect(deleteDash('93369868-8')).toEqual('933698688');
  });
});
