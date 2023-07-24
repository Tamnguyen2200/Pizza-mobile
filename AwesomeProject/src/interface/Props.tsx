export interface ToppingButtonProps {
    Name:string;
    price: number;
    img:any;
    pizzaImg: any;
    isSelected: boolean
    onSelectTopping?: (img: string, price: number) => void;
}

export interface CheeseButtonProps {
    Name:string;
    price: number;
    onSelectCheese?: () => void;
}

export interface ListPizzaProps{
    img: any;
    name: string;
    price: string;
    id: string; 
    navigation: any;
   
}
export interface SearchProps{
    Image: any;
    PizzaName: string;
    objectId: string;
    Price: number;
    id: string;

}
export interface HomeProps{
    Image: any;
    PizzaName: string;
    Price: string;
    objectId: string,
    navigation: any;
}
export interface NavigationProps{
    navigation: any; 
    route: any
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
    CheeseName: string,
    PriceCheese: number,
    
}

export interface SizeProps{
    objectId: string,
    SizeName: string,
    PriceSize: number,
    Image:string,
}

export interface OrderProps{
    Pizza: PizzaProps;
    Thiness: ThicknessProps;
    Customer: CustomerProps;
    Size: SizeProps;
    Cheese: ChesseProps;
}

export interface PizzaProps{
    objectId: string;
    Price: number;
    Image: string;
    PizzaName: string;
}

export interface ThicknessProps{
    objectId: string;
    PriceThickness: number;
    Image: string;
    ThicknessName: string;
}

export interface CustomerProps{
    Fullname: string;
    PhoneNumber: PhoneNumberProps;
    Address: string;
}

export interface PhoneNumberProps{
    objectId: string;
    PhoneNumber: number;
}