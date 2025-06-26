import React from 'react';
import { PackageCheck, ChefHat, Bike, PartyPopper } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Define the possible statuses for an order
export type OrderStatus = 'placed' | 'preparing' | 'delivery' | 'delivered';

// Define the props for the OrderTracker component
interface OrderTrackerProps {
  /** The current status of the order */
  currentStatus: OrderStatus;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus }) => {
  console.log('OrderTracker loaded with status:', currentStatus);

  const steps = [
    { id: 'placed', label: 'Order Placed', icon: PackageCheck },
    { id: 'preparing', label: 'Preparing', icon: ChefHat },
    { id: 'delivery', label: 'Out for Delivery', icon: Bike },
    { id: 'delivered', label: 'Delivered', icon: PartyPopper },
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStatus);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">Track Your Order</CardTitle>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-start">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isActive = index <= currentStepIndex;

            return (
              <React.Fragment key={step.id}>
                {/* Step Item */}
                <div className="flex flex-col items-center text-center w-20 sm:w-24">
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300",
                      isActive ? "bg-green-100 border-green-600" : "bg-gray-100 border-gray-300"
                    )}
                  >
                    <step.icon
                      className={cn(
                        "w-6 h-6 transition-colors duration-300",
                        isActive ? "text-green-600" : "text-gray-400"
                      )}
                      strokeWidth={isCurrent || isCompleted ? 2.5 : 2}
                    />
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-xs sm:text-sm font-semibold break-words",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Connector Line (not after the last step) */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-1 mt-6 rounded-full transition-colors duration-500",
                      isCompleted ? "bg-green-600" : "bg-gray-200"
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracker;