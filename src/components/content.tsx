'use client'

import { JSX, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
} from 'lucide-react'

export default function MedicalInfo() {
  const sections: Record<
    string,
    {
      content: string[]
      important?: string[]
      tips?: string[]
    }
  > = {
    Introduction: {
      content: [
        'This medication is a phosphodiesterase-5 (PDE5) inhibitor, specifically designed to enhance blood flow in specific areas of the body. It works by relaxing the blood vessels, allowing for improved circulation.',
        'Originally developed for cardiovascular conditions, it has become a widely prescribed medication for treating various circulatory and vascular conditions. Its mechanism of action involves inhibiting specific enzymes that regulate blood flow.',
        'The medication has undergone extensive clinical trials and has been approved by major health authorities worldwide, demonstrating its safety and efficacy when used as prescribed.Originally developed for cardiovascular conditions, it has become a widely prescribed medication for treating various circulatory and vascular conditions. Its mechanism of action involves inhibiting specific enzymes that regulate blood flow.',
        '',
        'The medication has undergone extensive clinical trials and has been approved by major health authorities worldwide, demonstrating its safety and efficacy when used as prescribed.Originally developed for cardiovascular conditions, it has become a widely prescribed medication for treating various circulatory and vascular conditions. Its mechanism of action involves inhibiting specific enzymes that regulate blood flow.',
        'The medication has undergone extensive clinical trials and has been approved by major health authorities worldwide, demonstrating its safety and efficacy when used as prescribed. ',
      ],
      important: [
        'Only take as prescribed by your healthcare provider',
        'Results may vary between individuals',
        'Regular follow-ups with your doctor are recommended',
      ],
    },
    'How to take': {
      content: [
        'Take one tablet orally with a full glass of water, approximately 30-60 minutes before intended use. The medication can be taken with or without food, though a heavy meal might delay its effects.',
        'Swallow the tablet whole – do not crush, split, or chew it. This ensures proper absorption and effectiveness of the medication.',
        'The duration of effect typically lasts for up to 4-5 hours, though this can vary between individuals.medication can be taken with or without food, though a heavy meal might delay its effects.',
        'Swallow the tablet whole – do not crush, split, or chew it. This ensures proper absorption and effectiveness of the medication.Swallow the tablet whole – do not crush, split, or chew it. This ensures proper absorption and effectiveness of the medicationTake one tablet orally with a full glass of water, approximately 30-60 minutes before intended use. The medication can be taken with or without food, though a heavy meal might delay its effects.',
        'Swallow the tablet whole – do not crush, split, or chew it. This ensures proper absorption and effectiveness of the medication.',
      ],
      tips: [
        'Set a consistent schedule for taking the medication',
        'Keep track of timing and effects in a health diary',
        'Stay well-hydrated throughout the day',
      ],
    },
    'Shelf Life': {
      content: [
        'This medication maintains its full potency for five years from the manufacturing date when stored properly. The expiration date is clearly printed on both the outer packaging and the blister pack.',
        "After the expiration date, the medication's effectiveness cannot be guaranteed and it should be properly disposed of through a pharmacy's medication take-back program.",
        'Regular checks of expiration dates are recommended, especially if storing multiple packages.',
      ],
      important: [
        'Check expiration date before each use',
        'Never use expired medication',
        'Keep original packaging intact',
      ],
    },
    'How to Store': {
      content: [
        "Store the medication in a cool, dry place at room temperature between 15-30°C (59-86°F). Avoid storing in bathrooms or other humid environments as moisture can affect the medication's stability.",
        'Keep the tablets in their original packaging until ready to use. The blister pack provides protection from light and moisture, which could degrade the active ingredients.',
        'Ensure storage location is secure and out of reach of children and pets. Consider using a locked medicine cabinet or storage box.',
      ],
      tips: [
        'Avoid storing in direct sunlight',
        "Don't transfer to other containers",
        'Check storage conditions regularly',
      ],
    },
    'Side Effects': {
      content: [
        'Common side effects may include headache, flushing, nasal congestion, mild dizziness, and temporary changes in vision. These effects are usually mild and resolve on their own within a few hours.',
        'Less common side effects might include back pain, muscle aches, ringing in ears, or mild stomach discomfort. If these persist or worsen, consult your healthcare provider.',
        'In rare cases, serious side effects may occur requiring immediate medical attention, such as sudden vision or hearing loss, chest pain, or prolonged effects.',
      ],
      important: [
        'Seek immediate medical attention for severe reactions',
        'Report any unexpected side effects to your doctor',
        'Keep track of any recurring side effects',
      ],
    },
    Contraindications: {
      content: [
        'This medication is contraindicated in patients taking nitrates in any form, as the combination can cause a dangerous drop in blood pressure. This includes prescription nitrates for chest pain and recreational nitrates.',
        'Individuals with severe heart or liver problems, recent stroke or heart attack, or uncontrolled blood pressure should not take this medication without specific medical clearance.',
        'Use is not recommended for individuals with certain inherited eye problems, blood cell problems, or active stomach ulcers.',
      ],
      important: [
        'Full disclosure of medical history is essential',
        'Inform all healthcare providers about this medication',
        'Regular health monitoring is required',
      ],
    },
    'Drug/Food Interactions': {
      content: [
        'Avoid consuming grapefruit or grapefruit juice while taking this medication, as it can significantly increase blood levels of the drug and risk of side effects.',
        "Alcohol consumption should be limited as it can increase the risk of side effects and reduce the medication's effectiveness. It may also worsen underlying conditions.",
        "Certain medications, including alpha-blockers, antifungals, and some antibiotics, may interact with this medication. Always inform your healthcare provider about all medications you're taking.",
      ],
      tips: [
        'Maintain a list of all medications and supplements',
        'Consult healthcare provider about dietary restrictions',
        'Plan timing of doses around meals',
      ],
    },
    'Quick Tips': {
      content: [
        "For optimal results, maintain a healthy lifestyle including regular exercise, balanced diet, and stress management. These factors can significantly impact the medication's effectiveness.",
        'Keep a consistent schedule for taking the medication and track any patterns in effectiveness or side effects.',
        'Stay well-hydrated and avoid excessive alcohol consumption when taking this medication.',
      ],
      tips: [
        'Set medication reminders',
        'Keep a health diary',
        'Follow a regular exercise routine',
        'Maintain open communication with your healthcare provider',
      ],
    },
    FAQ: {
      content: [
        'Q: Can I take this medication daily?\nA: Daily use should only be under direct medical supervision. Your doctor will determine the appropriate frequency based on your specific situation.',
        "Q: What should I do if I miss a dose?\nA: This medication is typically taken as needed, not on a fixed schedule. If you're on a daily regimen, consult your healthcare provider for specific instructions.",
        'Q: How long does it take to work?\nA: Effects typically begin within 30-60 minutes, though this can vary between individuals and circumstances.',
        "Q: Can I take this with other medications?\nA: Always consult your healthcare provider about potential interactions with other medications you're taking.",
      ],
    },
    'Active Ingredient': {
      content: [
        'The active ingredient, Sildenafil Citrate, works by inhibiting phosphodiesterase type 5 (PDE5), an enzyme that regulates blood flow. This leads to improved circulation in specific areas of the body.',
        'The medication comes in various strengths, typically 25mg, 50mg, and 100mg tablets. Your doctor will prescribe the appropriate strength based on your medical condition and response.',
        'The ingredient has been extensively studied and has demonstrated a good safety profile when used as directed.',
      ],
      important: [
        'Different strengths available',
        'Effects are dose-dependent',
        'Regular monitoring may be needed',
      ],
    },
    Warnings: {
      content: [
        'This medication should only be used under medical supervision. Self-adjustment of dosage can lead to serious complications.',
        'Seek immediate medical attention if you experience chest pain, severe dizziness, fainting, or prolonged effects lasting more than 4 hours.',
        'This medication is for personal use only and should not be shared with others, even if they have similar symptoms.',
      ],
      important: [
        'Keep all medical appointments',
        'Report any concerning symptoms immediately',
        'Never share medication with others',
        'Store safely away from children',
      ],
    },
  }

  const sectionKeys = Object.keys(sections) as Array<keyof typeof sections>
  const [activeSection, setActiveSection] = useState<string>('Introduction')

  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-8 px-6 sm:px-10 lg:px-32 py-8 sm:py-12 ">
      <aside className="w-full lg:w-72 border border-gray-300 bg-white shadow-lg rounded-xl lg:sticky lg:top-10 h-fit p-5">
        <ScrollArea className="max-h-[80vh] lg:max-h-[calc(100vh-120px)]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Navigation</h2>
          <div className="space-y-3">
            {sectionKeys.map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'default' : 'ghost'}
                className={`w-full justify-start gap-2 py-3 text-base font-medium rounded-lg transition-colors ${activeSection === section ? 'bg-green-600 text-white' : 'hover:bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveSection(section)}
              >
                {getIcon(section)}
                {section}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <main className="flex-1 w-full">
        <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <div className="scroll-mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                {getIcon(activeSection)}
                {activeSection}
              </h2>
              <div className="prose max-w-none space-y-5 sm:space-y-7 text-gray-700 leading-relaxed">
                {sections[activeSection].content.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}

                {sections[activeSection].important && (
                  <div className="mt-6 bg-green-50 p-5 rounded-lg border border-green-400 shadow-sm">
                    <h3 className="text-green-700 font-semibold text-lg mb-3 flex items-center gap-2">
                      <AlertOctagon className="h-6 w-6" />
                      Important Notes
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-base text-green-700">
                      {sections[activeSection].important.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {sections[activeSection].tips && (
                  <div className="mt-6 bg-blue-50 p-5 rounded-lg border border-green-400 shadow-sm">
                    <h3 className="text-green-700 font-semibold text-lg mb-3 flex items-center gap-2">
                      <Lightbulb className="h-6 w-6" />
                      Helpful Tips
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-base text-green-700">
                      {sections[activeSection].tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )

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
      FAQ: <HelpCircle className="h-5 w-5" />,
      'Active Ingredient': <Flask className="h-5 w-5" />,
      Warnings: <AlertOctagon className="h-5 w-5" />,
    }
    return icons[section] || <Info className="h-5 w-5" />
  }
}
