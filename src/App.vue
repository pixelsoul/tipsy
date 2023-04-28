<script setup>
import { ref } from "vue";

import Bill from "./components/BillAmount.vue";
import BillDivide from "./components/BillDivide.vue";
import Tip from "./components/TipAmount.vue";

const bill = ref(0.0);
const billDivide = ref(1);

const updateBill = (value) => {
    bill.value = value;
};

const updateBillDivide = (value) => {
    billDivide.value = value;
};
</script>

<template>
    <div class="app">
        <Bill :bill="bill" @update:bill="updateBill" />
        <BillDivide
            :billDivide="billDivide"
            @update:billDivide="updateBillDivide"
        />
        <Tip :bill="bill / billDivide" :tipPercent="10" />
        <Tip :bill="bill / billDivide" :tipPercent="15" />
        <Tip :bill="bill / billDivide" :tipPercent="20" />
        <Tip :bill="bill / billDivide" :tipPercent="25" />
    </div>
</template>

<style scoped></style>
