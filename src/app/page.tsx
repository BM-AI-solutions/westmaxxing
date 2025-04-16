import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
// Import an icon for visual flair (replace with actual icons later)
// import { Skull, BrainCircuit } from 'lucide-react'; // Example icons
import { FireParticles } from "@/components/fire-particles"; // Assuming this exists

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
       {/* Background Element: Use the FireParticles component */}
       <FireParticles className="absolute inset-0 z-0" />

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center text-center w-full max-w-4xl">

        {/* Header */}
        <header className="mb-12">
           {/* Optional: Add an infernal logo/icon */}
           {/* <Skull className="w-16 h-16 mx-auto mb-4 text-infernal-ember animate-pulse" /> */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-infernal-ember animate-subtle-glow">
            Decision Points
          </h1>
          <p className="text-lg md:text-xl text-infernal-smoke max-w-2xl mx-auto">
            Witness the infernal machine autonomously forge passive income streams.
            Observe, do not interfere.
          </p>
        </header>

        {/* Placeholder Dashboard Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card Example 1: Orchestrator Status */}
          <Card className="border-infernal-ash shadow-lg bg-infernal-charcoal/80 backdrop-blur-sm hover:border-infernal-ember transition-colors duration-300">
            <CardHeader>
              {/* <BrainCircuit className="w-8 h-8 mb-2 text-infernal-soulfire" /> */}
              <CardTitle className="text-infernal-flame text-2xl">Orchestrator</CardTitle>
              <CardDescription className="text-infernal-smoke">Central Command AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-2">Status: <span className="text-green-500 font-semibold animate-pulse">Operational</span></p>
              <p className="text-sm text-muted-foreground mb-1">Current Strategy: Balanced Growth</p>
              <p className="text-sm text-muted-foreground">Active Agents: 5</p>
            </CardContent>
            <CardFooter>
                <Progress value={75} className="w-full h-2 [&>div]:bg-infernal-ember" aria-label="Orchestrator Load" />
            </CardFooter>
          </Card>

          {/* Card Example 2: Total Earnings */}
           <Card className="border-infernal-ash shadow-lg bg-infernal-charcoal/80 backdrop-blur-sm hover:border-infernal-ember transition-colors duration-300">
            <CardHeader>
              {/* Icon placeholder */}
              <CardTitle className="text-infernal-flame text-2xl">Accrued Value</CardTitle>
              <CardDescription className="text-infernal-smoke">Total passive income generated</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-infernal-gold">$0.00</p>
               <p className="text-sm text-green-400 mt-1">+0% Today</p>
            </CardContent>
             <CardFooter className="flex justify-end">
                <Button variant="ghost" size="sm" className="text-infernal-ember hover:bg-infernal-ash/50 hover:text-infernal-flame">View Details</Button>
             </CardFooter>
          </Card>

           {/* Card Example 3: Recent Activity Log */}
           <Card className="border-infernal-ash shadow-lg bg-infernal-charcoal/80 backdrop-blur-sm md:col-span-2 lg:col-span-1 hover:border-infernal-ember transition-colors duration-300">
            <CardHeader>
               {/* Icon placeholder */}
              <CardTitle className="text-infernal-flame text-2xl">Activity Feed</CardTitle>
              <CardDescription className="text-infernal-smoke">Latest autonomous actions</CardDescription>
            </CardHeader>
            <CardContent>
               <ul className="space-y-2 text-sm">
                    <li className="text-foreground">Agent <span className="text-infernal-soulfire">ContentGen-Alpha</span> deployed new article set.</li>
                    <li className="text-muted-foreground">Orchestrator adjusted resource allocation for <span className="text-infernal-soulfire">AffiliateBot-Gamma</span>.</li>
                    <li className="text-muted-foreground">Market Analysis Agent identified trend: [Placeholder Trend].</li>
               </ul>
            </CardContent>
             <CardFooter className="flex justify-end">
                 <Button variant="outline" size="sm" className="border-infernal-ash text-infernal-smoke hover:border-infernal-ember hover:text-infernal-flame hover:bg-infernal-ash/30">View Full Log</Button>
             </CardFooter>
          </Card>

        </section>

        {/* Call to Action / Auth Section (Placeholder) */}
        <footer className="mt-16">
          <Button size="lg" className="bg-infernal-ember hover:bg-infernal-flame text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-all animate-subtle-pulse">
            Authorize System Access
            {/* <span className="ml-2 text-xl">🔥</span> */}
          </Button>
          <p className="text-xs text-infernal-smoke mt-4">Initial authorization required via Stripe Connect.</p>
        </footer>
      </div>
    </div>
  );
}