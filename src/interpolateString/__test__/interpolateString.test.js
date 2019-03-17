import { interpolateString } from '../interpolateString';

const locale = {
  Person: {
    name: {
      first: 'Aadu'
    },
    age: 5
  }
};
describe('interpolateString', () => {
  it('should work with valid string', () => {
    const rawString = 'Welcome [Person.name.first] [Person.age] !!!';

    const result = 'Welcome Aadu 5 !!!';
    const expected = interpolateString(rawString, locale);
    expect(expected).toEqual(result);
  });

  it('should work with extra closing bracket', () => {
    const rawString = 'Welcome] [Person.name.first] [Person.age] !!!]';

    const result = 'Welcome] Aadu 5 !!!]';
    const expected = interpolateString(rawString, locale);
    expect(expected).toEqual(result);
  });

  it('should work with extra opening bracket', () => {
    const rawString = 'Welcome [Person.name.first] [Person.age] [Hello !!!';

    const result = 'Welcome Aadu 5 [Hello !!!';
    const expected = interpolateString(rawString, locale);
    expect(expected).toEqual(result);
  });
});
