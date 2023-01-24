# Si clickeás el botón "A", el index se reduce en 1
def on_button_pressed_a():
    if not (index == 0):
        change_index(-1)
    else:
        change_index(3)
input.on_button_pressed(Button.A, on_button_pressed_a)

# Si clickeás el botón "B", el index aumenta en 1
def on_button_pressed_b():
    if not (index == 3):
        change_index(1)
    else:
        change_index(-3)
input.on_button_pressed(Button.B, on_button_pressed_b)

# Si clickeás los botones "A" y "B" a la vez,
# envía la orden al grupo
def on_button_pressed_ab():
    global command;
    global encrypted;
    encrypt(command)
    radio.send_string(encrypted);
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Encripta el comando
def encrypt(inp: str):
    global encrypted;
    result = "";
    vowels = ["a", "e", "i", "o", "u"];
    for letter in inp:
        if letter in vowels:
            pass
        else: 
            if result.length < 3:
                 result += letter;
            else: pass;
    encrypted = result;

# Cambia el index y muestra la orden en la pantalla
def change_index(x: number):
    global index, arrow, command
    index += x
    if index == 0:
        arrow = ArrowNames.SOUTH
        command = "atras";
    else:
        if index == 1:
            arrow = ArrowNames.WEST
            command = "izquierda";
        if index == 2:
            arrow = ArrowNames.NORTH
            command = "adelante";
        if index == 3:
            arrow = ArrowNames.EAST
            command = "derecha";
    basic.show_arrow(arrow)

index = 0
arrow = ArrowNames.EAST
command = "";
encrypted = "";
radio.set_group(21)