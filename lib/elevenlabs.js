// Shared ElevenLabs client for server-side code (API routes only)
// Reads ELEVENLABS_API_KEY from the environment (.env.local locally, Vercel env in production)

import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

export const elevenlabs = new ElevenLabsClient();
