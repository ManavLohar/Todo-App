import React from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import FormValidation from "./components/FormValidation/FormValidation";
// import Layout1 from "./components/Layout1";
import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Task from "./components/Task/Task";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout1 />,
//     children: [
//       {
//         path: "/",
//         element: <TodoList />,
//       },
//       {
//         path: "/contact-us",
//         element: <FormValidation />,
//       },
//     ],
//   },
// ]);

const App = () => {
  return (
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/contact-us" element={<FormValidation />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
