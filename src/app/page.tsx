
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-primary" href="https://example.com">
            Decision Points!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get ready to automate your passive income with our autonomous AI ecosystem.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <Card className="p-4 w-96">
            <CardHeader>
              <CardTitle>Proactive Opportunity Analysis</CardTitle>
              <CardDescription>
                Continuously scans markets, trends, and data sources to autonomously identify and evaluate new passive
                income opportunities without user prompting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>AI Powered Analysis</p>
            </CardContent>
          </Card>

          <Card className="p-4 w-96">
            <CardHeader>
              <CardTitle>Dynamic &amp; Adaptive Strategy</CardTitle>
              <CardDescription>
                Formulates, deploys, and continuously adapts income strategies based on real-time performance data,
                market shifts, and predictive analytics. Automatically selects niches, models (affiliate, digital
                products, etc.), and platforms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>AI Powered Strategy</p>
            </CardContent>
          </Card>

          <Card className="p-4 w-96">
            <CardHeader>
              <CardTitle>Autonomous Resource Allocation</CardTitle>
              <CardDescription>
                Intelligently allocates system resources (e.g., API budgets, compute) across various Action Agents and
                income streams based on projected ROI and performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>AI Powered Allocation</p>
            </CardContent>
          </Card>

          <Card className="p-4 w-96">
            <CardHeader>
              <CardTitle>Observational Dashboard</CardTitle>
              <CardDescription>
                Provides real-time insights into the autonomous operations: View the Orchestrator's current strategy,
                active income streams, resource allocation, and key decisions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>View Dashboard</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
