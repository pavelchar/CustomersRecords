<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-item :key="item.id">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>

                <v-list-item-subtitle class="secondary--text" v-text="item.email"></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.address"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action class="d-flex flex-row align-center">
                <v-icon color="primary" class="mr-4" @click="listItemUpdateOnClick(item)">
                  mdi-pencil
                </v-icon>

                <v-icon color="default" @click="listItemDeleteOnClick(item)">
                  mdi-delete
                </v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-btn small class="ml-auto" color="secondary" @click="addNewRecordOnClick">
          <!-- <v-icon>mdi-plus</v-icon> -->
          Add new record
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";

// Javascript version of Vue component
export default {
  name: "CustomerList",
  props: ["items"],
  data: () => ({
    selectedItem: {},
  }),
  computed: {},
  methods: {
    listItemUpdateOnClick(item) {
      this.$emit("showCustomerDialog", item);
    },
    listItemDeleteOnClick(item) {
      this.$emit("deleteCustomer", item.id);
    },
    addNewRecordOnClick() {
      this.$emit("showCustomerDialog");
    },
  },
};
</script>
