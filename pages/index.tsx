import { ChangeEvent,  useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import fs from 'fs';
import path from 'path';

import { FlotingButtonFilter } from '@/components/floatingButtonFilter'
import { ListProducts } from '@/components/listProducts/ListProducts'
import { NavFooter } from '@/components/navFooter'
import { SecurityPolitics } from '@/components/securityPolitics'
import { Layout } from '@/components/ui/Layout'
import { WeCanHelpYou } from '@/components/weCanHelpYou/WeCanHelpYou'
import { WineRedirect } from '@/components/wineRedirect'
import { IProduct, IProducts } from '@/interface/IProduct'
import { Modal } from '@/components/modal/Modal'
import { Filter } from '@/components/filter'




interface IProps{
  data: IProducts
}

export default function Home({data}: IProps) {

  const [showModal, setShowModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Array<number>>([]);
  const [productFilters, setProductFilters] = useState<IProduct[]>([])

  useEffect(() => {
    const filters: Array<number> = JSON.parse(localStorage.getItem('filters') || '[]');
    const products = data.products.filter((product) =>
    filters.some((filter) => filter === product.filterId)
  );
    setSelectedFilters(filters);
    setProductFilters(products)
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const numberValue = Number(value);
    setSelectedFilters((prevFilters) => {
      if (checked) {
        localStorage.setItem('filters', JSON.stringify([...prevFilters, numberValue]));
        return [...prevFilters, numberValue];
      } else {
        localStorage.setItem('filters', JSON.stringify(prevFilters.filter((filter) => filter !== numberValue)));
        return prevFilters.filter((filter) => filter !== numberValue);
      }
    });
  };

  const handleClick = () => {
    const filteredProducts = data.products.filter((product) =>
      selectedFilters.some((filter) => filter === product.filterId)
    );
    setProductFilters(filteredProducts)
    onClose()
  };

  const onClose = () =>{
    setShowModal(false)
  }
  const cleanFilter = () =>{
    setSelectedFilters([])
    setProductFilters([])
    localStorage.removeItem('filters')
  }


  return (
    <Layout>
     {
      productFilters !== undefined && productFilters.length > 0 ? (
          <div style={{ marginBottom: '80px'}}>
            <ListProducts items={productFilters} />
            <FlotingButtonFilter setShowModal={setShowModal} />
            <Modal showModal={showModal} onClose={onClose}>
              <Filter 
                cleanFilter={cleanFilter} 
                handleClick={handleClick} 
                selectedFilters={selectedFilters} 
                handleChange={handleChange}
              />
            </Modal>
          </div>
      ):
      (
        <>
          <ListProducts data={data} />
          <WineRedirect />
          <WeCanHelpYou />
          <NavFooter />
          <SecurityPolitics />
          <FlotingButtonFilter setShowModal={setShowModal}/>
          <Modal showModal={showModal} onClose={onClose}>
            <Filter
              cleanFilter={cleanFilter} 
              handleClick={handleClick} 
              selectedFilters={selectedFilters} 
              handleChange={handleChange}
            />
          </Modal>
        </>
      )
     }
    </Layout>
  )
}

export const getStaticProps:GetStaticProps<{ data: IProducts }> = async () => {

  const filePath = path.join(process.cwd(), 'data', 'products.json');

  const fileContent = fs.readFileSync(filePath, 'utf-8');


  const data = JSON.parse(fileContent);


  return{
    props:{
      data
    }
  }
}