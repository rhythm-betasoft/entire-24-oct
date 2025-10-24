const express=require ('express');
const app=express()
const PORT=5000;

app.get('/',(req,res)=>{
    res.send('Hello')
});
app.post('/contact', (req, res) => {
  res.send('Contact form submitted.');
});

app.put('/update', (req, res) => {
  res.send('Update request received.');
});

app.delete('/delete', (req, res) => {
  res.send('Delete request processed.');  
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})