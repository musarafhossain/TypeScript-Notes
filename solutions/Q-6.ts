enum Color{
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
}

function SelectColor(color: Color): string{
    return `You selected ${color}`
}

console.log(SelectColor(Color.Green));