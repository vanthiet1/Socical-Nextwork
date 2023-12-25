import publicRoutes from "./routes/routes";
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                <route.component />
                                }
                            >
                            </Route>
                        )
                    })}
                </Routes>
            </div>
        </>
    );
};

export default App;