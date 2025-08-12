
import Cokkies from 'js-cookie'
import { Navigate } from 'react-router'

export default function ProviderRoute({children}) {
    const token = Cokkies.get('jwt_token')
    console.log(token)
    if (token  === undefined){
        return <Navigate to="/login" replace/>
    }
    return children
}
