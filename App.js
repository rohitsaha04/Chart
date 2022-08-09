import './App.css';
import { ResponsiveContainer, LineChart, 
      CartesianGrid, Legend, Line, XAxis, YAxis, Tooltip } from 'recharts';

const mydata = [
  {
    subject: 'Science',
    chapter: 20,
    room: 10
  },
  {
    subject: 'Maths',
    chapter: 25,
    room: 35
  },
  {
    subject: 'English',
    chapter: 10,
    room: 15
  },
  {
    subject: 'Computer',
    chapter: 30,
    room: 20
  },
  {
    subject: 'Environment ',
    chapter: 25,
    room: 5
  },
]

function App() {
  return (
    <>
    <h1 className='heading'>CHART</h1>
    <ResponsiveContainer width="100%" aspect={3}>
    <LineChart data={mydata} width={500}  height={300} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey= "subject" interval={'preserveStartEnd'} />
      <YAxis />
      <Tooltip />
      <Legend />
     <Line type="monotone" dataKey="chapter" activeDot={{ r: 8 }}/>
     <Line type="monotone" dataKey="room" stroke='black' activeDot={{ r: 8 }}/>
    </LineChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
