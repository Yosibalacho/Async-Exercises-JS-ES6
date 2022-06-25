function myPromise() {
  return new Promise((resolve, reject) => {
    const dateObj = new Date().getHours();
    if (dateObj < 11) {
      resolve("Good luck and Good morning");
    } else {
      reject("Error and Good afternoon");
    }
  });
}
myPromise()
.then((data)=>{console.log(data);})
.catch((err)=>{console.log(err);})
