// prettier-ignore
/* eslint-disable */

import { ICustomerRecord } from '@/types/CustomerRecord';
import Vue from "vue";
import Vuex, { ActionContext, Module } from "vuex";
import ajax from "../CustomerRecordsApiService";

Vue.use(Vuex);

interface AppState {
  customers: Array<ICustomerRecord>
}

const store = new Vuex.Store({
  state: {
    // initially comes from API 
    customers: [
      {
        id: 10,
        name: "BBB Group",
        email: "info@bbbgroup.com",
        address: "123 3rd St Davis, CA 95836"
      },
      {
        id: 20,
        name: "AutoZone",
        email: "info@autozone.com",
        address: "4567 Columbus St Travis, CA 94657"
      },
      {
        id: 30,
        name: "Domus Law Group",
        email: "account@domuslaw.com",
        address: "345 5th St Rocklin, CA 95600"
      },
      {
        id: 40,
        name: "Costco",
        email: "info@costco.com",
        address: "2356 Park Ave Redmond, WA 92810"
      }
    ]
  },
  getters: {
    getCustomers() {
      return this.customers;
    }
  },
  mutations: {
    addNewCustomer(state: AppState, data: ICustomerRecord) {
      data.id = Math.floor(Math.random() * 1000);
      while (data.id == undefined || state.customers.some(i => i.id == data.id)) {
        data.id = Math.floor(Math.random() * 1000);
      }
      state.customers.push(data);
    },
    updateCustomer(state: AppState, data: ICustomerRecord) {
      const idx = state.customers.findIndex(i => i.id == data.id);
      state.customers.splice(idx, 1, data);
    },
    deleteCustomer(state: AppState, id: number) {
      const idx = state.customers.findIndex((i: any) => i.id == id);
      state.customers.splice(idx, 1);
    }
  },
  actions: {
    async getAllRecords(context: ActionContext<AppState, any>) {
      // original api call
      //await ajax.get("/");
      return Promise.resolve(context.state.customers);
    },
    async createRecord(context: ActionContext<AppState, any>, data: ICustomerRecord) {
      // original api call
      // const res = await ajax.post("/", data) 
      // return res.data
      context.commit("addNewCustomer", data);
      return Promise.resolve(context.state.customers);
    },
    async updateRecord(context: ActionContext<AppState, any>, data: ICustomerRecord) {
      // original api call
      // const res = await ajax.put(`/${data.id}`, data) 
      // return res.data;
      context.commit("updateCustomer", data);
      return Promise.resolve(context.state.customers);
    },
    async deleteRecord(context: ActionContext<AppState, any>, id: number) {
      // original api call
      // await ajax.delete(`/${id}`);
      context.commit("deleteCustomer", id);
    }
  },
  modules: {}
});

export default store;

