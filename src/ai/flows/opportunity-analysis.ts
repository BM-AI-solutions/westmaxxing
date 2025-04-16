// Opportunity Analysis
'use server';
/**
 * @fileOverview This file defines the opportunity analysis flow, which enables the Orchestrator AI to continuously scan markets and trends to identify new passive income opportunities without user prompting.
 *
 * - opportunityAnalysis - A function that triggers the opportunity analysis process.
 * - OpportunityAnalysisInput - The input type for the opportunityAnalysis function.
 * - OpportunityAnalysisOutput - The return type for the opportunityAnalysis function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const OpportunityAnalysisInputSchema = z.object({
  marketTrends: z
    .string()
    .describe('The current market trends and data sources to analyze.'),
  roiThreshold: z
    .number()
    .default(0.05)
    .describe('The minimum acceptable ROI for a passive income opportunity (as a decimal, e.g., 0.05 for 5%).'),
});
export type OpportunityAnalysisInput = z.infer<typeof OpportunityAnalysisInputSchema>;

const OpportunityAnalysisOutputSchema = z.object({
  opportunities: z.array(
    z.object({
      description: z.string().describe('A detailed description of the opportunity.'),
      potentialNiche: z.string().describe('The specific niche for this opportunity.'),
      businessModel: z
        .string()
        .describe('The recommended business model (affiliate, digital products, etc.).'),
      platform: z.string().describe('The platform to utilize for this opportunity.'),
      projectedRoi: z.number().describe('The projected ROI for this opportunity.'),
      requiredResources: z
        .string()
        .describe('The resources required to execute this opportunity.'),
    })
  ).describe('An array of potential passive income opportunities.'),
});
export type OpportunityAnalysisOutput = z.infer<typeof OpportunityAnalysisOutputSchema>;

export async function opportunityAnalysis(input: OpportunityAnalysisInput): Promise<OpportunityAnalysisOutput> {
  return opportunityAnalysisFlow(input);
}

const opportunityAnalysisPrompt = ai.definePrompt({
  name: 'opportunityAnalysisPrompt',
  input: {
    schema: z.object({
      marketTrends: z
        .string()
        .describe('The current market trends and data sources to analyze.'),
      roiThreshold: z
        .number()
        .describe('The minimum acceptable ROI for a passive income opportunity (as a decimal, e.g., 0.05 for 5%).'),
    }),
  },
  output: {
    schema: z.object({
      opportunities: z.array(
        z.object({
          description: z.string().describe('A detailed description of the opportunity.'),
          potentialNiche: z.string().describe('The specific niche for this opportunity.'),
          businessModel: z
            .string()
            .describe('The recommended business model (affiliate, digital products, etc.).'),
          platform: z.string().describe('The platform to utilize for this opportunity.'),
          projectedRoi: z.number().describe('The projected ROI for this opportunity.'),
          requiredResources: z
            .string()
            .describe('The resources required to execute this opportunity.'),
        })
      ).describe('An array of potential passive income opportunities.'),
    }),
  },
  prompt: `You are an AI-powered opportunity analyst. Analyze the following market trends and data to identify potential passive income opportunities.  Only include opportunities that have a projected ROI of at least {{roiThreshold}}.  For each opportunity, provide a detailed description, the specific niche, the recommended business model (affiliate, digital products, etc.), the platform to utilize, the projected ROI, and the resources required to execute.

Market Trends and Data:\n{{{marketTrends}}}`, // Handlebars syntax
});

const opportunityAnalysisFlow = ai.defineFlow<
  typeof OpportunityAnalysisInputSchema,
  typeof OpportunityAnalysisOutputSchema
>(
  {
    name: 'opportunityAnalysisFlow',
    inputSchema: OpportunityAnalysisInputSchema,
    outputSchema: OpportunityAnalysisOutputSchema,
  },
  async input => {
    const {output} = await opportunityAnalysisPrompt(input);
    return output!;
  }
);
