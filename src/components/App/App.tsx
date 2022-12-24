import { Footer, Header, Layout, Main } from "components"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}
