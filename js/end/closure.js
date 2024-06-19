function Saygac() {
  let count = 0;

  count++;
  return count;
}

// const count1 = Saygac();
// const count2 = Saygac();
// console.log(count1, count2);

function saygac() {
  let count = 0;

  return () => {
    count++;
    return count;
  };
}

const result = saygac();
const count1 = result();
const count2 = result();
const count3 = result();

// const alma = saygac();
// const count21 = alma();
// const count2 = alma();
// const count3 = alma();
// console.log(count1, count2, count3, count21);
alma()
function alma(){
  console.log(s);
  if(){
    const s=23;
  }
}

alma()
 alma=()=>{
  console.log("alma");
}