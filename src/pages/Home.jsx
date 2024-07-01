import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import MasonryContainer from "../components/MasonryContainer";
import MasonryItem from "../components/MasonryItem";
import '../assets/fonts/Icomoon/style.css';
import Codeblock from "../components/Codeblock.jsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion.jsx"
  
const Home = () => {
    return <>
        <Header />
        <div dir="rtl" className="w-full mt-10 text-white/70 font-bold text-2xl text-center">
            برگه‌تقلب‌ Tailwind
        </div>
        <SearchInput />
        
        <MasonryContainer>
            <MasonryItem title="فلکس">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>آرتیسان</AccordionTrigger>
                    <AccordionContent>
                        <p>آرتیسان یک رابط خط فرمان است که در لاراول استفاده شده است.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>دستورات امنیتی</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" isBarHidden={true}>
                    <AccordionTrigger>تمپلیت‌انجین</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </MasonryItem>
            <MasonryItem title="فلکس">
                <p className="pt-2">
                Blade یک تمپلیت انجین ساده و درعین حال قدرتمند است که در لاراول گنجانده شده است.
                </p>
                
                <Codeblock language="php">
                {`
                echo "php";
                echo "php"; 
                echo "php";
                `}
                </Codeblock>
            </MasonryItem>
        </MasonryContainer>
    </>
}

export default Home;