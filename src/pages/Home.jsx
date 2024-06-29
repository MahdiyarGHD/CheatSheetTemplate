import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import '../assets/fonts/Icomoon/style.css';

const Home = () => {
    return <>
        <Header />
        <div dir="rtl" className="w-full mt-10 text-white/70 font-bold text-2xl text-center">
            برگه‌تقلب‌ Tailwind
        </div>
        <SearchInput />
    </>
}

export default Home;