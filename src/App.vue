<script setup>
import { ref } from "vue";

import Bill from "./components/BillAmount.vue";
import BillDivide from "./components/BillDivide.vue";
import Tip from "./components/TipAmount.vue";
import Card from "./components/Card.vue";

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
        <Transition name="slide-fade">
            <Card v-if="billDivide > 1">
                <div class="bill-per-person__label">Bill Per Person</div>
                <div class="bill-per-person__amount">
                    ${{ (bill / billDivide).toFixed(2) }}
                </div>
            </Card>
        </Transition>
        <Tip :bill="bill / billDivide" :tipPercent="10" />
        <Tip :bill="bill / billDivide" :tipPercent="15" />
        <Tip :bill="bill / billDivide" :tipPercent="20" />
        <Tip :bill="bill / billDivide" :tipPercent="25" />
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    /* transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1); */
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
