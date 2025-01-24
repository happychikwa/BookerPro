export type Invoice = {
    customer_id: number,
    total: number,
    apartment_name: [string,number],
    checkin_date: string,
    checkout_date: string
}

export type ApartmentQuantity = {
    quantity: number
}

export type CalenderDates = {
    startDate: Date,
    endDate: Date
}

export type ApartmentName = {
    apartment: string
}