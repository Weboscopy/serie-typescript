function pay (amount: number) : void
function pay (cardId : bigint, amount: number) : void
function pay (stripeId: string,  paymentId: string, amount: number): void 

function pay (arg1 : unknown, arg2?: unknown, arg3?: unknown) : void {
    if(typeof arg1 === "number"){
        console.log(`Paiement cash  de ${arg1} €`)
    } else if (typeof arg1 === "bigint"){
        console.log(`Paiement par carte ${arg1} pour la somme de ${arg2} €`)
    } else if (typeof arg1 === "string"){
        console.log(`Stripe ID ${arg1} payment ${arg2} : ${arg3} €`)
    }
}

pay(23)
pay(39929399388823n, 20)
pay("stripe_29293993", "pay_88228383883", 20)



