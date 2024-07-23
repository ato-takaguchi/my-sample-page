// app/page.tsx
import axios from 'axios';

const fetchData = async () => {
  try {
    // APIリクエストのURLをログ出力
    console.log('Fetching data from:', `https://${process.env.MICROCMS_SERVICE_DOMAIN}/api/v1/blogpost`);

    const res = await axios.get(`https://${process.env.MICROCMS_SERVICE_DOMAIN}/api/v1/blogpost`, {
      headers: {
        'X-API-KEY': process.env.MICROCMS_API_KEY || '',
      },
    });

    // レスポンスデータをログ出力
    console.log('Response Data:', res.data);

    return res.data;
  } catch (error) {
    // エラーをログ出力
    console.error('Error fetching data:', error);
    return {}; // エラー時には空のオブジェクトを返す
  }
};

export default async function HomePage() {
  // 環境変数をログ出力
  console.log('MICROCMS_SERVICE_DOMAIN:', process.env.MICROCMS_SERVICE_DOMAIN);
  console.log('MICROCMS_API_KEY:', process.env.MICROCMS_API_KEY);

  const data = await fetchData();

  return (
    <div>
      <h1>Data from microCMS</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
