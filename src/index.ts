export const validateRut = (rut: any): boolean => {
  if (typeof rut !== 'string' && typeof rut !== 'number') {
    throw new Error('El tipo de dato es incorrecto');
  }

  let { rutSinDv, dVRut } = prepareRut(rut);
  return getDvRut(rutSinDv) === dVRut.toLocaleLowerCase();
};
export const clearRut = (rut: string): string => rut.replace(/[^0-9a-z]/gi, '');
const prepareRut = (rut: string | number) => {
  const rutLimpio = (typeof rut === 'string' && clearRut(rut)) || '' + rut;
  const rutSinDv = rutLimpio.slice(0, -1);
  const dVRut = rutLimpio.split('').slice(-1)[0];
  return { rutLimpio, rutSinDv, dVRut };
};
const getDvRut = (rut: string): string => {
  const rRut = rut
    .split('')
    .map(v => parseInt(v))
    .reverse();
  let result = 0;

  for (let i = 0, j = 2; i < rRut.length; i++, j < 7 ? j++ : (j = 2)) {
    result += rRut[i] * j;
  }
  result = 11 - (result % 11);
  if (result === 11) return '0';
  if (result === 10) return 'k';
  return '' + result;
};
export const deleteDots = (rut: string): string => rut.replace(/\./g, '');
export const deleteDash = (rut: string): string => rut.replace(/-/g, '');
