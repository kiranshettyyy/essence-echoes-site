import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const averageRating = product.reviews.length > 0 
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
    : 0;

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-2 cursor-pointer border-0 bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square relative bg-gradient-to-br from-secondary to-muted">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Discount Badge */}
            {hasDiscount && (
              <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                -{discountPercentage}%
              </Badge>
            )}

            {/* Category Badge */}
            <Badge 
              variant="secondary" 
              className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
            >
              {product.category}
            </Badge>

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-luxury-purple/20 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-luxury-gold hover:text-luxury-purple shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current text-destructive' : ''}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-luxury-purple hover:text-primary-foreground shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-6">
        <Link to={`/product/${product.id}`}>
          {/* Product Info */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg text-foreground group-hover:text-luxury-purple transition-colors">
              {product.name}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Rating */}
            {product.reviews.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(averageRating) 
                          ? 'fill-luxury-gold text-luxury-gold' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">
                ${product.price}
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Sizes */}
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <Badge key={size} variant="outline" className="text-xs">
                  {size}
                </Badge>
              ))}
            </div>
          </div>
        </Link>
      </CardContent>

      {/* Shimmer effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/10 to-transparent transform skew-x-12 transition-transform duration-1000 ${
        isHovered ? 'translate-x-full' : '-translate-x-full'
      }`} />
    </Card>
  );
};

export default ProductCard;