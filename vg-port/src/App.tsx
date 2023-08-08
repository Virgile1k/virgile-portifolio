// @ts-nocheck
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Routes from './routes/index';

function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djk0jm7kg'
    }
  });

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;