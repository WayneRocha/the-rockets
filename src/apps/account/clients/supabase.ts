import { createClient } from '@supabase/supabase-js';
import { get_env } from '../../../webvitals/env_middleware';

const url = get_env('SUPABASE_URL');
const anonPublicKey = get_env('SUPABASE_ANON_PUBLIC_KEY');

export default createClient(url, anonPublicKey);
