
import { useTitle } from 'ahooks'

export default function withTitle(Component, title = '') {
  function ComponentWithTitleProp(props) {
    title && useTitle(title)
    return (
    // eslint-disable-next-line react/react-in-jsx-scope
      <Component {...props} />
    )
  }
  return ComponentWithTitleProp
}
