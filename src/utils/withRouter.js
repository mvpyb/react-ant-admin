import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'

export default function withRouter( Component ) {
  function ComponentWithRouterProp( props ) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    return (
    // eslint-disable-next-line react/react-in-jsx-scope
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }
  return ComponentWithRouterProp
}
