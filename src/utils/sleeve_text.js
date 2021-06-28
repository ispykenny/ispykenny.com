const sleevedText = original_text => {
  original_text.childNodes.forEach((el) => {
    let og_text = el.innerText;
    let inner_text = ''
    og_text.split(' ').forEach((string, index) => {
      inner_text += `
        <span class="st">
          <span class="st__item">${string}</span>  
        </span>
      `
    })
    el.innerHTML = inner_text;
  })

  // let newString = '';
  // original_text.split(' ').forEach((string, index) => {
  //   newString += `
  //     <span class="st">
  //       <span class="st__item">${string}</span>  
  //     </span>
  //   `
  // })
  // return newString;
}

export default sleevedText;