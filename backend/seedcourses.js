// One-time seed script: loads courses_seed.json into the `courses` table.
// Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node seed-courses.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
}
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
    const seedPath = path.join(__dirname, 'courses_seed.json');
    const courses = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

    const rows = courses.map(c => ({
        name: c.name,
        degree: c.degree,
        topics: c.topics
    }));

    const { data, error } = await supabase
        .from('courses')
        .upsert(rows, { onConflict: 'name' })
        .select('id');

    if (error) {
        console.error('Seed failed:', error.message);
        process.exit(1);
    }
    console.log(`Seeded ${data.length} courses.`);
}

main();
