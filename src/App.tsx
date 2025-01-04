import React, { useState } from 'react';
import { Trophy, Store } from 'lucide-react';
import { PriceCard } from './components/PriceCard';
import { TabSwitcher } from './components/TabSwitcher';
import { Header } from './components/Header';
import { Button } from './components/Button';

function App() {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'Active', icon: <Trophy className="w-4 h-4" /> },
    { id: 'completed', label: 'Completed', icon: <Store className="w-4 h-4" /> },
  ];

  const cards = [
    {
      price: '$20',
      title: '10 Conversations January',
      description: 'Close 6 more conversation in the month of January 2023.',
      badge: 'VALUE',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      bgColor: 'bg-gray-100',
      hoverColor: 'hover:bg-yellow-100/50',
      priceTagColor: 'bg-yellow-100',
      action: { label: 'Join', variant: 'primary' }
    },
    {
      price: '$50',
      title: 'Keep it going',
      description: 'Close at least one conversation each day this month.',
      badge: 'STREAK',
      badgeColor: 'bg-cyan-100 text-cyan-800',
      bgColor: 'bg-gray-100',
      hoverColor: 'hover:bg-cyan-100/50',
      priceTagColor: 'bg-cyan-100',
      action: { label: 'Join', variant: 'secondary' }
    },
    {
      price: '$500',
      title: 'Lululemon Ambassador',
      description: 'Lead to 5 purchases of products over $100',
      badge: 'PARTNER',
      badgeColor: 'bg-purple-100 text-purple-800',
      bgColor: 'bg-gray-100',
      hoverColor: 'hover:bg-purple-100/50',
      priceTagColor: 'bg-purple-100',
      action: { label: 'View more', variant: 'secondary' }
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-6 shadow-sm">
        <Header 
          title="CHALLENGES" 
          action={<Button variant="link" className="text-blue-600 hover:text-blue-700 font-medium">View all</Button>}
        />
        <div className="space-y-3">
          {cards.map((card, index) => (
            <PriceCard
              key={index}
              {...card}
              onClick={() => console.log(`Card ${index + 1} clicked`)}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <TabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
}

export default App;