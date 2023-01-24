//  Si clickeás el botón "A", el index se reduce en 1
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (!(index == 0)) {
        change_index(-1)
    } else {
        change_index(3)
    }
    
})
//  Si clickeás el botón "B", el index aumenta en 1
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (!(index == 3)) {
        change_index(1)
    } else {
        change_index(-3)
    }
    
})
//  Si clickeás los botones "A" y "B" a la vez,
//  envía la orden al grupo
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    
    encrypt(command)
    radio.sendString(encrypted)
})
//  Encripta el comando
function encrypt(inp: string) {
    
    let result = ""
    let vowels = ["a", "e", "i", "o", "u"]
    for (let letter of inp) {
        if (vowels.indexOf(letter) >= 0) {
            
        } else if (result.length < 3) {
            result += letter
        } else {
            
        }
        
    }
    encrypted = result
}

//  Cambia el index y muestra la orden en la pantalla
function change_index(x: number) {
    
    index += x
    if (index == 0) {
        arrow = ArrowNames.South
        command = "atras"
    } else {
        if (index == 1) {
            arrow = ArrowNames.West
            command = "izquierda"
        }
        
        if (index == 2) {
            arrow = ArrowNames.North
            command = "adelante"
        }
        
        if (index == 3) {
            arrow = ArrowNames.East
            command = "derecha"
        }
        
    }
    
    basic.showArrow(arrow)
}

let index = 0
let arrow = ArrowNames.East
let command = ""
let encrypted = ""
radio.setGroup(21)
