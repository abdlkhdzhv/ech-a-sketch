function getNum() {
    return Math.floor(Math.random() * 255)
};

function createColor(){
    return `rgb(${getNum()}, ${getNum()}, ${getNum()})`
};

function getCube(){
    let num = prompt('Введите размер сетки', '16')
    if (num <= 100){
        return num
    }else{
        alert('Недопустимое значение, выберите число до 100!')
    }
};

const div = document.createElement('div');
div.classList.add('div-grid');
container.appendChild(div);

const clearButtons = document.createElement('button');
clearButtons.textContent = 'Clear';
container.appendChild(clearButtons);

const size = document.createElement('button');
size.textContent = 'size-grid';
container.appendChild(size);

size.addEventListener('click', () => {
    return createGrid(getCube());
})

function createGrid(cube = 16){
    div.style.gridTemplate = `repeat(${cube}, 1fr) / repeat(${cube}, 1fr)`
    for(let i = 1; i <= cube * cube; i++){
        let itemGrid = document.createElement('div');
        itemGrid.classList.add('item-grid');
        itemGrid.addEventListener('mouseenter', () => {
            itemGrid.style.cssText = `background-color: ${createColor()};`
        })

        clearButtons.addEventListener('click', () => {
            itemGrid.style.cssText = `background-color: none;`
        });
        
        div.appendChild(itemGrid);
    };

};