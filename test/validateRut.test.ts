import { validateRut } from '../src';

describe('validateRut', () => {
  it('Rut numerico valido', () => {
    expect(validateRut(933698688)).toEqual(true);
  });

  it('Rut numerico no valido', () => {
    expect(validateRut(180769834)).toEqual(false);
  });

  it('Rut alfanumerico valido', () => {
    expect(validateRut('90.384.078-1')).toEqual(true);
  });

  it('Rut alfanumerico no valido', () => {
    expect(validateRut('90.384.078-0')).toEqual(false);
  });

  it('Rut con dv 0 valido', () => {
    expect(validateRut(935767040)).toEqual(true);
  });

  it('Rut con dv k valido', () => {
    expect(validateRut('98336313k')).toEqual(true);
  });

  it('Rut 19 valido', () => {
    expect(validateRut('19')).toEqual(true);
  });

  it('Tipo de dato no valido', () => {
    expect(function() {
      validateRut({ '19': 0 });
    }).toThrow(new Error('El tipo de dato es incorrecto'));
  });
});
