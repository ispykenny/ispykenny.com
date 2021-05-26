const sleevedText = original_text => {
  let newString = '';
  original_text.split(' ').forEach((string, index) => {
    newString += `
      <span class="st">
        <span class="st__item">${string}</span>  
      </span>
    `
  })
  return newString;
}

export default sleevedText;