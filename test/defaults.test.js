var browserslist = require('../')

it('selects defaults by keywords', () => {
  expect(browserslist('defaults, ie 6'))
    .toEqual(browserslist(browserslist.defaults.concat(['ie 6'])))
})

it('selects defaults case insensitive', () => {
  expect(browserslist('Defaults')).toEqual(browserslist(browserslist.defaults))
})
