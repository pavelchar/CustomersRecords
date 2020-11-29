<template>
  <v-row justify="center">
    <v-dialog v-model="isVisible" persistent max-width="380px">
      <v-card>
        <!-- <v-card-title>
          <span class="headline">Customer Info</span>
        </v-card-title> -->
        <v-container>
          <v-card-text class="pa-2">
            <v-row>
              <v-col cols="12" class="d-flex justify-center mt-3">
                <p>{{ text }}</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cancelOnClick">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="confirmOnClick">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { ICustomerRecord } from "@/types/CustomerRecord";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DialogConfirm extends Vue {
  @Prop({
    default: () => {
      return false;
    },
  })
  isVisible!: boolean;
  @Prop({
    default: () => {
      return "";
    },
  })
  text!: string;

  cancelOnClick() {
    this.$emit("closeOnClick");
  }
  confirmOnClick() {
    this.$emit("confirmOnClick", true);
  }
}
</script>
