import React, {Suspense} from 'react'
import About from '../About/About'

const Content = React.lazy(() => import('../Content/Content'))

export default function Home() {
    return (
        <>
        <About/>
        <Suspense fallback={<div>chargement...</div>}>
            <Content/>
        </Suspense>
        </>
    )
}
