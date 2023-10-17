const tagsEl=document.getElementById('tags');
const textAreaEl=document.getElementById('txt');

textAreaEl.focus();

textAreaEl.addEventListener('keyup',(e)=>{
  createTags(e.target.value)
  if(e.key==='Enter')
  {
    setTimeout(()=>{e.target.value=' '},10);
    randomSelect();
  }
});

function createTags(input)
{
  const tags=input.split(',').filter(tag=>tag.trim()!==' ').map(tag=>tag.trim());
  // console.log(tags);
  tagsEl.innerHTML=' ';
  tags.forEach((tag, i) => {
    const tagEl=document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText=tag;
    tagsEl.appendChild(tagEl);
  });
}


function randomSelect()
{
  const times=30;
  const interval =setInterval(()=>{
    const randomTag=picRandomTag();
    highlightTag(randomTag);
    setTimeout(()=>{
      unhighlightTag(randomTag);
    },100);
  },100);
  setTimeout(()=>{
    clearInterval(interval);
    setTimeout(()=>{
      const randomTag=picRandomTag();
      highlightTag(randomTag);
    },100);
  },times*100);
}
function picRandomTag()
{
  const tags=document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random()*tags.length)];
}

function highlightTag(tag)
{
  tag.classList.add('highlight');
}
function unhighlightTag(tag)
{
  tag.classList.remove('highlight');
}
