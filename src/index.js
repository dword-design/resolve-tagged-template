import { reduce } from '@dword-design/functions'

export default (strings, ...values) => strings
  |> reduce((result, string, index) => `${result}${string}${index < values.length ? values[index] : ''}`, '')
