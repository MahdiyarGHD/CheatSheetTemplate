import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import MasonryItem from "../components/MasonryItem";
import '../assets/fonts/Icomoon/style.css';
import Codeblock from "../components/Codeblock.jsx";
import DescriptiveCodeTable from "../components/DescriptiveCodeTable.jsx";
import Footer from "../components/Footer.jsx";
import Masonry from 'react-masonry-css'
import React, { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server'
import { isNullOrEmpty } from "../lib/utils.jsx";
import {
    Table,
    TableRow,
    TableRowItem
} from '../components/Table';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion.jsx"
  
const Home = () => {
    
    var [filterableItems, setFilterableItems] = useState([])
    useEffect(() => {
        setFilterableItems(items);
    }, [])
    
    const filterJSXByInnerHTML = (jsxArray, regexPattern) => {
        return jsxArray.filter(jsx => {
          if (React.isValidElement(jsx)) {
            const rawHTML = ReactDOMServer.renderToStaticMarkup(jsx);
            const regex = new RegExp(regexPattern, 'gi');
            return regex.test(rawHTML);
          }
          return false;
        });
      };
      
    
    const onSearchInputChange = (value) => {
        if (isNullOrEmpty(value))
            setFilterableItems(items)
        
        const filteredItems = filterJSXByInnerHTML(items, value);
        setFilterableItems(filteredItems);
    }
      
    
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        700: 1
      };
    
      const items = [
        <MasonryItem title="فلکس">
        <p className="pt-2">
            Blade یک تمپلیت انجین ساده و درعین حال قدرتمند است که در لاراول گنجانده شده است.
        </p>
        
        <Codeblock language="php">
        {`
        echo "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppphp";
        echo "php"; 
        echo "php";
        `}             
        </Codeblock>
        
        <DescriptiveCodeTable>
            <TableRow>
                <TableRowItem>
                 ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                </TableRowItem>
                <TableRowItem>
                    <Codeblock language="php">Storage::put('file.jpg', $contents);</Codeblock>
                </TableRowItem>
            </TableRow>
            <TableRow>
                <TableRowItem>
                 ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                </TableRowItem>
                <TableRowItem>
                    <Codeblock language="php">Storage::put('file.jpg', $contents);</Codeblock>
                </TableRowItem>
            </TableRow>
            <TableRow>
                <TableRowItem>
                 ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                </TableRowItem>
                <TableRowItem>
                    <Codeblock language="php">Storage::put('file.jpg', $contents);</Codeblock>
                </TableRowItem>
            </TableRow>
        </DescriptiveCodeTable>
    </MasonryItem>,
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
                        <Codeblock language="php">
                        {`
                        echo "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppphp";
                        echo "php"; 
                        echo "php";
                        `}
                        </Codeblock> 

                
                    <Table columns={["ویژگی", "کلاس"]}>
                        <TableRow>
                            <TableRowItem dir="ltr" >
                                <Codeblock hasHighlight={false}>table-layout: auto;</Codeblock>
                            </TableRowItem>
                            <TableRowItem classList="monospace">
                                <Codeblock hasHighlight={false}>table-auto</Codeblock>
                            </TableRowItem>
                        </TableRow>
                        <TableRow>
                            <TableRowItem classList='text-right'>
                            ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                            </TableRowItem>
                            <TableRowItem>
                                <Codeblock isLineNumberDisabled={true} language="php">{`Storage::put('file.jpg', $contents);`}</Codeblock>
                            </TableRowItem>
                        </TableRow>
                    </Table>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            </MasonryItem>,
        <MasonryItem title="علی">
        <p className="pt-2">
            Blade یک تمپلیت انجین ساده و درعین حال قدرتمند است که در لاراول گنجانده شده است.
        </p>
        
        <Codeblock language="php">
        {`
        echo "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppphp";
        echo "php"; 
        echo "php";
        `}             
        </Codeblock>
        
        <DescriptiveCodeTable>
            <TableRow>
                <TableRowItem>
                 ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                </TableRowItem>
                <TableRowItem>
                    <Codeblock language="php">Storage::put('file.jpg', $contents);</Codeblock>
                </TableRowItem>
            </TableRow>
            <TableRow>
                <TableRowItem>
                 ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                </TableRowItem>
                <TableRowItem>
                    <Codeblock language="php">Storage::put('file.jpg', $contents);</Codeblock>
                </TableRowItem>
            </TableRow>
            <TableRow>
                <TableRowItem>
                 ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
                </TableRowItem>
                <TableRowItem>
                    <Codeblock language="php">Storage::put('file.jpg', $contents);</Codeblock>
                </TableRowItem>
            </TableRow>
        </DescriptiveCodeTable>
    </MasonryItem>
      ];
    
    return <>
        <Header />
        <div dir="rtl" className="w-full mt-10 text-white/70 font-bold text-2xl text-center">
            برگه‌تقلب‌ Tailwind
        </div>
        <SearchInput onChange={(v) => onSearchInputChange(v.target.value)} />
        
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {filterableItems.map((o) => <div key={crypto.randomUUID()}>{o}</div>)}
        </Masonry>
        
        <Footer />
    </>
}

export default Home;