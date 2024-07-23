// pages/api/getData.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://e5z186clzl.microcms.io/api/v1/blogpost', {
      headers: {
        'X-API-KEY': 'nFLZ2FIqZSDz5D4BzUs8heoT5R7kMBW4yhsF',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
