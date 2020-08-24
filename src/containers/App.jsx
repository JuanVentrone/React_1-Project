import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/intialState';

const App = () => {

  const initislState = useInitialState(API);

  return (

    <div className='App'>
      <Header />
      <Search />
      {initislState.originals.length > 0 && (

        <Categories title='Lo mas Buscado'>
          <Carousel>

            {initislState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}

          </Carousel>
        </Categories>
      )}

      <Categories title='Ofertas'>
        <Carousel>

          {initislState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}

        </Carousel>
      </Categories>

      <Categories title='Historial A.I'>
        <Carousel>
          {initislState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />
    </div>

  );
};

export default App;
