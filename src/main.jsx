// Importa o StrictMode do React para ajudar a identificar problemas potenciais na aplicação
import { StrictMode } from 'react'

// Importa a função createRoot do ReactDOM para renderizar a aplicação
import { createRoot } from 'react-dom/client'

// Importa o componente principal da aplicação
import App from './App.jsx'

// Importa os estilos globais
import './index.css'

// Importa as funções necessárias para gerenciar rotas no React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importa a página específica para tarefas
import TaskPage from './pages/TaskPage.jsx'

// Define as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",         // Rota principal
    element: <App />   // Componente que será renderizado nessa rota
  },
  {
    path: "/task",      // Rota para a página de tarefas
    element: <TaskPage /> // Componente que será renderizado nessa rota
  }
])

// Renderiza a aplicação dentro da div com id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Fornece as rotas definidas para a aplicação */}
    <RouterProvider router={router} />
  </StrictMode>,
)
