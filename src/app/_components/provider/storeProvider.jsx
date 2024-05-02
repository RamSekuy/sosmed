"use client"
import { Provider } from 'react-redux'
import { store } from '../../_redux/store'
import AuthProvider from './auth.provider'
import RouteProvider from './route.provider'

export default function StoreProvider({children}) {
    return(<>
    
        <Provider store={store}>
            <AuthProvider>
                <RouteProvider>
                {children}
                </RouteProvider>
            </AuthProvider>
        </Provider>

    </>)
}