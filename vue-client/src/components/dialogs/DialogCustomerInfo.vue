<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Customer Info</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="dialogModel.name" label="Name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dialogModel.email" label="Email" type="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dialogModel.address" label="Address" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialogOnClick">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveOnClick">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { ICustomerRecord } from "@/types/CustomerRecord";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DialogCustomerInfo extends Vue {
  @Prop({
    default: () => {
      return false;
    },
  })
  isVisible!: boolean;
  @Prop({
    default: () => {
      return {} as ICustomerRecord;
    },
  })
  dialogModel!: ICustomerRecord;

  closeDialogOnClick() {
    this.$emit("closeOnClick");
  }
  saveOnClick() {
    this.$emit("saveOnClick");
  }
}
</script>
