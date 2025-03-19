"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PlaneTakeoff,
  Users,
  Bell,
  Calendar,
  BarChart3,
  Settings,
  DollarSign,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Mock data
const revenueData = [
  { month: "Oct", revenue: 450000 },
  { month: "Nov", revenue: 520000 },
  { month: "Dec", revenue: 680000 },
  { month: "Jan", revenue: 590000 },
  { month: "Feb", revenue: 620000 },
  { month: "Mar", revenue: 710000 },
];

const upcomingFlights = [
  {
    id: 1,
    flightNumber: "G550-1",
    client: "Acme Corp",
    departure: "KTEB",
    arrival: "KSFO",
    time: "09:30 AM",
    passengers: 8,
    preferences: "Kosher meals, 72°F cabin",
  },
  {
    id: 2,
    flightNumber: "G550-2",
    client: "Global Ventures LLC",
    departure: "KPBI",
    arrival: "KJFK",
    time: "11:45 AM",
    passengers: 6,
    preferences: "Vegetarian, Spanish wines",
  },
];

const topClients = [
  { name: "Acme Corp", flights: 24, revenue: 2400000 },
  { name: "Global Ventures", flights: 18, revenue: 1800000 },
  { name: "Tech Innovations", flights: 15, revenue: 1500000 },
];

import { clients } from '../types/client';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const DashboardContent = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Fleet Status</h3>
          <p className="text-3xl font-bold">2/2</p>
          <p className="text-sm text-muted-foreground">G550s Available</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Monthly Revenue</h3>
          <p className="text-3xl font-bold">$710K</p>
          <p className="text-sm text-green-600">↑ 15% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Active Contracts</h3>
          <p className="text-3xl font-bold">6</p>
          <p className="text-sm text-muted-foreground">Corporate Clients</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* <Card className="p-6">
          <h3 className="font-semibold mb-4">Revenue Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value/1000}K`} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card> */}

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Top Clients</h3>
          <div className="space-y-4">
            {topClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-accent rounded-lg"
              >
                <div>
                  <p className="font-semibold">{client.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {client.flights} flights YTD
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(client.revenue/1000000).toFixed(1)}M</p>
                  <p className="text-sm text-muted-foreground">
                    Annual Revenue
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Upcoming Flights</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {clients.map((client) => (
              <div
                key={client.company}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-accent rounded-lg"
              >
                <div>
                  <p className="font-semibold">{client.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {client.nextFlight?.flightNumber || 'No upcoming flight'}
                  </p>
                </div>
                <div>
                  <p className="font-medium">{client.nextFlight?.departureTime}</p>
                  <p className="text-sm text-muted-foreground">
                    {client.nextFlight?.destination}
                  </p> 
                </div>
                <div>
                  <p className="text-sm font-medium">Preferences</p>
                  <p className="text-sm text-muted-foreground">
                    {client.preferences.cabin.padEnd(200)}
                    {client.preferences.dietary.join(', ').padEnd(200)}
                    {client.preferences.seating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        {(() => {
          const [buttonState, setButtonState] = useState<"default" | "success">("default");
          const [isOpen, setIsOpen] = useState(false);
          
          const handleRecipientSelect = (recipient: string) => {
            setButtonState("success");
            setIsOpen(false);
            // Reset button state after 3 seconds
            setTimeout(() => {
              setButtonState("default");
            }, 3000);
          };
          
          return (
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="w-full" 
                  variant={buttonState === "success" ? "success" : "default"}
                >
                  {buttonState === "success" ? "Message Sent!" : "Send Upcoming Flight Info"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleRecipientSelect("Flight Attendant")}>
                  Flight Attendant
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRecipientSelect("Captain")}>
                  Captain
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRecipientSelect("First Officer")}>
                  First Officer
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        })()}
      </div>
    </>
  );

  const PassengersContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Client Profiles</h2>
        <Button>Add New Client</Button>
      </div>
      
      {clients.map((client, index) => (
        <Card key={index} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{client.company}</h3>
              <p className="text-muted-foreground">{client.primaryContact}</p>
              <p className="text-sm text-muted-foreground">{client.title}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Preferences</h4>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Dietary:</span>{" "}
                  {client.preferences.dietary.join(", ")}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Cabin:</span>{" "}
                  {client.preferences.cabin}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Seating:</span>{" "}
                  {client.preferences.seating}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Beverages:</span>{" "}
                  {client.preferences.beverages.join(", ")}
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Year to Date</h4>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Flights:</span>{" "}
                  {client.yearToDate.flights}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Revenue:</span>{" "}
                  ${(client.yearToDate.revenue/1000000).toFixed(1)}M
                </p>
                <p className="text-sm">
                  <span className="font-medium">Satisfaction:</span>{" "}
                  {client.yearToDate.satisfaction}%
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-4">
        <div className="flex items-center gap-2 mb-8">
          <PlaneTakeoff className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">G550 Manager</span>
        </div>
        
        <nav className="space-y-2">
          {[
            { icon: BarChart3, label: "Dashboard", id: "dashboard" },
            { icon: Users, label: "Clients", id: "passengers" },
            { icon: Calendar, label: "Schedule", id: "flights" },
            { icon: Bell, label: "Notifications", id: "notifications" },
            { icon: Settings, label: "Settings", id: "settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 w-full p-2 rounded-lg transition-colors
                ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {activeTab === "dashboard" && <DashboardContent />}
        {activeTab === "passengers" && <PassengersContent />}
      </div>
    </div>
  );
}