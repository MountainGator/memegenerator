const memeGen = document.querySelector('form');
const btn = document.querySelector('button');
const memeContainer = document.querySelector('#showcase');


btn.addEventListener('click', function generateMeme (e) {
    e.preventDefault();
    let linkUrl = document.querySelector('input[name="image"]');
    let topText = document.querySelector('input[name="top"]');
    let bottomText = document.querySelector('input[name="bottom"]');
    
    let newMeme = makeMeme(
        linkUrl.value,
        topText.value,
        bottomText.value)
          
    function makeMeme(image, header, footer) {    
        let meme = document.createElement('div');
        let backPic = document.createElement('img');

        meme.classList.add('meme-image');
        backPic.setAttribute('src', image);       
        backPic.classList.add('meme-pic');

        let top = document.createElement('p');
        let bottom = document.createElement('p');
        top.classList.add('top-text');
        bottom.classList.add('bottom-text');
        top.innerText = `${header}`;
        bottom.innerText = `${footer}`; 

        meme.appendChild(backPic);
        meme.appendChild(top);
        meme.appendChild(bottom);
        return meme;
        }

    
    memeContainer.appendChild(newMeme);
    memeGen.reset();
}
    );

    
const remove = document.getElementById('remove');

// div remove help found at https://www.geeksforgeeks.org/how-to-remove-specific-div-element-by-using-javascript/

remove.addEventListener('click', function (e){   
    let newMeme = memeContainer.querySelector('div');
    newMeme.parentNode.removeChild(newMeme);
    })