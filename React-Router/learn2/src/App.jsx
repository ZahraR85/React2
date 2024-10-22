import "./App.css";
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useParams,
} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
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
            to="/product/iphone"
            className="text-gray-300 hover:text-white"
          >
            Iphone
          </Link>
          <Link
            to="/product/xbox"
            className="text-gray-300 hover:text-white"
          >
            Xbox
          </Link>
        </div>
      </div>
    </nav>
  );
};

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const DynamicContent = () => {
  const fakeProducts = [
    {
      id: 1,
      name: 'iphone',
      details: 'It is a phone',
      picture:
        'https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1695427946',
    },
    {
      id: 2,
      name: 'xbox',
      details: 'It is not a phone',
      picture:
        'https://cdn.idealo.com/folder/Product/201728/6/201728618/s1_produktbild_gross_1/microsoft-xbox-series-x-schwarz.jpg',
    },
  ];
  const { name } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    // Whenever the 'name' dynamic segment change, we can 'fetch' the product details
    setCurrentProduct(fakeProducts.find((p) => p.name === name));
    return () => setCurrentProduct(null);
  }, [name]);

  return (
    <>
      <h1 className="text-2xl text-center">Details for {name.toUpperCase()}</h1>
      {currentProduct ? (
        <div className="flex items-center">
          <img src={currentProduct.picture} width="200" />
          <p>{currentProduct.details}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="product/:name" element={<DynamicContent />} />
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;
