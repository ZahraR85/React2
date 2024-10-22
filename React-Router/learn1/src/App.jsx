import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'; // Import required components and functions
// This component simply renders a navigation bar
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* The Link component takes care of updating the history in the browser */}
        <Link to="/" className="text-white text-lg font-bold">
          MyApp
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/no-layout"
            className="text-gray-300 hover:text-white"
          >
            No Layout
          </Link>
        </div>
      </div>
    </nav>
  );
};
// This is a Layout component, using React's composable nature
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
           {/* The Outlet component is a placeholder for children components under this route */}
        <Outlet />
      </div>
    </>
  );
};
// These components represent individual "pages" 
const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
const Contact = () => {
  return <div>Contact</div>;
};
const NoLayout = () => {
  return (
    <>
      <div>NoLayout</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => history.back()}
      >
        Go back
      </button>
    </>
  );
};
/*
We create our router by nesting Route components in a tree-like structure
1. In this structure, the base path "/" which is the root of our app, will match and render MainLayout
2. The first route is marked as "index" which means it's the base route for that segment of the tree
3. Any change on the navigation bar, i.e. the history in the browser, will cause the router to pick a matching
route
4. If no matching route is found, an error is thrown. We can handle this error.
*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>,
    <Route path="no-layout" element={<NoLayout />} />
    </Route>,
  ),
);
// Our App component now simply returns the Router we created 
const App = () => <RouterProvider router={router} />;
export default App;