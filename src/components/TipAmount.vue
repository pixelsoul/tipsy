<script setup>
import { computed } from "vue";
import Card from "./Card.vue";
import CurrencyDisplay from "./CurrencyDisplay.vue";

const props = defineProps({
    bill: {
        type: Number,
        required: false,
        default: 0,
    },
    tipPercent: {
        type: Number,
        required: false,
        default: 15,
    },
});

const tipAmount = computed(() => {
    return (props.bill * props.tipPercent) / 100;
});

const total = computed(() => {
    return props.bill + tipAmount.value;
});
</script>

<template>
    <Card>
        <template #header> {{ tipPercent }}% Tip </template>

        <div class="tip-amount__data">
            <CurrencyDisplay
                title="Tip"
                :amount="tipAmount"
            ></CurrencyDisplay>
            <CurrencyDisplay
                title="Total"
                :amount="total"
            ></CurrencyDisplay>
        </div>
    </Card>
</template>

<style scoped>
.tip-amount__data {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
}

@media (min-width: 768px) {
    .tip-amount__data {
        flex-direction: row;
    }
}
</style>
