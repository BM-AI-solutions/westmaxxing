
'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {useState} from 'react';
import {InfernalInsightsOutput, infernalInsights} from '@/ai/flows/infernal-insights';
import {Textarea} from '@/components/ui/textarea';

export default function Home() {
  const [query, setQuery] = useState('');
  const [analysis, setAnalysis] = useState<InfernalInsightsOutput | null>(null);

  const handleAnalysis = async () => {
    const result = await infernalInsights({query: query});
    setAnalysis(result);
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden">
      {/* Animated Inferno Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900 to-black opacity-40 animate-fade"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold animate-fire">
          Welcome to the{' '}
          <span className="text-red-600">Infernal</span>
          <a className="text-red-500" href="https://example.com">
            Decision Points!
          </a>
        </h1>

        <p className="mt-3 text-2xl animate-fire">
          Unleash the power of AI, forged in the depths of hell.
        </p>

        {/* Infernal Insights Section */}
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 animate-fire">Infernal Insights</h2>
          <Textarea
            placeholder="Enter your query for a demonic analysis..."
            className="bg-black text-red-500 border-red-700"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <Button className="mt-4 bg-red-700 hover:bg-red-500 text-white" onClick={handleAnalysis}>
            Get Analysis
          </Button>

          {analysis && (
            <Card className="mt-4 bg-black border-red-700">
              <CardHeader>
                <CardTitle className="text-2xl animate-fire">Demonic Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-400">{analysis.analysis}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Core Features Section */}
        <div className="mt-12 flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <Card className="p-4 w-96 bg-black border-red-700">
            <CardHeader>
              <CardTitle className="animate-fire">Proactive Opportunity Analysis</CardTitle>
              <CardDescription className="text-red-400">
                Continuously scans markets, trends, and data sources to autonomously identify and evaluate new passive
                income opportunities without user prompting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-red-500">AI Powered Analysis</p>
            </CardContent>
          </Card>

          <Card className="p-4 w-96 bg-black border-red-700">
            <CardHeader>
              <CardTitle className="animate-fire">Dynamic &amp; Adaptive Strategy</CardTitle>
              <CardDescription className="text-red-400">
                Formulates, deploys, and continuously adapts income strategies based on real-time performance data,
                market shifts, and predictive analytics. Automatically selects niches, models (affiliate, digital
                products, etc.), and platforms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-red-500">AI Powered Strategy</p>
            </CardContent>
          </Card>

          <Card className="p-4 w-96 bg-black border-red-700">
            <CardHeader>
              <CardTitle className="animate-fire">Autonomous Resource Allocation</CardTitle>
              <CardDescription className="text-red-400">
                Intelligently allocates system resources (e.g., API budgets, compute) across various Action Agents and
                income streams based on projected ROI and performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-red-500">AI Powered Allocation</p>
            </CardContent>
          </Card>

          <Card className="p-4 w-96 bg-black border-red-700">
            <CardHeader>
              <CardTitle className="animate-fire">Observational Dashboard</CardTitle>
              <CardDescription className="text-red-400">
                Provides real-time insights into the autonomous operations: View the Orchestrator's current strategy,
                active income streams, resource allocation, and key decisions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-red-700 hover:bg-red-500 text-white">View Dashboard</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
