// import Details_Page from "./components/Details_Page";
import BasicDetailsPage from "./components/BasicDetailsPage";
import TopicSelectionPage from "./components/TopicSelection";
import { Routes, Route } from "react-router-dom";

function App() {
  return <Routes>
    <Route path='/' element={<BasicDetailsPage />} />
    <Route path='/TopicSelectionPage' element={<TopicSelectionPage />} />
  </Routes>
}

export default App;
