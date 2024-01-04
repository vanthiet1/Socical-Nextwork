
// call
const getData = async ()=>{
    const response = fetch('');
    const data = response.json();
    return data;
}
//icon api
document.addEventListener('DOMContentLoaded',async ()=>{
    await getData()
})