//Enumerations are a feature that allows us to define
//  a set of named constants.

enum Direction{
    up,// can also chae valuse like up=1 other will auto inc.
    down,
    left,
    right
    // Here, Up = 0, Down = 1, Left = 2, Right = 3 by default.
}

function exe(keyinput:Direction){
    if(keyinput===Direction.up){console.log("up");
    }
}
exe(Direction.up);
//exe(Direction[2] as unknown as Direction)
//enum s just  a virtual concept in js