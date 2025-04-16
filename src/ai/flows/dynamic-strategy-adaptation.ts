// File: src/ai/flows/dynamic-strategy-adaptation.ts
'use server';
/**
 * @fileOverview This file defines the dynamic strategy adaptation flow for the Orchestrator AI.
 *
 * The flow takes real-time performance data and market shifts as input, and outputs an adapted income strategy.
 *
 * - adaptIncomeStrategy - The function that handles the dynamic strategy adaptation process.
 * - AdaptIncomeStrategyInput - The input type for the adaptIncomeStrategy function.
 * - AdaptIncomeStrategyOutput - The return type for the adaptIncomeStrategy function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

// Define the input schema
const AdaptIncomeStrategyInputSchema = z.object({
  realTimePerformanceData: z.string().describe('Real-time performance data of current income strategies.'),
  marketShifts: z.string().describe('Description of recent market shifts and trends.'),
  currentStrategy: z.string().describe('The current income strategy being employed.'),
});
export type AdaptIncomeStrategyInput = z.infer<typeof AdaptIncomeStrategyInputSchema>;

// Define the output schema
const AdaptIncomeStrategyOutputSchema = z.object({
  adaptedStrategy: z.string().describe('The adapted income strategy based on the input data.'),
  reasoning: z.string().describe('The reasoning behind the adapted strategy.'),
});
export type AdaptIncomeStrategyOutput = z.infer<typeof AdaptIncomeStrategyOutputSchema>;

// Define the main function
export async function adaptIncomeStrategy(
  input: AdaptIncomeStrategyInput
): Promise<AdaptIncomeStrategyOutput> {
  return adaptIncomeStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptIncomeStrategyPrompt',
  input: {
    schema: z.object({
      realTimePerformanceData: z.string().describe('Real-time performance data of current income strategies.'),
      marketShifts: z.string().describe('Description of recent market shifts and trends.'),
      currentStrategy: z.string().describe('The current income strategy being employed.'),
    }),
  },
  output: {
    schema: z.object({
      adaptedStrategy: z.string().describe('The adapted income strategy based on the input data.'),
      reasoning: z.string().describe('The reasoning behind the adapted strategy.'),
    }),
  },
  prompt: `You are an AI assistant responsible for adapting income strategies based on real-time performance data and market shifts.

  Current Strategy: {{{currentStrategy}}}

  Real-time Performance Data: {{{realTimePerformanceData}}}

  Market Shifts: {{{marketShifts}}}

  Based on this information, adapt the income strategy to optimize for the best results. Provide a clear explanation of your reasoning.

  Ensure that the adaptedStrategy field contains a detailed description of the new strategy.
  `,
});

// Define the Genkit flow
const adaptIncomeStrategyFlow = ai.defineFlow<
  typeof AdaptIncomeStrategyInputSchema,
  typeof AdaptIncomeStrategyOutputSchema
>(
  {
    name: 'adaptIncomeStrategyFlow',
    inputSchema: AdaptIncomeStrategyInputSchema,
    outputSchema: AdaptIncomeStrategyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
