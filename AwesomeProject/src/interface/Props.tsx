export interface ToppingButtonProps {
    showImage: boolean;
    setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
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