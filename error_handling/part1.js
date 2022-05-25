function wrapper(fn) {
  try {
    fn();
  } catch(error) {
    console.log(fn)
    console.error(error.message);
  }
}


const test =() => {
  // wrapper(first);
  wrapper(()=>{
    // x=x+1
    throw new Error("some error")
  })
}

test()
