import { useState } from 'react';
import { fetch } from 'whatwg-fetch';
import * as _ from 'lodash';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
  const [histogramData, setHistogramData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = _.words(_.toLower(text));
    const wordCounts = _.countBy(words);
    const sortedWords = _.orderBy(_.toPairs(wordCounts), [1], ['desc']);
    const top20Words = _.slice(sortedWords, 0, 20);
    const data = top20Words.map(([word, count]) => ({ word, count }));
    setHistogramData(data);
  };

  const exportData = () => {
    const csv = 'Word,Count\n' + histogramData.map(({ word, count }) => `${word},${count}`).join('\n');
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    downloadLink.download = 'histogram.csv';
    downloadLink.click();
  };

  return (
    <div>
      <button onClick={fetchData}>Submit</button>
      {histogramData.length > 0 && (
        <>
          <BarChart width={1500} height={400} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Bar dataKey="count" fill="#8884d8" label={({ word, count }) => `${word} (${count})`} />
          </BarChart>
          <button onClick={exportData}>Export</button>
        </>
      )}
    </div>
  );
}

export default App;
