import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';
import RatingStarsInput from '@/components/RatingStarsInput';

// shadcn/ui Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Icons from lucide-react
import { MapPin, Clock } from 'lucide-react';

// --- Placeholder Data ---
const restaurantDetails = {
  name: "Nonna's Italian Kitchen",
  imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
  cuisine: "Italian",
  rating: 4.5,
  reviewCount: 250,
  address: "123 Pasta Lane, Flavor Town, USA",
  hours: "Mon-Sun: 11:00 AM - 10:00 PM",
};

const menuItems = {
  appetizers: [
    { id: 1, name: "Bruschetta", description: "Toasted bread with fresh tomatoes, garlic, and basil.", price: 8.99, imageUrl: "https://images.unsplash.com/photo-1505253716362-afb74bf50c74?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, name: "Calamari Fritti", description: "Lightly breaded and fried calamari served with marinara sauce.", price: 12.50, imageUrl: "https://images.unsplash.com/photo-1625944101429-041a65727341?q=80&w=1974&auto=format&fit=crop" },
  ],
  mainCourses: [
    { id: 3, name: "Spaghetti Carbonara", description: "Classic pasta with pancetta, egg, and parmesan cheese.", price: 16.00, imageUrl: "https://images.unsplash.com/photo-1588013273468-31508b946d4d?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, name: "Margherita Pizza", description: "Simple and delicious with tomato, mozzarella, and basil.", price: 14.00, imageUrl: "https://images.unsplash.com/photo-1598021680133-eb3a167a5434?q=80&w=1964&auto=format&fit=crop" },
    { id: 5, name: "Chicken Parmesan", description: "Breaded chicken breast topped with marinara and mozzarella.", price: 18.50, imageUrl: "https://images.unsplash.com/photo-1632778149955-e83f0ce0e7a5?q=80&w=1932&auto=format&fit=crop" },
  ],
  drinks: [
      { id: 6, name: "Italian Soda", description: "Refreshing sparkling water with your choice of flavored syrup.", price: 4.50, imageUrl: "https://images.unsplash.com/photo-1543253748-5bf14aabc370?q=80&w=1964&auto=format&fit=crop" },
  ]
};

const reviews = [
  { id: 1, user: "Alice", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a", rating: 5, comment: "Absolutely authentic and delicious! The Carbonara was to die for. Will definitely be back." },
  { id: 2, user: "Bob", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b", rating: 4, comment: "Great food and friendly staff. The pizza was a bit greasy, but overall a wonderful experience." },
  { id: 3, user: "Charlie", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704c", rating: 5, comment: "The best Italian food in town. Highly recommend the Bruschetta appetizer!" },
];

const RestaurantDetailPage = () => {
    // State for the new review form
    const [newReviewRating, setNewReviewRating] = React.useState(0);
    const [newReviewComment, setNewReviewComment] = React.useState("");

    console.log('RestaurantDetailPage loaded');

    const handleQuantityChange = (itemId: string | number, newQuantity: number) => {
        console.log(`Item ${itemId} quantity changed to ${newQuantity}`);
        // In a real app, this would update a global cart state
    };
    
    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ rating: newReviewRating, comment: newReviewComment });
        // In a real app, this would submit the review to a backend
        alert("Review submitted! (This is a placeholder)");
        setNewReviewRating(0);
        setNewReviewComment("");
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />

            <main className="container mx-auto py-8 px-4">
                {/* Restaurant Banner Image */}
                <div className="h-64 md:h-80 rounded-lg overflow-hidden mb-6 shadow-lg">
                    <img src={restaurantDetails.imageUrl} alt={restaurantDetails.name} className="w-full h-full object-cover" />
                </div>

                {/* Restaurant Info Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight">{restaurantDetails.name}</h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{restaurantDetails.address}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{restaurantDetails.hours}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                         <RatingStarsInput value={restaurantDetails.rating} onChange={() => {}} disabled={true} />
                         <span className="text-sm text-muted-foreground">({restaurantDetails.reviewCount} reviews)</span>
                         <Badge>{restaurantDetails.cuisine}</Badge>
                         <Badge variant="secondary">Free Delivery</Badge>
                    </div>
                </div>

                {/* Menu and Reviews Tabs */}
                <Tabs defaultValue="menu" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                        <TabsTrigger value="menu">Menu</TabsTrigger>
                        <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    </TabsList>

                    {/* Menu Content */}
                    <TabsContent value="menu" className="mt-6">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Appetizers</h2>
                                <div className="grid gap-4">
                                    {menuItems.appetizers.map(item => <MenuItemCard key={item.id} {...item} onQuantityChange={handleQuantityChange} />)}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Main Courses</h2>
                                <div className="grid gap-4">
                                    {menuItems.mainCourses.map(item => <MenuItemCard key={item.id} {...item} onQuantityChange={handleQuantityChange} />)}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Drinks</h2>
                                <div className="grid gap-4">
                                    {menuItems.drinks.map(item => <MenuItemCard key={item.id} {...item} onQuantityChange={handleQuantityChange} />)}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Reviews Content */}
                    <TabsContent value="reviews" className="mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                           <div className="space-y-6">
                                <h2 className="text-2xl font-semibold">What people are saying</h2>
                                {reviews.map(review => (
                                    <Card key={review.id}>
                                        <CardContent className="p-4 flex gap-4 items-start">
                                            <Avatar>
                                                <AvatarImage src={review.avatar} alt={review.user} />
                                                <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <p className="font-semibold">{review.user}</p>
                                                <RatingStarsInput value={review.rating} onChange={() => {}} disabled={true} size={16} className="my-1"/>
                                                <p className="text-sm text-muted-foreground">{review.comment}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                           </div>
                           <div>
                               <Card>
                                   <CardHeader><CardTitle>Leave a Review</CardTitle></CardHeader>
                                   <CardContent>
                                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Your Rating</label>
                                                <RatingStarsInput value={newReviewRating} onChange={setNewReviewRating} />
                                            </div>
                                            <div>
                                                <label htmlFor="comment" className="text-sm font-medium mb-2 block">Your Comment</label>
                                                <Textarea id="comment" placeholder="Tell us about your experience..." value={newReviewComment} onChange={(e) => setNewReviewComment(e.target.value)} />
                                            </div>
                                            <Button type="submit">Submit Review</Button>
                                        </form>
                                   </CardContent>
                               </Card>
                           </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

            <Footer />
        </div>
    );
};

export default RestaurantDetailPage;