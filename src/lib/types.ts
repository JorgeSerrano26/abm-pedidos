export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  created_at: string;
}

export interface Order {
  id: string;
  client_id: string;
  total_price: number;
  payment_method: string;
  status: OrderStatus;
  delivery_date: string;
  created_at: string;
  shipment_id: string;
}

export interface OrderProduct {
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
}

export interface Shipment {
  id: string;
  status: ShipmentStatus;
  delivery_date: string;
  created_at: string;
}

export enum OrderStatus {
  REQUESTED = 'REQUESTED',
  RECEIVED = 'RECEIVED',
  READY_TO_SHIP = 'READY_TO_SHIP',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED'
}

export enum ShipmentStatus {
  READY_FOR_DELIVERY = 'READY_FOR_DELIVERY',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED'
}

export enum PaymentMethod {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  TRANSFER = 'TRANSFER'
}