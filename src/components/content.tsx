'use client';

import { JSX, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  Info,
  Pill,
  Clock,
  Store,
  AlertCircle,
  AlertTriangle,
  HeartHandshake,
  Lightbulb,
  HelpCircle,
  FlaskRoundIcon as Flask,
  AlertOctagon,
} from 'lucide-react';

export default function MedicalInfo() {
  
  const sections: Record<string, string> = {
    Introduction: 'This medication is a popular drug that belongs to phosphodiesterase-5 inhibitors. It is widely used for treating conditions related to blood flow.',
    'How to take': 'Take the tablet orally with a full glass of water. You can consume it with or without food, as per your doctor.',
    'Shelf Life': 'This medication has a shelf life of five years from its manufacturing date.',
    'How to Store': 'Store in a cool, dry place away from direct sunlight and moisture. Keep out of reach of children.',
    'Side Effects': 'Common side effects include headache, flushing, nausea, and dizziness. If severe reactions occur, seek medical attention immediately.',
    Contraindications: 'Avoid use if you have severe heart conditions, low blood pressure, or if you are taking nitrates.',
    'Drug/Food Interactions': 'Avoid consuming alcohol or grapefruit juice while taking this medication, as they may reduce its effectiveness.',
    'Quick Tips': 'For best results, take the medication as prescribed and follow a healthy lifestyle.',
    FAQ: 'Q: Can I take this daily? A: Only if recommended by your doctor. Do not exceed the prescribed dosage.',
    'Active Ingredient': 'The active ingredient is Sildenafil Citrate, which helps improve blood circulation.',
    Warnings: 'Do not use this medication without consulting a doctor, especially if you have underlying health conditions.',
  };

  const sectionKeys = Object.keys(sections) as Array<keyof typeof sections>;
  const [activeSection, setActiveSection] = useState<string>('Introduction');

  return (
    <div className="flex min-h-screen flex-col lg:flex-row gap-6 px-6 lg:px-16 py-10">
      <aside className="w-full lg:w-72 h-fit border border-gray-200 bg-white shadow-sm rounded-lg sticky top-10">
        <ScrollArea className="h-[calc(100vh-120px)] p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Navigation</h2>
          <div className="space-y-1">
            {sectionKeys.map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'default' : 'ghost'}
                className="w-full justify-start gap-2"
                onClick={() => setActiveSection(section)}
              >
                {getIcon(section)}
                {section}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <main className="flex-1">
        <div className="max-w-4xl space-y-12">
          <div className="scroll-mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              {getIcon(activeSection)}
              {activeSection}
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {sections[activeSection]}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function getIcon(section: string): JSX.Element {
  const icons: Record<string, JSX.Element> = {
    Introduction: <Info className="h-5 w-5" />,
    'How to take': <Pill className="h-5 w-5" />,
    Dosage: <Clock className="h-5 w-5" />,
    'Shelf Life': <Store className="h-5 w-5" />,
    'How to Store': <Store className="h-5 w-5" />,
    'Side Effects': <AlertCircle className="h-5 w-5" />,
    Contraindications: <AlertTriangle className="h-5 w-5" />,
    'Drug/Food Interactions': <HeartHandshake className="h-5 w-5" />,
    'Quick Tips': <Lightbulb className="h-5 w-5" />,
    FAQ: <HelpCircle className="h-5 w-5"  />,
    'Active Ingredient': <Flask className="h-5 w-5" />,
    Warnings: <AlertOctagon className="h-5 w-5" />,
  };
  return icons[section] || <Info className="h-5 w-5" />;
}
