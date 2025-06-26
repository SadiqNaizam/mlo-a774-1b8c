import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTracker, { OrderStatus } from '@/components/OrderTracker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Utensils } from 'lucide-react';

const orderItems = [
    { id: '1', name: 'Margherita Pizza', price: 12.50, quantity: 1 },
    { id: '2', name: 'Garlic Bread', price: 4.00, quantity: 2 },
    { id: '3', name: 'Cola', price: 2.00, quantity: 2 },
];

const CheckoutPage: React.FC = () => {
    console.log('CheckoutPage loaded');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [currentStatus, setCurrentStatus] = useState<OrderStatus>('placed');

    const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = 3.50;
    const total = subtotal + deliveryFee;

    const handlePlaceOrder = () => {
        console.log('Order placed!');
        setOrderPlaced(true);
    };
    
    useEffect(() => {
        if (orderPlaced) {
            const statuses: OrderStatus[] = ['preparing', 'delivery', 'delivered'];
            let statusIndex = 0;
            
            const interval = setInterval(() => {
                if (statusIndex < statuses.length) {
                    setCurrentStatus(statuses[statusIndex]);
                    statusIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 3000); // Update status every 3 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [orderPlaced]);


    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-1 container py-8 md:py-12">
                {!orderPlaced ? (
                    <>
                        <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">Checkout</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column: Delivery and Payment */}
                            <div className="lg:col-span-2 space-y-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Delivery Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" defaultValue="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" defaultValue="+1 (555) 123-4567" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <Label htmlFor="address">Street Address</Label>
                                            <Input id="address" defaultValue="123 Main St" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" defaultValue="Foodville" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <Input id="zip" defaultValue="12345" />
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Payment Method</CardTitle>
                                        <CardDescription>Select your preferred payment method.</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <RadioGroup defaultValue="credit-card" className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="credit-card" id="r1" />
                                                <Label htmlFor="r1">Credit / Debit Card</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="paypal" id="r2" />
                                                <Label htmlFor="r2">PayPal</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="cod" id="r3" />
                                                <Label htmlFor="r3">Cash on Delivery</Label>
                                            </div>
                                        </RadioGroup>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column: Order Summary */}
                            <div className="lg:col-span-1">
                                <Card className="sticky top-24">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Utensils className="h-5 w-5"/>
                                            Order Summary
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            {orderItems.map(item => (
                                                <div key={item.id} className="flex justify-between text-sm">
                                                    <span>{item.quantity} x {item.name}</span>
                                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Separator />
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Delivery Fee</span>
                                                <span>${deliveryFee.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="flex justify-between font-bold text-lg">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full" size="lg" onClick={handlePlaceOrder}>
                                            Place Order
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-3xl font-bold tracking-tight mb-4">Thank you for your order!</h1>
                        <p className="text-muted-foreground mb-8">You can track the progress of your delivery below.</p>
                        <OrderTracker currentStatus={currentStatus} />
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;