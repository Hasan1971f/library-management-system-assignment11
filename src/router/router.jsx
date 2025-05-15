import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import AddBook from "../Pages/AddBook";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import CategoryBooks from "../Components/CategoryBooks";
import DetailsBook from "../Components/DetailsBook";
import PrivetRoute from "./PrivetRoute";
import ToggleForAllBooks from "../Components/ToggleForAllBooks";
import UpdateBook from "../Components/UpdateBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-book',
                element: <PrivetRoute><ToggleForAllBooks></ToggleForAllBooks></PrivetRoute>,
                loader: () => fetch('https://assignment11-library-management-server.vercel.app/books')

            },
            {
                path: '/add-book',
                element: <PrivetRoute><AddBook></AddBook></PrivetRoute>,
            },
            {
                path: '/borrowed-book',
                element: <PrivetRoute><BorrowedBooks></BorrowedBooks></PrivetRoute>,
            },
            {
                path: '/updatebook/:id',
                element: <UpdateBook></UpdateBook>,
                loader: ({ params }) => fetch(`https://assignment11-library-management-server.vercel.app/books/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><DetailsBook></DetailsBook></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment11-library-management-server.vercel.app/books/${params.id}`)
            },
            {
                path: '/category/:name',
                element: <PrivetRoute><CategoryBooks></CategoryBooks></PrivetRoute>,
                loader: ({ params }) => fetch(`https://assignment11-library-management-server.vercel.app/books?category=${params.name}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);

export default router