import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Accommodation, NotFound } from './pages';
import { Header, Footer } from './components';
import { Layout } from './layout';

export function Router({ data, loading, error }) {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home data={data} loading={loading} error={error} />} />
                            <Route path="/a-propos" element={<About />} />
                            {data?.map(item => (
                                <Route
                                    key={item.id}
                                    path={`/hebergement/${item.id}`}
                                    element={<Accommodation data={item} />}
                                />
                            ))}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}