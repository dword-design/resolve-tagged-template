import resolveTaggedTemplate from 'resolve-tagged-template'
import expect from 'expect'

export default () => {
  expect(resolveTaggedTemplate(['foo'])).toEqual('foo')
  expect(resolveTaggedTemplate(['foo', ''], 1)).toEqual('foo1')
  expect(resolveTaggedTemplate(['', 'foo'], 3)).toEqual('3foo')
  expect(resolveTaggedTemplate(['foo', 'bar'], 1)).toEqual('foo1bar')
  expect(resolveTaggedTemplate(['foo', 'bar', ''], 1, 2)).toEqual('foo1bar2')
}
