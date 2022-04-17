const buttons= document.querySelectorAll("a")

buttons.forEach(button=>{

    button.addEventListener('click', onClick)
    button.addEventListener('dblclick', onDblClick)
    button.addEventListener('mousedown', onMouseDown)
    button.addEventListener('mouseup', onMouseUp)
  
  })
  
  function onClick() {
    this.classList.toggle('blue')
  }
  
  function onDblClick() {
    this.classList.toggle('yellow')
  }
  
  function onMouseDown() {
    const self = this
    timer = setTimeout(()=>{
      self.classList.toggle('green')
    }, 500)
  }
  
  function onMouseUp() {
    clearTimeout(timer)
  }