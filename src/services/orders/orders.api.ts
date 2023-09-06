import { pb } from '../../pocketbase';
import { Order } from '../../model/order';
import { OrderForm, OrderStatus } from '../../model/order-form';


export async function get() {
  return  pb.collection('orders').getList<Order>();
}

export async function remove(id: string) {
  return pb.collection('orders').delete(id)
}

export async function add(order: OrderForm) {
  return pb.collection('orders').create<Order>(order);
}

export async function toggleStatus(id: string, status: OrderStatus){
  return pb.collection('orders').update<Order>(id, { status })
}