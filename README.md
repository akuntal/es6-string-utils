# es6-string-utils

String utils which I created for my requirements

# installation

Run `yarn add es6-string-utils` or `npm install es6-string-utils`

### interpolateString

1. `import { interpolateString } from 'es6-string-utils'`

2. `const rawString = 'Welcome [Person.name.first] from [Person.city] !!!'`

3. `const locale = { Person: { name: { first: 'Raj' }, city: 'New Delhi' } };`

4. `const parsedString = interpolateString(rawString, locale);`
