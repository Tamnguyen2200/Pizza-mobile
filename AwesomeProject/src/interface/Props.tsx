export interface ToppingButtonProps {
    Name:string;
    price: number;
    img:any;
    pizzaImg: any;
    isSelected: boolean
    onSelectTopping?: (img: string, price: number) => void;
}

<<<<<<< HEAD
export interface Profiles{
    name: string;
    phoneNumber: string;
    address :string;
}
export interface editProfiles{
    name: string;
    ConfirmPassword: string;
    password: string;
    address :string;
}
=======
export interface ProductInPaymentProps {
    Pizza: PizzaProps,
    Size: SizeProps
    Thiness: ThicknessProps
    Cheese: ChesseProps
    TotalPrice: number
    objectId: string,
    onSelectTopping?: (img: string, price: number) => void;
}



>>>>>>> tien.pham
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
    Total: string;
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
<<<<<<< HEAD
    Customer: CustomerProps;
    Size: SizeProps;
    Cheese: ChesseProps;
=======
    Size: SizeProps;
    Cheese: ChesseProps;
    PriceCheese: number;
    PricePizza: number;
    PriceSize:number;
    PriceThiness: number;
    TotalPrice: number;
    objectId: string;
>>>>>>> tien.pham
}

export interface PizzaProps{
    objectId: string;
<<<<<<< HEAD
    Price: number;
=======
    Total: number;
>>>>>>> tien.pham
    Image: string;
    PizzaName: string;
}

export interface ThicknessProps{
    objectId: string;
    PriceThickness: number;
    Image: string;
    ThicknessName: string;
}

<<<<<<< HEAD
export interface CustomerProps{
    Fullname: string;
    PhoneNumber: PhoneNumberProps;
    Address: string;
=======
export interface ProfileProps{
    FullName: string;
    PhoneNumber: PhoneNumberProps;
    Address: string;
    Order: OrderProps[];
>>>>>>> tien.pham
}

export interface PhoneNumberProps{
    objectId: string;
<<<<<<< HEAD
    PhoneNumber: number;
}
=======
    phoneNumber: number;
}

>>>>>>> tien.pham
