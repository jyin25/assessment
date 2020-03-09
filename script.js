function exitMenu() {
  $('.modal').on('click', '.exit-menu', function (event) {
    $('.modal').css('display', 'none');
  })
}

function enterMenu() {
  $('.header-container').on('click', '.nav-bar', function (event) {
    console.log(STORE)
    $(this).closest('body').find('.modal').attr('style', 'display:fixed')
  })
}


function loadPriorities() {
  const priorities = STORE.priorities.map((data, index) => `
  <a href="${data.url}.html"><div class="priority-box" id='${index}'>
    <div class="top-box">
      <img src=${data.pic}>
    </div>
    <div class="bottom-box">
      <div class="bottom-description">
        <h1>${data.title}</h1>
      </div>
      <div class="bottom-button-container">
        <div class="bottom-button" style="background-color: ${data.color};">
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>
    <div class="overlay" style="background-color: ${data.color};">
      <div class="overlay-text" style="color:black;">
        <p>${data.body}</p>
      </div>
    </div>
  </div></a>
  `)

  $('.priority-main-container').html(priorities)
}

function meetList(){
  const list = STORE.meetList.map(data => {
    return `<li>${data}</li>`
  })
  console.log(list)
  $('.meetme-list').html(list)
}

function priorityList() {
  const priorityList = STORE.priorities.map(data => {
    return `<li>${data.title}</li>`
  })
  $('.priority-list').html(priorityList)
}


function init() {
  exitMenu();
  enterMenu();
  loadPriorities()
  meetList()
  priorityList()
}


$(init);

