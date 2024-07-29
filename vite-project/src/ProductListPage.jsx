import React, { useState ,useEffect,useMemo, useCallback} from 'react';
import ProductList from './ProductList.jsx';
import Select from './Select.jsx';
import {getProductList} from './api.js';
import NoMatching from './NoMatching.jsx';
import Loading from './Loading.jsx';
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductListPage() {
  const [productList,setProductList]=useState([]);
  const [loading,setLoading] = useState(true);
  
  useEffect(function(){
     getProductList().then(function(products){
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

      const data = useMemo(function(){
        return productList.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
                         .sort((x, y) => {
                           if (sort === 'pricelh') return x.price - y.price;
                           if (sort === 'pricehl') return y.price - x.price;
                           if (sort === 'name') return x.title.localeCompare(y.title);
                           return 0;
                         });
      }, [productList, query, sort]);


      const handleQueryChange = useCallback((event) => {
        setQuery(event.target.value);
      }, []);

      const handleSortChange = useCallback((event) => {
        setSort(event.target.value);
      }, []);

  if(loading){
    return <Loading/>;
  }

  return (
    <div className="bg-white p-4 sm:p-20 mx-auto max-w-6xl px-9 py-12.5 my-16 ">
      <div className="flex flex-col sm:flex-row justify-between">
        <input
          placeholder="🔍Search"
          value={query}
          className="border border-gray-700 rounded-md mb-2 px-1 mr-2 sm:mr-0 sm:ml-3 w-full sm:w-auto"
          onChange={handleQueryChange}
        />
        <div className="text-right sm:text-left w-full sm:w-auto ">
          <Select value={sort} onChange={handleSortChange} className="w-full sm:w-auto " />
        </div>
      </div>
      {data.length>0 && <ProductList products={data} />}
      {data.length==0 && <NoMatching />}
      <div className="flex flex-row gap-0.5">
        <button className="bg-primary-dark text-white p-2 mt-5"> 1</button>
         <button className="border border-primary-light text-primary-light p-2 mt-5"> 2</button>
        <button className=" p-2 mt-5 border border-primary-light"> <IoIosArrowRoundForward className=" text-primary-light"/> </button>
      </div>
    </div>
  );
}

export default ProductListPage;
