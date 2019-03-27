# es6-string-utils

Javascript utilities

# installation

Run `yarn add es6-string-utils` or `npm install es6-string-utils`

## usages

### 1. interpolateString

```
   import { interpolateString } from 'es6-string-utils';

   const rawString = 'Welcome [Person.name.first] from [Person.city] !!!';

   const locale = { Person: { name: { first: 'Raj' }, city: 'New Delhi' } };

   const parsedString = interpolateString(rawString, locale);

   console.log(parsedString);

   // Welcome Raj from New Delhi !!!

```
