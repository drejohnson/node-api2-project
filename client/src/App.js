import React from "react";
import theme from "./theme";
import { ThemeProvider } from "emotion-theming";

import PostList from "./components/PostList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PostList />
      </div>
    </ThemeProvider>
  );
}

export default App;
