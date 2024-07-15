import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from "./Pages/Dashboard";

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    primary: {
      main: "#117664",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <div className="w-screen h-screen bg-white p-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
              Overview
            </h1>
            <Dashboard />
          </div>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

