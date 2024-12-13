import { supabase } from "../lib/supabase";

type Client = {
    id: string;
    name: string;
    phone: string;
}

export interface Address {
    id: string;
    door: string | null;
    type: string;
    floor: string | null;
    number: string;
    address: string;
}


export default class ClientService {
    static async getClients() {
        return supabase.from("clients",).select<string, Client>(`
            id,
            name,
            phone,
            addresses (
                id,
                address,
                number,
                type,
                floor,
                door
            )
        `);

    }
    static async deleteClient(id: string) {
        return supabase.from("clients").delete().eq("id", id);
    }

    static async getClient(id: string) {
        return supabase.from("clients").select<string, Client>(`
            id,
            name,
            phone,
            addresses (
                id,
                address,
                number,
                type,
                floor,
                door
            )
        `).eq("id", id).single();
    }
}