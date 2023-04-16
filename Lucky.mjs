function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }


luckyDraw("joe")
    .then((resolve) => {
        console.log(resolve) 
        return luckyDraw("sabrina") 
    })
    .then((resolve) => {
        console.log(resolve) 
        return luckyDraw("carolina") 
    })
    .catch((err)=> console.log(err))
    .finally(()=> console.log("The game is end !"))
