import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/App'
import { store } from '@/features/store'
import { createRoot } from 'react-dom/client'

// import '../firebese'
import '@/styles/index.scss'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
