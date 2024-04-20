const btn = document.getElementById('btn');
const emojiName = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji(){
    let responce = await fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1");
    let data = await responce.json();
    console.log(data);

    for(let i=0; i<1500; i++){
        emoji.push({
            emojiName : data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }

}
getEmoji();

btn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btn.innerText = emoji[randomNum].emojiName;
    emojiName.innerText = emoji[randomNum].emojiCode;
  });