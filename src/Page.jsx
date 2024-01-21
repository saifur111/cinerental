import MovieContainer from "./cine/MovieContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieContainer />
                </div>
            </main>
            <Footer />

        </>
    )
}
