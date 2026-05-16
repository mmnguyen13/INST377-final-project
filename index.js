const express = require('express');
const bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');
const { isValidStateAbbreviation } = require('usa-state-validator');
const dotenv = require('dotenv');
const axios = require('axios');

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.sendFile('public/Customers.html', { root: __dirname });
});

const clubs = [
  {
    club_name: "Coding Club",
    category: "Technology"
  },
  {
    club_name: "Dance Team",
    category: "Arts"
  }
];

app.get('/clubs', async (req, res) => {

  const { data, error } = await supabase
      .from('clubs')
      .select('*');

  if (error) {
      return res.status(500).json({ error: error.message });
  }

  res.json(data);

});

app.post('/clubs', async (req, res) => {

  const newClub = {
      club_name: req.body.club_name,
      category: req.body.category
  };

  const { data, error } = await supabase
      .from('clubs')
      .insert([newClub]);

      if (error) {
        console.log("Supabase insert error:", error);
        return res.status(500).json({ error: error.message });
    }

  res.json(data);

});

app.get('/activity', async (req, res) => {

  try {

      const response = await axios.get(
        'https://official-joke-api.appspot.com/random_joke'
      );

      res.json(response.data);

  } catch (error) {

      res.status(500).json({
          error: 'Failed to fetch activity'
      });

  }

});


app.listen(port, () => {
  console.log(`App is available on port: ${port}`);
});

