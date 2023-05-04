import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TabList from './components/TabList';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar align="center">
          <Typography align="center" variant="h6">
            Ompun ja Ranen kauppa
          </Typography>
        </Toolbar>
      </AppBar>
        <TabList />
    </div>
  );
}

export default App;
