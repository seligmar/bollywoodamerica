var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
}

// the 'official' Konami Code sequence
var konamiCode = [
  'up',
  'up',
  'down',
  'down',
  'left',
  'right',
  'left',
  'right',
  'b',
  'a'
]

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0
var img
var modalImg = document.getElementById('img01')
var captionText = document.getElementById('caption')
var modal = document.getElementById('myModal')
var span = document.getElementsByClassName('close')[0]
var screenWidth = window.innerWidth * 0.75
var screenHeight = window.innerHTML * 0.75

function checkForModalImages () {
  var imageList = document.querySelectorAll('img')
  if (imageList.length > 0) addIdToImage(imageList)
}

function addIdToImage (imageList) {
  for (let i = 1; i < imageList.length; i++) {
    img = imageList[i]
    img.id = `${'myImg' + i}`
    addClick(img)
  }
}

function addClick (img) {
  if (typeof img === 'undefined') return
  var height = img.height
  var width = img.width
  img.onclick = function () {
    modal.style.display = 'block'
    modalImg.src = this.src
    captionText.innerHTML = this.alt
    resizeImg(height, width)
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

function resizeImg (height, width) {
  var modalContent = document.querySelector('.modal-content')
  //if (height === 0) modalContent.style.height = screenHeight * 0.75 + 'px'
  //if (width === 0) modalContent.style.width = screenWidth * 0.75 + 'px'
  modalContent.style.height = height * 1.5 + 'px'
  modalContent.style.width = width * 1.5 + 'px'
}

// add keydown event listener
document.addEventListener('keydown', function (e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode]
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition]

  // compare the key with the required key
  if (key === requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++

    // if the last key is reached, activate cheats
    if (konamiCodePosition === konamiCode.length) {
      activateCheats()
      konamiCodePosition = 0
    }
  } else {
    konamiCodePosition = 0
  }
})

function activateCheats () {
  window.open(
    'https://1.bp.blogspot.com/-umQrN2eEM-I/XIO2YtqqfsI/AAAAAAAAA-s/Xl3Vt12ZjwER5q0LVarRV4m7Hzzh2IOpQCLcBGAs/s640/Mughal-e-Azim%2Bfor%2Bkonami.gif'
  )
}

function createHeader () {}

checkForModalImages()
createHeader()
