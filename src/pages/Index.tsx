import HeroBanner from '@/components/HeroBanner';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-luxury bg-clip-text text-transparent">Fragrances</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium fragrances, each crafted to create unforgettable moments and lasting impressions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
