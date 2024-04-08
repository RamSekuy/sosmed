"use client"
import { Provider } from 'react-redux'
import { store } from '../_redux/store'

export default function App({children}) {
    return(<>
    
        <Provider store={store}>
            {children}
        </Provider>

    </>)
}