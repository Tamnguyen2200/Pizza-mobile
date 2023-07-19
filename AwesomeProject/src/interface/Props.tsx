export interface ToppingButtonProps {
    Name:string;
    price: number;
    img:any;
    pizzaImg: any;
    isSelected: boolean
    onSelectTopping?: (img: string, price: number) => void;
}

export interface ListPizzaProps{
    img: any;
    name: string;
    price: string;
    navigation: any;
}

export interface NavigationProps{
    navigation: any; 
}

export interface ToppingProps{
    objectId: string,
    ToppingName: string,
    PriceTopping: number,
    Image:string,
    ImagePizza: string
}

export interface ChesseProps{
    objectId: string,
    ChesseName: string,
    PriceChesse: number,
    
}