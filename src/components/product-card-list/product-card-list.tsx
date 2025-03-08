import ProductCard from '../product-card/product-card.tsx';
import {Goods} from '../../types/goods.ts';

type ProductCardListProps = {
  cards: Goods[];
}

export default function ProductCardList({cards}: ProductCardListProps) {
  return (
    <div className="cards catalog__cards">
      {cards.map((card) => (
        <ProductCard key={card.id} card={card} />
      ))}
    </div>
  );
}
