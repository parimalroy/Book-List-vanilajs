/**Dom Selection */
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const publisher = document.querySelector('#publisher');
const year = document.querySelector('#year');
const btn = document.querySelector('#btn');
const bookList = document.querySelector("#book-list");

/** Event Listner add */

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(title.value == '' || author.value == '' || publisher.value == '' || year.value == ''){
        alert('please fill up all the information');
    }
    else{

        // create element
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newPublisher = document.createElement('th');
        newPublisher.innerHTML = publisher.value;
        newRow.appendChild(newPublisher);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // delete element
        const span = document.createElement('span');
        span.innerHTML = 'X';
        span.style.color = 'red';
        span.style.fontSize = '30px';
        span.style.cursor = 'pointer';
        span.style.textAlign= 'center';
        newRow.appendChild(span)

        span.addEventListener('click',()=>{
            bookList.removeChild(newRow);
        })

        bookList.appendChild(newRow);

        //empty input box
        title.value = '';
        author.value = '';
        publisher.value = '';
        year.value = '';
    }
})