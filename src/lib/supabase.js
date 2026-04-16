import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dekyqvlfinsodkkskyiv.supabase.co'
const supabaseKey = 'sb_publishable_qABCcV_O1DcKIzAOR3CgxQ_EJVHPgH2'

export const supabase = createClient(supabaseUrl, supabaseKey)
