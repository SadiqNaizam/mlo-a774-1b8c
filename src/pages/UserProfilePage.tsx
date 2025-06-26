import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Icons
import { Pencil, Trash2, PlusCircle, CreditCard, Home, Utensils } from 'lucide-react';

// Placeholder Data
const orderHistory = [
  { id: '#FE1293', restaurant: 'Mama Mia Pizzeria', date: '2023-10-26', total: '$25.50', status: 'Delivered' },
  { id: '#FE1285', restaurant: 'Sushi Central', date: '2023-10-22', total: '$42.10', status: 'Delivered' },
  { id: '#FE1279', restaurant: 'Burger Barn', date: '2023-10-18', total: '$18.00', status: 'Cancelled' },
  { id: '#FE1301', restaurant: 'Taco Town', date: '2023-10-28', total: '$22.75', status: 'Processing' },
];

const savedAddresses = [
    { type: 'Home', address: '123 Maple Street, Springfield, USA', icon: <Home className="w-5 h-5 text-muted-foreground"/> },
    { type: 'Work', address: '456 Oak Avenue, Springfield, USA', icon: <Utensils className="w-5 h-5 text-muted-foreground"/> },
];

const paymentMethods = [
    { type: 'Visa', last4: '1234', expiry: '08/26' },
    { type: 'MasterCard', last4: '5678', expiry: '12/24' },
];

const UserProfilePage = () => {
    console.log('UserProfilePage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-muted/20">
            <Header />
            <main className="flex-1 container mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">My Account</h1>
                <Tabs defaultValue="profile" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="addresses">Addresses</TabsTrigger>
                        <TabsTrigger value="payment">Payment</TabsTrigger>
                        <TabsTrigger value="history">Order History</TabsTrigger>
                    </TabsList>
                    
                    {/* Profile Tab */}
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                                <CardDescription>Update your photo and personal details here.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4">
                                     <Avatar className="h-20 w-20">
                                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <Button variant="outline">Change Photo</Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" defaultValue="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue="johndoe@example.com" disabled />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Addresses Tab */}
                    <TabsContent value="addresses">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Saved Addresses</CardTitle>
                                    <CardDescription>Manage your shipping and billing addresses.</CardDescription>
                                </div>
                                <Button variant="outline" size="sm">
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Address
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {savedAddresses.map((addr, index) => (
                                    <div key={index} className="border p-4 rounded-lg flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {addr.icon}
                                            <div>
                                                <p className="font-semibold">{addr.type}</p>
                                                <p className="text-sm text-muted-foreground">{addr.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Payment Methods Tab */}
                    <TabsContent value="payment">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>Payment Methods</CardTitle>
                                    <CardDescription>Manage your saved payment methods.</CardDescription>
                                </div>
                                 <Button variant="outline" size="sm">
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Card
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                               {paymentMethods.map((method, index) => (
                                    <div key={index} className="border p-4 rounded-lg flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <CreditCard className="w-5 h-5 text-muted-foreground"/>
                                            <div>
                                                <p className="font-semibold">{method.type} ending in {method.last4}</p>
                                                <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                             <Button variant="ghost" size="icon"><Pencil className="h-4 w-4" /></Button>
                                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600"><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Order History Tab */}
                    <TabsContent value="history">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order History</CardTitle>
                                <CardDescription>View your past orders and their status.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Order ID</TableHead>
                                            <TableHead>Restaurant</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Total</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {orderHistory.map((order) => (
                                            <TableRow key={order.id}>
                                                <TableCell className="font-medium">{order.id}</TableCell>
                                                <TableCell>{order.restaurant}</TableCell>
                                                <TableCell>{order.date}</TableCell>
                                                <TableCell>{order.total}</TableCell>
                                                <TableCell>
                                                    <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Processing' ? 'secondary' : 'destructive'}>
                                                        {order.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button variant="outline" size="sm">View Details</Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </main>
            <Footer />
        </div>
    );
};

export default UserProfilePage;