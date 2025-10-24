import react,{useState,useEffect} from 'react';
function Home() {
  const [count, setCount] = useState(0);
 const [time,setTime]=useState(new Date());

  useEffect(() => {
    console.log('Component render hua ya update hua');

    return () => {
      console.log('Cleanup hua — next render se pehle ya unmount pe');
    };
  },[]);

   useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date());
        },1000);
         return () => clearInterval(timer);
    },[]);

return (
  <>
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-xl text-center font-semibold text-gray-800">
         Time: {time.toLocaleTimeString()}
      </h2>
    </div>

    <div className="flex items-center gap-4 bg-white shadow-md rounded-md p-4">
      <h2 className="text-lg font-medium text-gray-700">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Increase
      </button>
    </div>
  </>
);

}
export default Home;