'use server';
/**
 * @fileOverview An AI agent for generating marketing content.
 *
 * - generateContent - A function that generates marketing content for various platforms.
 * - GenerateContentInput - The input type for the generateContent function.
 * - GenerateContentOutput - The return type for the generateContent function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateContentInputSchema = z.object({
  platform: z.string().describe('The platform for which to generate content (e.g., Facebook, Twitter, LinkedIn).'),
  topic: z.string().describe('The topic of the content.'),
  tone: z.string().describe('The desired tone of the content (e.g., professional, humorous, informative).'),
  keywords: z.string().describe('Comma separated keywords to include in the content.'),
});
export type GenerateContentInput = z.infer<typeof GenerateContentInputSchema>;

const GenerateContentOutputSchema = z.object({
  content: z.string().describe('The generated marketing content.'),
});
export type GenerateContentOutput = z.infer<typeof GenerateContentOutputSchema>;

export async function generateContent(input: GenerateContentInput): Promise<GenerateContentOutput> {
  return generateContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContentPrompt',
  input: {
    schema: z.object({
      platform: z.string().describe('The platform for which to generate content (e.g., Facebook, Twitter, LinkedIn).'),
      topic: z.string().describe('The topic of the content.'),
      tone: z.string().describe('The desired tone of the content (e.g., professional, humorous, informative).'),
      keywords: z.string().describe('Comma separated keywords to include in the content.'),
    }),
  },
  output: {
    schema: z.object({
      content: z.string().describe('The generated marketing content.'),
    }),
  },
  prompt: `You are an expert marketing content creator. Generate marketing content for the following platform, topic and tone:

Platform: {{{platform}}}
Topic: {{{topic}}}
Tone: {{{tone}}}
Keywords: {{{keywords}}}

Content:`, 
});

const generateContentFlow = ai.defineFlow<
  typeof GenerateContentInputSchema,
  typeof GenerateContentOutputSchema
>({
  name: 'generateContentFlow',
  inputSchema: GenerateContentInputSchema,
  outputSchema: GenerateContentOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
