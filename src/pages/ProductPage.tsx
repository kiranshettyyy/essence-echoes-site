import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingBag, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { products } from '@/data/products';
import { toast } from '@/hooks/use-toast';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const averageRating = product.reviews.length > 0 
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length 
    : 0;

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedSize}) has been added to your cart.`
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Product link has been copied to clipboard."
      });
    }
  };

  const handleSubmitReview = () => {
    if (newReview.trim()) {
      toast({
        title: "Review submitted!",
        description: "Thank you for your feedback."
      });
      setNewReview('');
      setNewRating(5);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-secondary to-muted rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index 
                      ? 'border-luxury-purple' 
                      : 'border-transparent hover:border-muted-foreground'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {hasDiscount && (
                  <Badge className="bg-destructive text-destructive-foreground">
                    -{discountPercentage}% OFF
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Rating */}
            {product.reviews.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating) 
                          ? 'fill-luxury-gold text-luxury-gold' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 font-semibold">{averageRating.toFixed(1)}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews.length} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">${product.price}</span>
              {hasDiscount && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className={selectedSize === size ? "bg-luxury-purple hover:bg-luxury-purple-light" : ""}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button 
                size="lg" 
                className="flex-1 bg-luxury-purple hover:bg-luxury-purple-light"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "border-destructive text-destructive" : ""}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                <Truck className="h-5 w-5 text-luxury-purple" />
                <div>
                  <div className="font-semibold text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">Orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                <RotateCcw className="h-5 w-5 text-luxury-purple" />
                <div>
                  <div className="font-semibold text-sm">30-Day Returns</div>
                  <div className="text-xs text-muted-foreground">Money back guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                <Shield className="h-5 w-5 text-luxury-purple" />
                <div>
                  <div className="font-semibold text-sm">Authentic</div>
                  <div className="text-xs text-muted-foreground">100% genuine products</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Description & Notes */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fragrance Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-luxury-purple mb-2">Top Notes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.top.map((note) => (
                      <Badge key={note} variant="outline">{note}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-purple mb-2">Middle Notes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.middle.map((note) => (
                      <Badge key={note} variant="outline">{note}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-luxury-purple mb-2">Base Notes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.notes.base.map((note) => (
                      <Badge key={note} variant="outline">{note}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Review List */}
                <div className="space-y-4">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{review.userName}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${
                                  i < review.rating 
                                    ? 'fill-luxury-gold text-luxury-gold' 
                                    : 'text-muted-foreground'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                      <Separator />
                    </div>
                  ))}
                </div>

                {/* Write Review */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Write a Review</h4>
                  <div className="flex items-center gap-2">
                    <span>Rating:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setNewRating(i + 1)}
                          className="p-1"
                        >
                          <Star 
                            className={`h-5 w-5 ${
                              i < newRating 
                                ? 'fill-luxury-gold text-luxury-gold' 
                                : 'text-muted-foreground hover:text-luxury-gold'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Share your thoughts about this fragrance..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button 
                    onClick={handleSubmitReview}
                    className="bg-luxury-purple hover:bg-luxury-purple-light"
                  >
                    Submit Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;