<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Customers</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <customer-list
        :items="customerList"
        @showCustomerDialog="showCustomerInfoDialog"
        @deleteCustomer="deleteCustomerRecordOnClick"
      />
      <dialog-customer-info
        :isVisible="customerInfoDialogVisible"
        :dialogModel="model"
        @closeOnClick="closeCustomerDialog"
        @saveOnClick="createOrUpdateCustomerRecord"
      />
      <dialog-confirm
        :isVisible="dialogConfirmVisible"
        :text="'Are you sure you want to delete this record?'"
        @closeOnClick="dialogConfirmVisible = false"
        @confirmOnClick="confirmRecordDeletion"
      />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomerList from "@/components/CustomerList.vue";
import DialogCustomerInfo from "@/components/dialogs/DialogCustomerInfo.vue";
import DialogConfirm from "@/components/dialogs/DialogConfirm.vue";
import { ICustomerRecord } from "../types/CustomerRecord";

@Component({
  components: {
    CustomerList,
    DialogCustomerInfo,
    DialogConfirm,
  },
})
export default class MainWrapper extends Vue {
  customerList = [];
  loading = false;
  model: ICustomerRecord = {} as ICustomerRecord;
  customerInfoDialogVisible = false;
  dialogConfirmVisible = false;
  deletedItemId?: number;

  created() {
    this.getAll();
  }

  async getAll() {
    this.loading = true;

    try {
      this.customerList = await this.$store.dispatch("getAllRecords");
    } finally {
      this.loading = false;
    }
  }

  async createOrUpdateCustomerRecord() {
    if (this.model.id) {
      await this.$store.dispatch("updateRecord", this.model);
    } else {
      await this.$store.dispatch("createRecord", this.model);
    }
    this.customerInfoDialogVisible = false;
    this.model = {} as ICustomerRecord;
    this.getAll();
  }

  async deleteCustomerRecordOnClick(id: number) {
    this.dialogConfirmVisible = true;
    this.deletedItemId = id as number;
  }

  async confirmRecordDeletion(isConfirmed: boolean) {
    if (isConfirmed) {
      await this.$store.dispatch("deleteRecord", this.deletedItemId);
      this.dialogConfirmVisible = false;
      this.deletedItemId = undefined;
    }
  }

  showCustomerInfoDialog(customerRecord?: ICustomerRecord) {
    this.model = Object.assign({}, customerRecord);
    this.customerInfoDialogVisible = true;
  }

  closeCustomerDialog() {
    this.customerInfoDialogVisible = false;
    this.model = {} as ICustomerRecord;
  }
}
</script>
