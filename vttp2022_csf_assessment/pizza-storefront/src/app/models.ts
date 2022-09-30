// Add your models here if you have any

export interface DetailsForm {
    email: string
    name: string
}

export interface PizzaOrder {
    name: string
    email: string
    size: number
    base: string
    sauce: string
    toppings: string
    comments: string
}