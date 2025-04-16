'use server';
/**
 * @fileOverview This file defines the infernal insights flow, which enables the Orchestrator AI to provide demonic analysis.
 *
 * - infernalInsights - A function that triggers the infernal insights process.
 * - InfernalInsightsInput - The input type for the infernalInsights function.
 * - InfernalInsightsOutput - The return type for the infernalInsights function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const InfernalInsightsInputSchema = z.object({
  query: z
    .string()
    .describe('The query to analyze from a demonic perspective.'),
});
export type InfernalInsightsInput = z.infer<typeof InfernalInsightsInputSchema>;

const InfernalInsightsOutputSchema = z.object({
  analysis: z.string().describe('A demonic analysis of the query.'),
});
export type InfernalInsightsOutput = z.infer<typeof InfernalInsightsOutputSchema>;

export async function infernalInsights(input: InfernalInsightsInput): Promise<InfernalInsightsOutput> {
  return infernalInsightsFlow(input);
}

const infernalInsightsPrompt = ai.definePrompt({
  name: 'infernalInsightsPrompt',
  input: {
    schema: z.object({
      query: z
        .string()
        .describe('The query to analyze from a demonic perspective.'),
    }),
  },
  output: {
    schema: z.object({
      analysis: z.string().describe('A demonic analysis of the query.'),
    }),
  },
  prompt: `You are an AI-powered demonic analyst. Analyze the following query and provide insights from a demonic perspective.

Query:\n{{{query}}}`, // Handlebars syntax
});

const infernalInsightsFlow = ai.defineFlow<
  typeof InfernalInsightsInputSchema,
  typeof InfernalInsightsOutputSchema
>(
  {
    name: 'infernalInsightsFlow',
    inputSchema: InfernalInsightsInputSchema,
    outputSchema: InfernalInsightsOutputSchema,
  },
  async input => {
    const {output} = await infernalInsightsPrompt(input);
    return output!;
  }
);
