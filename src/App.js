import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import './index.css';
// import Team from "./scenes/Team";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/Contacts";
// import Bar from "./scenes/Bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie  from "./scenes/Pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/Geography";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
// import Calendar from "./scenes/Calendar";


function App() {
  const { colorMode, theme } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
        <Topbar />
        <Routes >
      <Route path ="/" element={<Dashboard />} />
      {/* <Route path ="/team" element={<Team />} /> */}
      {/* <Route path ="/invoices" element={<Invoices />} /> */}
      {/* <Route path ="/contacts" element={<Contacts />} /> */}
      {/* <Route path ="/bar" element={<Bar />} /> */}
      {/* <Route path ="/form" element={<Form />} /> */}
      {/* <Route path ="/line" element={<Line />} /> */}
      {/* <Route path ="/pie" element={<Pie />} /> */}
      {/* <Route path ="/faq" element={<FAQ />} /> */}
      {/* <Route path ="/calendar" element={<Calendar />} /> */}
      {/* <Route path ="/geography" element={<Geography />} /> */}
        </Routes>
          </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
