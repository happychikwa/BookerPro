import { z } from 'zod';

const ReservationSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    checkInDate: z.string().date(),
    checkOutDate: z.string().date(),
    accomodation: z.string(),
    amount: z.number(),
    phone: z.string(),
});

export default ReservationSchema;